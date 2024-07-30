import React, { useState } from 'react';
import style from './Lightbox.module.css';

const Lightbox = ({ images, isOpen, handleClose }: any) => {
    const [currentImage, setCurrentImage] = useState(0);

    const handleNext = () => {
        if (currentImage < images.length - 1) {
            setCurrentImage(currentImage + 1);
        } else {
            setCurrentImage(0);
        }
    };

    const handlePrevious = () => {
        if (currentImage > 0) {
            setCurrentImage(currentImage - 1);
        } else {
            setCurrentImage(images.length - 1);
        }
    };

    return (
        <>
            {isOpen && (
                <div className={style.Lightbox}>
                    <div className={style.LightboxContent}>
                        <div className={style.lightboxClose} onClick={handleClose}>Close</div>
                        <div className={style.LightboxImage}>
                            <img src={images[currentImage].image.url} alt={images[currentImage].image.alt} />
                        </div>
                        <div className={style.LightboxNavigation}>
                            <div className={style.lightboxPrev} onClick={handlePrevious}>Previous</div>
                            <div className={style.lightboxNext} onClick={handleNext}>Next</div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Lightbox;