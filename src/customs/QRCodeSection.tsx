'use client'

import { useState } from 'react';
import QR_LIVRET from '../assets/img/QR_LIVRET.jpg'

import style from './QRCodeSection.module.scss';

const QRCodeSection = () => {
    const [generating, setGenerating] = useState(false);

    const loadImage = (src: string) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = 'Anonymous';
            img.src = src;
            img.onload = () => resolve(img);
            img.onerror = reject;
        });
    };

    const handlePrintQrCode = async () => {
        setGenerating(true);

        try {
            const domain = window.location.origin;
            const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${domain}`;

            const qrcodeImg = await loadImage(qrCodeUrl) as HTMLImageElement;
            const qrcodeTemplate = await loadImage(QR_LIVRET.src) as HTMLImageElement;

            const canvas = document.createElement('canvas');
            canvas.width = qrcodeTemplate.width;
            canvas.height = qrcodeTemplate.height;

            const ctx = canvas.getContext('2d');
            ctx?.drawImage(qrcodeTemplate, 0, 0);
            ctx?.drawImage(qrcodeImg, 85, 172);

            const a = document.createElement('a');
            a.href = canvas.toDataURL('image/png');
            a.download = 'qrcode.png';
            a.click();

            console.log('QR Code printed');
        } catch (error) {
            console.error('Error loading images', error);
        } finally {
            setGenerating(false);
        }
    }

    return (
        <div className={style.QRCode}>
            <div className={style.QRCodeContainer}>
                <div className={style.QRCodeContent}>
                    <h2 className={style.QRCodeTitle}>
                        QR Code
                    </h2>
                    <p>
                        Vous pouvez télécharger le QR Code pour accéder à la version numérique du livret.
                    </p>
                    <button type="button" className={`btn btn--style-primary btn--icon-style-without-border btn--size-small ${style.QRCodeButton}`}
                    onClick={handlePrintQrCode}>
                        {generating ? 'Génération...' : 'Télécharger'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default QRCodeSection;