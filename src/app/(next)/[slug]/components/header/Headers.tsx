import { Container } from "../container";

import styles from './Headers.module.scss';

const HeaderOne = ({ data }: any) => {
    return (
        <header>
            <Container>
                <div className={styles.HeaderOne}>
                    <h1 className={styles.Title}>
                        {data?.title}
                    </h1>
                    {data?.subtitle && (
                        <p className={styles.Subtitle}>
                            {data?.subtitle}
                        </p>
                    )}
                </div>
            </Container>
        </header>
    )
}

const HeaderTwo = ({ data }: any) => {
    return (
        <header>
            <Container>
                <div className={styles.HeaderTwo}>
                    <div className={styles.Content}>
                    {/* Title */}
                    <h1 className={styles.Title}>
                        {data?.title}
                    </h1>
                    {/* subtitle */}
                    {data?.subtitle && (
                        <p className={styles.Subtitle}>
                            {data?.subtitle}
                        </p>
                    )}
                    </div>
                    <img src={data?.backgroundImage?.url} alt={data?.backgroundImage?.alt} className={styles.BackgroundImage} style={{ opacity: data?.opacity }} />
                </div>
            </Container>
        </header>
    )
}

const Header = ({ header }: any) => {
    if (header?.headerType === 'headerOne') return <HeaderOne data={header?.headerOne} />;
    if (header?.headerType === 'headerTwo') return <HeaderTwo data={header?.headerTwo} />;

    return null;
}

export default Header;