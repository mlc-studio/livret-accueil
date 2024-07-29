'use client'

import { useState, useEffect } from "react";

const NextImage = ({ src, ...props }: any) => {
    const [currentImage, setCurrentImage] = useState(src);
    const [loading, setLoading] = useState(true);

    const fetchImage = (source: string) => {
        const loadingImage = new Image();
        loadingImage.src = source;
        loadingImage.onload = () => {
            setCurrentImage(loadingImage.src);
            setLoading(false);
        };
    };

    useEffect(() => {
        fetchImage(src);
    }, []);

    return (
        <img style={{
            opacity: `${loading ? '0' : '1'}`,
            transition: '0.5s opacity linear'
          }} src={currentImage} {...props} />
    )
}

export default NextImage;