'use client'

import { useState } from 'react'
import Modal from '../Modal'
import Module from '../Module'

import style from './index.module.css'

const DigicodeModule = ({ data }: any) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    const handleCopyPassword = () => {
        if (!navigator.clipboard) return alert('Clipboard API not available');

        navigator.clipboard.writeText(data.digicode.code);

        alert('Code copied to clipboard');
    }

    return (
        <>
            <Module title={data.title} icon={data.icon} onClick={handleClick} />
            <Modal title={data.title} isOpen={isOpen} onClose={handleClose}>
                <div className={style.DigicodeModule}>
                    <p className={style.Code} onClick={handleCopyPassword}>
                        {data.digicode.code}
                    </p>
                    {data.digicode.instructions && (
                        <p className={style.Instructions}>{data.digicode.instructions}</p>
                    )}
                </div>
            </Modal>
        </>
    )
}

export default DigicodeModule;