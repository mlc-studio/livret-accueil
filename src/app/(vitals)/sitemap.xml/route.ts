import payloadConfig from "@/payload.config";
import { getPayloadHMR } from "@payloadcms/next/utilities";

type ChangeFreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

const generateUrl = (request: Request, url: string, priority: number = 0.8, frequence: ChangeFreq = 'daily') => {
    const host = request.headers.get('host');
    const secure = request.headers.get('x-forwarded-proto') === 'https' || request.headers.get('x-forwarded-proto') === 'https,http';

    return `
        <url>
            <loc>${secure ? 'https' : 'http'}://${host}${url}</loc>
            <priority>${priority}</priority>
            <changefreq>daily</changefreq>
        </url>
    `;
}

// Generate a sitemap.xml file for your site
export const GET = async (request: Request) => {
    const payload = await getPayloadHMR({
        config: payloadConfig
    });

    // Pages
    const pages = await payload.find({
        collection: 'pages'
    });

    // Establishment
    const establishments = await payload.find({
        collection: 'establishments'
    });

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages && pages.docs && pages.docs.map((page) => `${generateUrl(request, `/${page.settings.slug}`, 0.8, "daily")}`).join('')}
        ${establishments && establishments.docs && establishments.docs.map((establishment) => `${generateUrl(request, `/l/${establishment.slug}`, 0.7, "daily")}`).join('')}
    </urlset>`;

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}