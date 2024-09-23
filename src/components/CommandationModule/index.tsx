'use client'

import Module from "../Module";

import { useRouter } from "@/i18n/routing";

const CommandationModule = ({ data }: any) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/commandation/${data.id}`);
    }

    return (
        <>
            <Module title={data.title} icon={data.icon} onClick={handleClick} />
        </>
    )
};

export default CommandationModule;