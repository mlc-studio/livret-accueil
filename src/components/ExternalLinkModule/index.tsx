'use client'

import Module from "../Module";

const ExternalLinkModule = ({ data }: any) => {
    const { externalLink } = data;

    const handleRedirect = () => {
        window.open(externalLink.url, '_blank');
    }

    return (
        <>
            <Module title={data.title} icon={data.icon} onClick={handleRedirect} />
        </>
    )
}

export default ExternalLinkModule;