import payloadConfig from "@/payload.config";
import { getPayload } from "payload";

import Module from "@/components/Module";
import WifiModule from "@/components/WifiModule";
import Constructor from "@/components/Constructor";
import ExternalLinkModule from "@/components/ExternalLinkModule";
import DigicodeModule from "@/components/DigicodeModule";
import BlockedModule from "@/components/BlockedModule";
import Header from "@/components/Header";

import style from './page.module.scss';
import CommandationModule from "@/components/CommandationModule";

export const dynamic = 'force-dynamic'

export async function generateMetadata() {
    try {
        const payload = await getPayload({
            config: payloadConfig
        });

        const homePage = await payload.findGlobal({
            slug: 'home'
        });

        if (!homePage) throw new Error('Home page not found');

        return {
            title: homePage.metadata.title,
            description: homePage.metadata.description
        }
    } catch {
        return {
            title: "Livret d'accueil",
            description: "Bienvenue dans votre logement"
        }
    }
}

const GET_HOME_PAGE = async (securityPin: string | null) => {
    try {
        const payload = await getPayload({
            config: payloadConfig
        });

        const homePage = await payload.findGlobal({
            slug: 'home'
        });

        if (!homePage) throw new Error('Home page not found');

        const securityPinAdmin = homePage.pageDetails.securityPin;
        homePage.pageDetails.securityPin = '';

        try {
            if (!securityPin) throw new Error('Security pin required');

            if (securityPin !== securityPinAdmin) throw new Error('Invalid security pin');

            return homePage;
        } catch {
            for (let m of homePage?.modules ?? []) {
                if (typeof m.module !== 'string' && m.secure) {
                    m.id = m.module.id;
                    m.enabled = m.enabled;
                    m.secure = m.secure;
                    m.module = {
                      id: m.module.id,
                      select: m.module.select,
                      title: m.module.title,
                      icon: m.module.icon,
                      blocked: true
                    } as any;
                }
            }

            return homePage;
        }
    } catch {
        return null;
    }
}

export default async function Page({ searchParams }: any) {
    const { securityPin } = searchParams;
    const data: any = await GET_HOME_PAGE(securityPin);

    if (!data) return null;

    return (
        <>
            {data && (
                <main className={style.Page}>
                    <Header title={data.pageDetails.welcomeMessage.title} description={data.pageDetails.welcomeMessage.description} profileImage={data.pageDetails.welcomeMessage.profileImage} />

                    <div className={style.Modules}>
                        <div className={style.ModulesContainer}>
                            {data.modules.map(({ module, enabled, secure }: any, index: number) => {
                                const moduleType = module.select.modules;

                                if (!enabled) return null;
                                if (module.blocked) return <BlockedModule key={index} data={module} />

                                switch (moduleType) {
                                    case 'constructor':
                                        return <Constructor key={index} data={module} />
                                    case 'external-link':
                                        return <ExternalLinkModule key={index} data={module} />
                                    case 'wifi':
                                        return <WifiModule key={index} data={module} />
                                    case 'digicode':
                                        return <DigicodeModule key={index} data={module} />
                                    case 'commandation':
                                        return <CommandationModule key={index} data={module} />
                                    default:
                                        return <Module key={index} title={module.title} icon={module.icon} />
                                }
                            })}
                        </div>
                    </div>
                </main>
            )}
        </>
    )
}