import { Layout, SquareList } from ".";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import payloadConfig from "@/payload.config";

const EstablishmentsGuide = async ({ i18n }: any) => {
    const locale = i18n.language;

    const payload = await getPayloadHMR({
        config: payloadConfig,
    });

    const FAQs = await payload.findGlobal({
        slug: 'questions',
        locale
    });

    const establishments = FAQs.establishments;
    if (!establishments) return null;

    return (
        <>
        { establishments.isActivated && (
            <Layout title={establishments.title as any}>
                <SquareList question={establishments as any} />
            </Layout>
        )}
        </>
    )
}

export default EstablishmentsGuide;