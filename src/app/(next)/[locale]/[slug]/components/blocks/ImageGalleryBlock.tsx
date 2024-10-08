import React from 'react';
import { Media } from '@/payload-types';

interface ImageGalleryBlockProps {
    images: {
        image: Media;
        caption?: string;
    }[];
    title?: string;
}

export default function ImageGalleryBlock({ images, title }: ImageGalleryBlockProps) {
    return (
        <div className="py-8">
            {title && <h2 className="text-3xl font-bold mb-6">{title}</h2>}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((item, index) => (
                    <div key={index} className="aspect-w-16 aspect-h-9 space-y-2">
                        <img
                            alt={item.image.alt || ''}
                            src={item.image.url || ''}
                            className="rounded-lg"
                        />
                        {item.caption && (
                            <figcaption className="text-base text-gray-600 italic text-center">{item.caption}</figcaption>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}