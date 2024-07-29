'use client'

import { useState } from "react";

import Modal from "../Modal"
import Module from "../Module"
import { TextArea } from "../Fields";
import NextImage from "../NextImage";

import style from './index.module.css'

const Constructor = ({ data }: any) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
    }

    const handleClick = () => {
        setIsOpen(true);
    }

    return (
        <>
            <Module title={data.title} icon={data.icon} onClick={handleClick} />
            <Modal title={data.title} isOpen={isOpen} onClose={handleClose}>
                <div className={style.Constructor}>
                    {data.blocks.map((block: any, index: number) => (
                        <div className={style.ConstructorItem} key={index}>
                            {block.blockType === 'text-block' && <TextBlock block={block} />}
                            {block.blockType === 'image-block' && <ImageBlock block={block} />}
                            {block.blockType === 'icon-array' && <IconArray block={block} />}
                        </div>
                    ))}
                </div>
            </Modal>
        </>
    )
}

import TextBlockStyle from './components/TextBlock.module.css'

const TextBlock = ({ block }: any) => {
    if (!block.title && !block.description) return null;

    return (
        <div className={TextBlockStyle.TextBlock}>
            {block.title && (
                <h2 className={TextBlockStyle.TextBlockTitle}>
                    {block.title}
                </h2>
            )}
            {block.description && (
                <p className={TextBlockStyle.TextBlockDescription}>
                    <TextArea text={block.description} />
                </p>
            )}
        </div>
    )
}

import ImageBlockStyle from './components/ImageBlock.module.css'

const ImageBlock = ({ block }: any) => {
    return (
        <div className={ImageBlockStyle.ImageBlock}>
            <NextImage className={ImageBlockStyle.ImageBlockImage} src={block.image.url} alt={block.image.alt} width={block.image.width} height={block.image.height} />
        </div>
    )
}

import IconArrayStyle from './components/IconArray.module.css'

const IconArray = ({ block }: any) => {
    return (
        <div className={IconArrayStyle.IconArray}>
            {block.array.map((item: any, index: number) => (
                <div key={index} className={IconArrayStyle.IconArrayItem}>
                    <div className={IconArrayStyle.IconArrayItemIcon}>
                        <NextImage src={item.icon.url} alt={item.icon.alt} width={item.icon.width} height={item.icon.height} className={IconArrayStyle.IconArrayItemIconImage} />
                    </div>
                    <div className={IconArrayStyle.IconArrayItemContent}>
                        <h3 className={IconArrayStyle.IconArrayItemTitle}>{item.title}</h3>
                        <p className={IconArrayStyle.IconArrayItemOverview}>{item.overview}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Constructor;