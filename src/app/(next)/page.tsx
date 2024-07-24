import WifiModule from "@/components/WifiModule";
import payloadConfig from "@/payload.config";
import { getPayload } from "payload";
import Module from "@/components/Module";

import style from './page.module.css';

export const dynamic = 'force-dynamic'

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
                <main>
                    <div className="welcome">
                        <div className="welcome__container">
                            <div className="welcome__background">
                                <img src={data.pageDetails.backgroundImage.url} alt="background" />
                            </div>

                            <div className="welcome__content">
                                <div className="welcome__profile">
                                    <img src={data?.pageDetails?.welcomeMessage?.profileImage?.url} alt="profile" />
                                </div>
                                <div className="welcome__text">
                                    <h2 className="welcome__title">{data.pageDetails.welcomeMessage.title}</h2>
                                    <p className="welcome__description">{data.pageDetails.welcomeMessage.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={style.Modules}>
                        <div className={style.ModulesContainer}>
                            {data.modules.map(({ module }: any, index: number) => {
                                const moduleType = module.select.modules;

                                switch (moduleType) {
                                    case 'wifi':
                                        return <WifiModule key={index} data={module} />
                                    case 'home':
                                        return <Module key={index} title={module.title} icon={module.icon} />
                                    case 'pin-code':
                                        return <Module key={index} title={module.title} icon={module.icon} />
                                    default:
                                        return <Module key={index} title={module.title} icon={module.icon} />
                                }
                            })}
                        </div>
                    </div>

                    {/* <pre>
                {JSON.stringify(data, null, 2)}
            </pre> */}
                </main>
            )}
        </>
    )
}