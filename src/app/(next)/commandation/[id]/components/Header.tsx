'use client'

import { useRouter } from 'next/navigation';

import Heart from '@/assets/img/heart2.png';

import style from './Header.module.scss';

const Header = () => {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    }

    return (
        <div className={style.Header}>
            <div className={style.HeaderContainer}>
                <div className={style.HeaderBack}>
                    <button onClick={handleBack} className={style.HeaderBackButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={style.HeaderBackIcon}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                </div>
                <div className={style.HeaderHeart}>
                    <a href="https://www.airbnlove.com" target='_blank' rel='noopener noreferrer'>
                        <img src={Heart.src} alt="Heart" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header;