import Image from "next/image";

import style from './Module.module.css'

const Module = ({ title, icon }: any) => {
    return (
        <div className={style.Module}>
            <button className={style.ModuleButton}>
                <Image className={style.ModuleIconImage} src={icon.url} alt={icon.alt} width={icon.width} height={icon.height} title={icon.alt} />
            </button>
            <h3 className={style.ModuleTitle}>
                {title}
            </h3>
        </div>
    );
}

export default Module;