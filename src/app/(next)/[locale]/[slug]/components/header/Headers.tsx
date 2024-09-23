import { Container } from "../container";

import styles from './Headers.module.scss';

const HeaderOne = ({ data }: any) => {
    return (
        <header className="pt-8">
            <Container>
                <div className="max-w-4xl mx-auto pb-4 border-b border-gray-200">

                    <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl mb-2">
                        {data?.title}
                    </h1>
                    {data?.subtitle && (
                        <p className="text-lg text-muted-foreground">
                            {data?.subtitle}
                        </p>
                    )}
                </div>
            </Container>
        </header>
    )
}

const HeaderTestTwo = ({ data }: any) => {
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

const HeaderTwo = ({ data }: any) => {
    return (
        <header className="pt-8">
            <Container>
                <div className="relative h-[400px] rounded-lg overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${data?.backgroundImage?.url})`}}>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6" style={{ backgroundColor: `rgba(0, 0, 0, ${1 - (data?.opacity || 0)})` }}>
                        {data?.title && (
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 text-center">
                                {data?.title}
                            </h1>
                        )}
                        {data?.subtitle && (
                            <p className="text-xl max-w-lg text-center">
                                {data?.subtitle}
                            </p>
                        )}
                    </div>
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