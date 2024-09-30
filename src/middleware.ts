import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware({
    ...routing,
    defaultLocale: 'fr'
});

export default function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Exclude paths starting with /admin, /api, /_next, etc.
    const excludedPaths = /^(\/admin|\/api|\/\_next|\/static)/;

    // Only apply internationalization middleware to paths not starting with excluded paths
    if (!excludedPaths.test(pathname)) {
        return intlMiddleware(request);
    }
}

export const config = {
    // Match all paths except those starting with excluded paths
    matcher: ['/((?!admin|api|_next|static|sitemap).*)']
};