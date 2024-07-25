'use client'

import { useState } from "react";
import Modal from "./Modal"
import Module from "./Module"
import { TextArea } from "./Fields";

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
                {data.blocks.map((block: any, index: number) => (
                    <div key={index}>

                        {block.blockType === 'text-block' && <TextBlock block={block} />}
                        {block.blockType === 'image-block' && <ImageBlock block={block} />}
                    </div>
                ))}
            </Modal>
        </>
    )
}

const TextBlock = ({ block }: any) => {
    return (
        <div>
            <h2>
                { block.title }
            </h2>
            <p>
                <TextArea text={block.description} />
            </p>
        </div>
    )
}

const ImageBlock = ({ block }: any) => {
    return (
        <div>
            <img src={block.image.url} alt={block.image.alt} />
        </div>
    )
}

export default Constructor