export const dynamic = 'force-dynamic';

import Header from './components/Header';

import style from './page.module.scss';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import payloadConfig from '@/payload.config';
import Link from 'next/link';
import CommandationList from './components/CommandationList';

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
                { data && data?.array && <CommandationList data={data} /> }
            </div>
        </div>
    )
}