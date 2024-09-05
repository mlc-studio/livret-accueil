export const dynamic = 'force-dynamic'

// export async function generateMetadata() {
//     try {
//         const payload = await getPayload({
//             config: payloadConfig
//         });

//         const homePage = await payload.findGlobal({
//             slug: 'home'
//         });

//         if (!homePage) throw new Error('Home page not found');

//         return {
//             title: homePage.metadata.title,
//             description: homePage.metadata.description
//         }
//     } catch {
//         return {
//             title: "Livret d'accueil",
//             description: "Bienvenue dans votre logement"
//         }
//     }
// }

// const GET_HOME_PAGE = async (securityPin: string | null) => {
//     try {
//         const payload = await getPayload({
//             config: payloadConfig
//         });

//         const homePage = await payload.findGlobal({
//             slug: 'home'
//         });

//         if (!homePage) throw new Error('Home page not found');

//         const securityPinAdmin = homePage.pageDetails.securityPin;
//         homePage.pageDetails.securityPin = '';

//         try {
//             if (!securityPin) throw new Error('Security pin required');

//             if (securityPin !== securityPinAdmin) throw new Error('Invalid security pin');

//             return homePage;
//         } catch {
//             for (let m of homePage?.modules ?? []) {
//                 if (typeof m.module !== 'string' && m.secure) {
//                     m.id = m.module.id;
//                     m.enabled = m.enabled;
//                     m.secure = m.secure;
//                     m.module = {
//                       id: m.module.id,
//                       select: m.module.select,
//                       title: m.module.title,
//                       icon: m.module.icon,
//                       blocked: true
//                     } as any;
//                 }
//             }

//             return homePage;
//         }
//     } catch {
//         return null;
//     }
// }

export default async function Page({ searchParams }: any) {
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    )
}