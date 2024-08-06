import QRCodeSection from './QRCodeSection'

import style from './CustomAdminView.module.scss'

const CustomAdminView = async () => {
  return (
    <div className={style.Panel}>
        <div className={style.Welcome}>
            <h1 className={style.WelcomeTitle}>
                Dashboard
            </h1>
            <h2 className={style.WelcomeSubtitle}>
                Bienvenue sur votre espace d'administration
            </h2>
            <p className={style.WelcomeDescription}>
                Vous pouvez gérer les contenus de votre site web ici.
            </p>
        </div>
        <QRCodeSection />
    </div>
  )
}

export default CustomAdminView