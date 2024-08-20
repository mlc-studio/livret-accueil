'use client'

import React from 'react';
import { Button, fieldBaseClass, TextInput, useDocumentInfo, useField } from "@payloadcms/ui";
import QR_LIVRET from '@/assets/img/QR_LIVRET.jpg';

import style from './SlugCustomField.module.scss';

const SlugCustomField = (props: any) => {
  const domain = window.location.origin;
  const establishmentUrl = `${domain}/l/`;

  const { field: { admin: { description } } } = props;

  const { value, setValue } = useField<string>({});
  const [generating, setGenerating] = React.useState<boolean>(false);
  const [qrcode, setQRCode] = React.useState<string>('');

  function slugify(str: string) {
    return String(str)
      .normalize('NFKD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  const loadImage = (src: string) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = src;
      img.onload = () => resolve(img);
      img.onerror = reject;
    });
  };

  const handleValueChange = (value: any) => {
    const inputValue = value as string;
    const preSlug = inputValue.toLowerCase().replace(/ /g, '-');
    const slug = slugify(preSlug);
    setValue(slug);
  }

  const handlePrintQrCode = async () => {
    console.log('Generating QR Code');
    setGenerating(true);

    try {
      const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${establishmentUrl}${value}`;

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

  const visitUrl = (value: string) => {
    window.open(`${establishmentUrl}${value}`, '_blank');
  }

  return (
    <div className={fieldBaseClass}>
      <TextInput
        {...props.field}
        value={value}
        onChange={(e: any) => handleValueChange(e.target.value)}
        description={description}
      />
      <div className={style.ButtonContainer}>
        <Button className={style.NoMargin} onClick={() => handlePrintQrCode()} disabled={generating}>
          {generating ? 'Generating...' : 'Generate QR Code'}
        </Button>
        <Button className={style.NoMargin} onClick={() => visitUrl(value)}>Visit URL</Button>
      </div>
    </div >
  )
}

export default SlugCustomField;
