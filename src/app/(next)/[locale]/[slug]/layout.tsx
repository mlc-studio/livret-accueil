import React from 'react';

import './globals.css'
import Footer from './components/footer';

const Layout = ({ children, params }: { children: React.ReactNode, params: { locale: string } }) => {
    return (
        <html lang={params.locale}>
            <body>
                {children}
                <Footer />
            </body>
        </html>
    );
}

export default Layout;