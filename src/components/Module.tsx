import Image from "next/image";

import style from './Module.module.css'

const Module = ({ title, icon }: any) => {
    return (
        <div className={style.Module}>
            <button className={style.ModuleButton}>
                <img src={icon?.url} alt={icon?.alt} />
            </button>
            <h3 className={style.ModuleTitle}>
                {title}
            </h3>
        </div>
    );
}

export default Module;