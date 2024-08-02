import { Module } from "@/payload-types";
import { GlobalConfig, PayloadRequest } from "payload";

export const HomePage: GlobalConfig = {
    slug: "home",
    label: "Home Page",
    fields: [
        {
            name: 'pageDetails',
            type: 'group',
            fields: [
                {
                    name: 'backgroundImage',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
                {
                    name: 'welcomeMessage',
                    type: 'group',
                    fields: [
                        {
                            name: 'profileImage',
                            type: 'upload',
                            relationTo: 'media',
                        },
                        {
                            name: 'title',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'description',
                            type: 'textarea',
                            required: true,
                        }
                    ]
                },
                {
                    name: 'securityPin',
                    type: 'text',
                    required: true,
                    admin: {
                        description: 'This is the pin code to access the secure area',
                    }
                }
            ]
        },
        {
            name: 'modules',
            type: 'array',
            labels: {
                singular: 'Module',
                plural: 'Modules',
            },
            admin: {
                position: 'sidebar',
            },
            fields: [
                {
                    name: 'module',
                    type: 'relationship',
                    relationTo: 'modules',
                    required: true,
                },
                {
                    name: 'enabled',
                    type: 'checkbox',
                    label: 'Enabled',
                    defaultValue: true,
                },
                {
                    name: 'secure',
                    type: 'checkbox',
                    label: 'Secure',
                    defaultValue: false
                }
            ]
        }
    ],
    endpoints: [
        {
            path: '/custom',
            method: 'get',
            handler: async (req: PayloadRequest) => {
                let homePage = await req.payload.findGlobal({
                    slug: 'home'
                });

                const { securityPin } = req.query;
                const securityPinAdmin = homePage.pageDetails.securityPin;

                if (!homePage) return Response.json({
                    success: false,
                    message: 'Home page not found',
                });

                homePage.pageDetails.securityPin = '';

                if (!securityPin) {
                    for (let m of homePage?.modules ?? []) {
                        if (typeof m.module !== 'string') {
                            m.id = m.module.id;
                            m.enabled = m.enabled;
                            m.secure = m.secure;
                            m.module = {
                              id: m.module.id,
                              select: m.module.select,
                              title: m.module.title,
                              icon: m.module.icon,
                            } as Module;
                        }
                    }

                    return Response.json({
                        success: true,
                        data: homePage,
                    });
                }

                if (securityPin !== securityPinAdmin) return Response.json({
                    success: false,
                    message: 'Invalid security pin',
                });

                return Response.json({
                    success: true,
                    data: homePage,
                });
            }
        }
    ]
};