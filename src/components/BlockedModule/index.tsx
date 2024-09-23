'use client'

import { useState } from 'react'
import { usePathname, useRouter } from '@/i18n/routing'
import Modal from '../Modal'
import Module from '../Module'

import style from './index.module.css'

const BlockedModule = ({ data }: any) => {
    const router = useRouter();
    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);
    const [pin, setPin] = useState('');

    const handleClick = () => {
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    const handleOnSubmit = () => {
        router.push(`${pathname}?securityPin=${pin}`);
        setPin('');
        setIsOpen(false);
    }

    return (
        <>
            <Module title={'🔒 ' + data.title} icon={data.icon} onClick={handleClick} />
            <Modal title={data.title} isOpen={isOpen} onClose={handleClose}>
                <div className={style.BlockedModule}>
                    <p className={style.Description}>
                        This module is blocked. Please enter the security pin to access it.
                    </p>
                    <form onSubmit={handleOnSubmit} className={style.Form}>
                        <input
                            type="password"
                            placeholder="Enter security pin"
                            value={pin}
                            onChange={(e) => setPin(e.target.value)}
                            className={style.Input}
                        />
                        <button onClick={handleOnSubmit} className={style.Button}>
                            Submit
                        </button>
                    </form>
                </div>
            </Modal>
        </>
    )
}

export default BlockedModule;