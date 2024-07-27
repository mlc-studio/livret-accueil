'use client'

import { useState } from "react";
import Image from "next/image";

import Modal from "./Modal"
import Module from "./Module"
import { TextArea } from "./Fields";

import style from './Constructor.module.css'

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
                        </div>
                    ))}
                </div>
            </Modal>
        </>
    )
}

import TextBlockStyle from './TextBlock.module.css'

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

import ImageBlockStyle from './ImageBlock.module.css'

const ImageBlock = ({ block }: any) => {
    return (
        <div className={ImageBlockStyle.ImageBlock}>
            <Image className={ImageBlockStyle.ImageBlockImage} src={block.image.url} alt={block.image.alt} width={block.image.width} height={block.image.height} />
        </div>
    )
}

export default Constructor