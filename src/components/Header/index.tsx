import HeartImage from '@/assets/img/heart.png';

import style from './index.module.scss';

const Header = ({ title, description, profileImage }: any) => {
    return (
        <div className={style.Header}>
            <div className={style.HeaderContainer}>
                <div className={style.HeaderContent}>
                    <div className={style.HeaderContentContainer}>
                        <h1 className={style.HeaderContentTitle}>
                            {title}
                        </h1>
                        <p className={style.HeaderContentDescription}>
                            {description}
                        </p>
                    </div>
                </div>
                <div className={style.HeaderProfileImageContainer}>
                    <div className={style.HeaderProfileImage}>
                        <img src={profileImage.url} alt={profileImage.alt} />
                    </div>
                </div>
            </div>
            <div className={style.HeaderHeart}>
                <a href="https://www.airbnlove.com" target='_blank' rel='noopener noreferrer'>
                    <img src={HeartImage.src} alt="Heart" />
                </a>
            </div>
        </div>
    )
}

export default Header;