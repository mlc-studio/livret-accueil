import React from 'react';

import './globals.css'

const Layout = ({ children, params }: { children: React.ReactNode, params: { locale: string } }) => {
    return (
        <html lang={params.locale}>
            <body>
                {children}
            </body>
        </html>
    );
}

export default Layout;