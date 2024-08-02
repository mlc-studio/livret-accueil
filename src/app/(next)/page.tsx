import WifiModule from "@/components/WifiModule";
import payloadConfig from "@/payload.config";
import { getPayload } from "payload";
import Module from "@/components/Module";

import style from './page.module.css';
import Constructor from "@/components/Constructor";
import NextImage from "@/components/NextImage";
import ExternalLinkModule from "@/components/ExternalLinkModule";
import DigicodeModule from "@/components/DigicodeModule";
import BlockedModule from "@/components/BlockedModule";

export const dynamic = 'force-dynamic'

export const metadata = {
    title: 'Home',
    description: 'Home page',
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
                if (typeof m.module !== 'string') {
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
                    <div className={style.Welcome}>
                        <div className={style.WelcomeContainer}>
                            <div className={style.WelcomeBackground}>
                                <NextImage src={data.pageDetails.backgroundImage.url} alt="background" />
                            </div>

                            <div className={style.WelcomeContent}>
                                {
                                    data?.pageDetails?.welcomeMessage?.profileImage?.url && (
                                        <div className={style.WelcomeImage}>
                                            <NextImage src={data?.pageDetails?.welcomeMessage?.profileImage?.url} alt="profile" />
                                        </div>
                                    )
                                }

                                <div className={style.WelcomeText}>
                                    <h2 className={style.WelcomeTitle}>{data.pageDetails.welcomeMessage.title}</h2>
                                    <p className={style.WelcomeDescription}>{data.pageDetails.welcomeMessage.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={style.Modules}>
                        <div className={style.ModulesContainer}>
                            {data.modules.map(({ module, enabled }: any, index: number) => {
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