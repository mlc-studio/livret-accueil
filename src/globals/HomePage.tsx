import { GlobalConfig } from "payload";

export const HomePage: GlobalConfig = {
    slug: "home",
    label: "Home Page",
    access: {
        read: () => true,
    },
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
                }
            ]
        }
    ]
};