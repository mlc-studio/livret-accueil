import payloadConfig from "@/payload.config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { redirect } from "next/navigation";
import { Container } from "./components/container";
import { Header } from "./components/header";
import { ButtonBlock, FormBlock, ImageBlock, ImageGalleryBlock, ListBlock, QuoteBlock, TextBlock, VideoBlock } from "./components/blocks";
import { Media } from '@/payload-types';

const GET_PAGE_BY_SLUG = async (slug: string) => {
    try {
        const payload = await getPayloadHMR({
            config: payloadConfig
        });

        const pages = await payload.find({
            collection: 'pages',
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

const Page = async ({ params }: { params: { slug: string } }) => {
    const { slug } = params;

    const data = await GET_PAGE_BY_SLUG(slug);
    if (!data) return redirect('/404');

    return (
        <>
            <Header header={data?.header} />
            <Container>
                <main className="pb-4 sm:pb-8">
                    {/* <TextBlock title="Welcome to our website!" description="This is a test description" />
                    <QuoteBlock quoteText="Without courage we cannot practice any other virtue with consistency. We can't be kind, true, merciful, generous, or honest." author="John Doe" />
                    <TextBlock title="I was wondering why the sun was shining. And then it dawned on me." description="John Doe" />
                    <ButtonBlock buttons={[{ text: 'Click me', url: 'https://www.google.com' }, { text: 'Click me', url: 'https://www.google.com' }, { text: 'Click me', url: 'https://www.google.com' }]} />
                    <ImageGalleryBlock images={[{ image: { alt: 'Image 1', url: 'https://via.placeholder.com/600x400' }}, { image: { alt: 'Image 2', url: 'https://via.placeholder.com/600x400' }}, { image: { alt: 'Image 2', url: 'https://via.placeholder.com/600x400' }}, { image: { alt: 'Image 2', url: 'https://via.placeholder.com/600x400' }}]} title="Image Gallery" />
                    <ImageBlock image="https://via.placeholder.com/600x400" caption="Image 1" />
                    <ImageBlock image="https://via.placeholder.com/600x400" caption="Image 2" />
                    <ListBlock title="List of vehicles" items={["BMW", "Mercedes", "Audi", "Volkswagen"]} />
                    <VideoBlock videoLink="https://www.youtube.com/embed/_GDX36KvlkA" title="Video 1" caption="This is a video caption" />
                    <FormBlock title="Contact Us" description="Please fill out the form below to contact us." /> */}
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
        </>
    )
}

export default Page;