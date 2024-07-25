import style from './Module.module.css'

const Module = ({ title, icon, onClick }: { title: string, icon: { url: string, alt: string }, onClick?: () => void }) => {
    return (
        <div className={style.Module}>
            <div className={style.ModuleContainer}>
                <button className={style.ModuleButton} onClick={onClick}>
                    <img src={icon?.url} alt={icon?.alt} />
                </button>
                <h3 className={style.ModuleTitle}>
                    {title}
                </h3>
            </div>
        </div>
    );
}

export default Module;