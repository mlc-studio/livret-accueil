import { Media } from '@/payload-types';

interface ImageBlockProps {
    image: string | Media;
    caption?: string;
    title?: string;
}

export default function ImageBlock({ image, caption, title }: ImageBlockProps) {
    const imageUrl = typeof image === 'string' ? image : image.url || '';
    const imageAlt = typeof image === 'string' ? '' : image.alt || '';

    return (
        <figure className="py-4 sm:py-8">
            {title && <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">{title}</h2>}
            <div className="mb-2 sm:mb-4">
                <img
                    src={imageUrl}
                    alt={imageAlt}
                    className="w-full h-auto rounded-lg"
                />
            </div>
            {caption && <figcaption className="text-base text-gray-600 italic text-center">{caption}</figcaption>}
        </figure>
    );
}