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
                    name: 'welcomeMessage',
                    label: '',
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
};