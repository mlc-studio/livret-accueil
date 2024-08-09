export const dynamic = 'force-dynamic';

import Header from './components/Header';

import style from './page.module.scss';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import payloadConfig from '@/payload.config';
import Link from 'next/link';

const GET_MODULE_BY_ID = async (id: string) => {
    try {
        const payload = await getPayloadHMR({
            config: payloadConfig
        });

        const res = await payload.findByID({
            collection: 'modules',
            id
        });

        if (!res) throw new Error('Module not found');

        return res.commandation;
    } catch {
        return null;
    }
}

export default async function Page({ params }: { params: { id: string } }) {
    const data = await GET_MODULE_BY_ID(params.id);

    if (!data) return (
        <div className={style.Page}>
            <Header />
            <div className={style.NotFound}>
                <h1>Module not found</h1>
                <Link href="/">
                    Go back to home
                </Link>
            </div>
        </div>
    )

    return (
        <div className={style.Page}>
            <Header />
            <div className={style.ArrayContainer}>
                { data && data.array && data.array.map((item: any, index: number) => (
                    <div className={style.ArrayItem} key={index}>
                        <div className={style.ArrayItemHeader}>
                            <h2 className={style.ArrayItemTitle}>
                                {item.title}
                            </h2>
                            <div className={style.ArrayItemIcon}>
                                <img src={item.titleIcon.url} alt={item.titleIcon.alt} />
                            </div>
                        </div>
                        <div className={style.CommandationList}>
                            {item.commandationList.map((commandation: any, index: number) => (
                                <div key={index} className={style.CommandationItem}>
                                    <div className={style.CommandationItemImage}>
                                        <img src={commandation.image.url} alt={commandation.image.alt} />
                                    </div>
                                    <div className={style.CommandationItemContent}>
                                        <h3 className={style.CommandationItemTitle}>
                                            {commandation.name}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}