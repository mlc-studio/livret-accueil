import { Media } from '@/payload-types';
import React from 'react';

interface VideoBlockProps {
    videoType: 'link' | 'mediaLibrary';
    videoLink?: string;
    videoFile?: Media;
    title?: string;
    caption?: string;
}

export default function VideoBlock({ videoType, videoLink, videoFile, title, caption }: VideoBlockProps) {
    const getEmbedUrl = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        if (match && match[2].length === 11) {
            return `https://www.youtube.com/embed/${match[2]}`;
        }
        return url;
    };

    const videoSrc = videoType === 'link' ? getEmbedUrl(videoLink || '') : videoFile?.url;

    return (
        <div className="py-4 sm:py-8">
            {title && <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">{title}</h2>}
            <div className="relative w-full pt-[56.25%] mb-2 sm:mb-4">
                {videoType === 'link' ? (
                    <iframe
                        src={videoSrc || ''}
                        title={title || "Video"}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                    ></iframe>
                ) : (
                    <video
                        src={videoSrc || ''}
                        controls
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                    >
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>
            {caption && <figcaption className="text-base text-gray-600 italic text-center">{caption}</figcaption>}
        </div>
    );
}