import payloadConfig from "@/payload.config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { redirect } from "next/navigation";
import { Container } from "./components/container";
import { Header } from "./components/header";
import { ButtonBlock, ImageBlock, ImageGalleryBlock, ListBlock, QuoteBlock, TextBlock, VideoBlock } from "./components/blocks";
import { Media } from '@/payload-types';
import Footer from "./components/footer";

const GET_PAGE_BY_SLUG = async (slug: string, locale: string = 'fr') => {
    try {
        const payload = await getPayloadHMR({
            config: payloadConfig
        });

        const pages = await payload.find({
            collection: 'pages',
            locale: locale as any,
            where: {
                'settings.slug': {
                    equals: slug
                }
            }
        });

        if (!pages) throw new Error('Page not found');
        if (pages.totalDocs === 0) throw new Error('Page not found');

        return pages.docs[0];
    } catch (e) {
        console.error(e);
        return null;
    }
}

export const generateMetadata = async ({ params: { slug = 'home', locale } }: { params: { slug: string, locale: string } }) => {
    const data = await GET_PAGE_BY_SLUG(slug, locale);
    if (!data) return redirect('/404');

    return {
        title: data?.metadata?.title,
        description: data?.metadata?.description,
    }
}

const Page = async ({ params: { slug = 'home', locale } }: { params: { slug: string, locale: string } }) => {
    const data = await GET_PAGE_BY_SLUG(slug, locale);
    if (!data) return redirect('/404');

    return (
        <>
            <Header header={data?.header} />
            <Container>
                <main className="py-4 sm:py-8">
                    {data?.layout?.map((block, index) => {
                        switch (block.blockType) {
                            case 'textBlock':
                                return <TextBlock key={index} title={block.title || ''} description={block.description || ''} />;
                            case 'imageBlock':
                                return <ImageBlock key={index} image={block.image || ''} caption={block.caption || ''} title={block.title || ''} />;
                            case 'listBlock':
                                return <ListBlock key={index} title={block.title || ''} description={block.description || ''} items={block.items?.map(item => item.item || '') || []} />;
                            case 'imageGalleryBlock':
                                return <ImageGalleryBlock key={index} title={block.title || ''} images={block.images?.map(media => ({ image: media.image as Media, caption: media.caption || '' })) || []} />;
                            case 'quoteBlock':
                                return <QuoteBlock key={index} quote={block.quote || ''} author={block.author || ''} />;
                            case 'videoBlock':
                                return <VideoBlock key={index} videoType={block.videoType as 'link' | 'mediaLibrary'} videoLink={block.videoLink || ''} videoFile={block.videoFile as Media | undefined} title={block.title || ''} caption={block.caption || ''} />;
                            case 'buttonsBlock':
                                return <ButtonBlock key={index} buttons={block.buttons?.map(button => ({ text: button.text || '', url: button.url || '', style: button.style || 'plain' })) || []} />;
                            default:
                                return null;
                        }
                    })}
                </main>
            </Container>
            <Footer />
        </>
    )
}

export default Page;