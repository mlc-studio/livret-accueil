import WifiModule from "@/components/WifiModule";
import payloadConfig from "@/payload.config";
import { getPayload } from "payload";
import Module from "@/components/Module";

import style from './page.module.css';
import Constructor from "@/components/Constructor";

export const dynamic = 'force-dynamic'

export const metadata = {
    title: 'Home',
    description: 'Home page',
}

const GET_HOME_PAGE = async () => {
    try {
        const payload = await getPayload({
            config: payloadConfig
        });

        const homePage = await payload.findGlobal({
            slug: 'home'
        });

        return homePage;
    } catch {
        return null;
    }
}

export default async function Page() {
    const data: any = await GET_HOME_PAGE();

    if (!data) return null;

    return (
        <>
            {data && (
                <main className={style.Page}>
                    <div className={style.Welcome}>
                        <div className={style.WelcomeContainer}>
                            <div className={style.WelcomeBackground}>
                                <img src={data.pageDetails.backgroundImage.url} alt="background" />
                            </div>

                            <div className={style.WelcomeContent}>
                                {
                                    data?.pageDetails?.welcomeMessage?.profileImage?.url && (
                                        <div className={style.WelcomeImage}>
                                            <img src={data?.pageDetails?.welcomeMessage?.profileImage?.url} alt="profile" />
                                        </div>
                                    )
                                }

                                <div className={style.WelcomeText}>
                                    <h2 className="welcome__title">{data.pageDetails.welcomeMessage.title}</h2>
                                    <p className="welcome__description">{data.pageDetails.welcomeMessage.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={style.Modules}>
                        <div className={style.ModulesContainer}>
                            {data.modules.map(({ module, enabled }: any, index: number) => {
                                const moduleType = module.select.modules;

                                if (!enabled) return null;

                                switch (moduleType) {
                                    case 'wifi':
                                        return <WifiModule key={index} data={module} />
                                    case 'constructor':
                                        return <Constructor key={index} data={module} />
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