import { Media } from '@/payload-types';
import Image from 'next/image';

interface ImageBlockProps {
    image: string | Media;
    caption?: string;
    title?: string;
}

export default function ImageBlock({ image, caption, title }: ImageBlockProps) {
    const imageUrl = typeof image === 'string' ? image : image.url || '';
    const imageAlt = typeof image === 'string' ? '' : image.alt || '';
    const imageWidth = typeof image === 'string' ? 0 : image.width || 0;
    const imageHeight = typeof image === 'string' ? 0 : image.height || 0;

    return (
        <figure className="py-4 sm:py-8">
            {title && <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">{title}</h2>}
            <div className="mb-2 sm:mb-4">
                <Image
                    src={`${process.env.NEXT_PUBLIC_APP_DOMAIN}${imageUrl}`}
                    alt={imageAlt}
                    width={imageWidth}
                    height={imageHeight}
                    className="w-full h-auto rounded-lg"
                />
            </div>
            {caption && <figcaption className="text-base text-gray-600 italic text-center">{caption}</figcaption>}
        </figure>
    );
}