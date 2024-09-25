import './global.css'

import favicon from '@/assets/img/favicon.png';

export const metadata = {
  title: 'Livret d\'accueil Airbnlove',
  description: 'Découvrez les hébergements Airbnlove et profitez de votre séjour'
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={params.locale}>
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/png" href={favicon.src} />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
