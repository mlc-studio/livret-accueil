
import { redirect } from 'next/navigation';
import { getPayloadHMR } from '@payloadcms/next/utilities';

import payloadConfig from '@/payload.config';

import Header from './components/Header';
import CommandationList from './components/CommandationList';

import style from './page.module.scss';

export const dynamic = 'force-dynamic';

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

export const metadata = {
    title: 'Nos recommandations - Livret d\'accueil Airbnlove',
    description: 'Découvrez les recommandations de l\'établissement'
}

export default async function Page({ params }: { params: { id: string } }) {
    const data = await GET_MODULE_BY_ID(params.id);
    if (!data) return redirect('/404');

    return (
        <div className={style.Page}>
            <Header />
            <div className={style.ArrayContainer}>
                { data && data?.array && <CommandationList data={data} /> }
            </div>
        </div>
    )
}