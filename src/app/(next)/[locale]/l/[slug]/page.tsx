import { redirect } from "next/navigation";
import payloadConfig from "@/payload.config";
import { getPayloadHMR } from "@payloadcms/next/utilities";

import Header from "@/components/Header";
import BlockedModule from "@/components/BlockedModule";
import Constructor from "@/components/Constructor";
import ExternalLinkModule from "@/components/ExternalLinkModule";
import WifiModule from "@/components/WifiModule";
import DigicodeModule from "@/components/DigicodeModule";
import CommandationModule from "@/components/CommandationModule";
import Module from "@/components/Module";

import style from './page.module.scss';
import { RefreshRouteOnSave } from "./components/RefreshRouteOnSave";

export const dynamic = 'force-dynamic'

const GET_ESTABLISHMENT = async (slug: string, livePreview: boolean, securityPin: string | null, locale: string) => {
    try {
        const payload = await getPayloadHMR({
            config: payloadConfig,
        });

        const establishments = await payload.find({
            collection: 'establishments',
            draft: livePreview,
            locale: locale as any,
            where: {
                slug: {
                    equals: slug,
                }
            },
        });

        if (!establishments) throw new Error('Establishment not found');
        if (establishments.totalDocs === 0) throw new Error('Establishment not found');

        const establishment = establishments.docs[0];

        const securityPinAdmin = establishment.pageDetails.securityPin;
        establishment.pageDetails.securityPin = '';

        try {
            if (!securityPin) throw new Error('Security pin required');
            if (securityPin !== securityPinAdmin) throw new Error('Invalid security pin');
        } catch {
            for (let m of establishment?.modules ?? []) {
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
        }

        return establishment;
    } catch {
        return null;
    }
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const { slug } = params;

    try {
        const payload = await getPayloadHMR({
            config: payloadConfig
        });

        const establishments = await payload.find({
            collection: 'establishments',
            where: {
                slug: {
                    equals: slug
                }
            }
        });

        if (establishments.totalDocs === 0) throw new Error('Establishment not found');

        return {
            title: establishments.docs[0].metadata.title,
            description: establishments.docs[0].metadata.description
        }
    } catch {
        return {
            title: "Livret d'accueil",
            description: "Bienvenue dans votre logement"
        }
    }
}

export default async function Page({ params, searchParams }: { params: { slug: string, locale: string }, searchParams: { securityPin: string | null, livePreview: boolean | null } }) {
    const { slug, locale } = params;
    const { securityPin, livePreview } = searchParams;

    const data: any = await GET_ESTABLISHMENT(slug, livePreview ? true : false, securityPin, locale);
    if (!data) return redirect('/404');

    return (
        <>
            <RefreshRouteOnSave />
            {data && (
                <main className={style.Page}>
                    <Header title={data.pageDetails.welcomeMessage.title} description={data.pageDetails.welcomeMessage.description} profileImage={data.pageDetails.welcomeMessage.profileImage} />

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