'use client'

import { useState } from 'react';

import Modal from '@/components/Modal';
import style from './CommandationList.module.scss';

const CommandationList = ({ data }: any) => {
    let [activeCommandation, setActiveCommandation] = useState<{i: number | null, index:number | null}>({ i: null, index: null });
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOpen = (i: number, index: number) => {
        setActiveCommandation({ i, index });
        setIsOpen(true);
    }

    const handleClose = () => {
        setActiveCommandation({ i: null, index: null });
        setIsOpen(false);
    }

    const rangePriceFormat = (rangePrice: string) => {
        switch (rangePrice) {
            case '1':
                return '€';
            case '2':
                return '€€';
            case '3':
                return '€€€';
            case '4':
                return '€€€€';
            default:
                return '€';
        }
    }

    return (
        <>
            {data && data.array && data.array.map((item: any, index: number) => (
                <div className={style.ArrayItem} key={item.id}>
                    <div className={style.ArrayItemHeader}>
                        <h2 className={style.ArrayItemTitle}>
                            {item.title}
                        </h2>
                        <div className={style.ArrayItemIcon}>
                            <img src={item.titleIcon.url} alt={item.titleIcon.alt} />
                        </div>
                    </div>
                    <div className={style.CommandationList}>
                        {item.commandationList.map((commandation: any, i: number) => (
                                <div key={`${commandation.id}-${i}-${index}`}>
                                    <div className={style.CommandationItem} onClick={() => handleOpen(i, index)}>
                                        <div className={style.CommandationItemImage}>
                                            <img src={commandation.image.url} alt={commandation.image.alt} />
                                        </div>
                                        <div className={style.CommandationItemContent}>
                                            <h3 className={style.CommandationItemTitle}>
                                                {commandation.name} - {rangePriceFormat(commandation.rangePrice)}
                                            </h3>
                                        </div>

                                    </div>
                                    {isOpen && activeCommandation.i === i && activeCommandation.index === index && (
                                        <Modal title={commandation.name} isOpen={isOpen} onClose={handleClose}>
                                            <div className={style.ModalContent}>
                                                <div className={style.ModalImage}>
                                                    <img src={commandation.image.url} alt={commandation.image.alt} />
                                                </div>
                                                <div className={style.ModalText}>
                                                    <p>{commandation.description}</p>
                                                </div>
                                                {/* Others infos */}
                                                <div className={style.ModalInfos}>
                                                    <p>Address: {commandation.address}</p>
                                                    <p>Phone: {commandation.phone}</p>
                                                </div>
                                            </div>
                                        </Modal>
                                    )}
                                </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
}

export default CommandationList;