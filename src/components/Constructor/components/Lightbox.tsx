import React, { useState } from 'react';
import { createPortal } from 'react-dom';
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

    return createPortal(
        <>
            {isOpen && (
                <div className={style.Lightbox}>
                    <div className={style.LightboxContainer}>
                        <div className={style.LightboxContent}>
                            <button className={style.LightboxButton} onClick={handlePrevious}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                            <div className={style.LightboxImage}>
                                <img src={images[currentImage].image.url} alt={images[currentImage].image.alt || 'Lightbox image'} />
                                <div className={style.LightboxDots}>
                                    {images.map((image: any, index: number) => (
                                        <div key={index} className={style.LightboxDot + (currentImage === index ? ' ' + style.Active : '')} onClick={() => setCurrentImage(index)} />
                                    ))}
                                </div>
                            </div>
                            <button className={style.LightboxButton} onClick={handleNext}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className={style.LightboxBackground} onClick={handleClose}></div>
                </div>
            )}
        </>
        , document.body);
};

export default Lightbox;