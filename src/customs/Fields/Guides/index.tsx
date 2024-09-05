'use client'

import { ReactNode, useState } from "react";

import styles from './index.module.scss';

interface Question {
    isActivated: boolean;
    title: string;
    faqs: FAQ[];
}

interface FAQ {
    title: string;
    content: any[];
}

const Layout = ({ children, title }: { children: ReactNode, title: string | null }) => {
    return (
        <div className="field-type group-field group-field--top-level">
            {title && <h3 className="field-label">{title}</h3>}
            {children}
        </div>
    );
};

const Square = ({ title, children, isActive, onClick }: { title: string, children: ReactNode, isActive: boolean, onClick: () => void }) => {
    return (
        <div className={styles.Square}>
            <h4 className={styles.Subtitle} onClick={onClick}>
                <span className={styles.IconContainer}>
                    <svg className={styles.Icon + (isActive ? ` ${styles.Active}` : '')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
                {title}
            </h4>
            {isActive && (<div className={styles.Content}>{children}</div>)}
        </div>
    );
};

const SquareList = ({ question }: { question: Question }) => {
    const [activeSquare, setActiveSquare] = useState<number | null>(null);

    const handleClick = (index: number) => {
        if (activeSquare === index) return setActiveSquare(null);
        setActiveSquare(index);
    }

    return (
        <div className={styles.SquareList}>
            {question.faqs.map((faq: FAQ, index) => (
                <Square key={index} title={faq.title} isActive={activeSquare === index} onClick={() => handleClick(index)}>
                    {faq.content.map((content, index) => {
                        switch (content.blockType) {
                            case 'paragraph':
                                return <p key={index}>{content.text.split('\n').map((text: string, index: number) => <span key={index}>{text}<br /></span>)}</p>;
                            case 'image':
                                return (
                                    <div key={index} className={styles.BlockImage}>
                                        <img src={content.image.url} alt={content.caption} />
                                        <p className={styles.Caption}>{content.caption}</p>
                                    </div>
                                );
                            default:
                                return null;
                        }
                    })}
                </Square>
            ))}
        </div>
    );
}

export { Layout, Square, SquareList };