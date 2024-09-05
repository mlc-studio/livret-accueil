import { Layout, SquareList } from ".";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import payloadConfig from "@/payload.config";

const ModulesGuide = async ({ i18n }: any) => {
    const locale = i18n.language;

    const payload = await getPayloadHMR({
        config: payloadConfig,
    });

    const FAQs = await payload.findGlobal({
        slug: 'questions',
        locale
    });

    const modules = FAQs.modules;
    if (!modules) return null;

    return (
        <>
        { modules.isActivated && (
            <Layout title={modules.title as any}>
                <SquareList question={modules as any} />
            </Layout>
        )}
        </>
    )
}

export default ModulesGuide;