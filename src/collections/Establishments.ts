import { isAdmin } from "@/access";
import { CollectionConfig, CustomComponent, Field } from "payload";

export const Establishments: CollectionConfig = {
    slug: 'establishments',
    admin: {
        useAsTitle: 'slug',
    },
    access: {
        read: ({ req: { user } }) => {
            if (user?.role === 'host') {
                return {
                    belongsTo: {
                        equals: user.id
                    }
                }
            }

            return true;
        },
        create: ({ req: { user } }) => {
            if (user?.role === 'admin') return true;
            return false;
        },
        update: ({ req: { user } }) => {
            if (user?.role === 'admin') return true;
            if (user?.role === 'host') {
                return {
                    belongsTo: {
                        equals: user.id
                    }
                }
            }

            return false;
        },
        delete: ({ req: { user } }) => {
            if (user?.role === 'admin') return true;
            return false;
        },
    },
    fields: [
        {
            name: 'belongsTo',
            type: 'relationship',
            relationTo: 'users',
            required: true,
            defaultValue: ({ user }: any) => user.id,
            admin: {
                condition: (data, siblingData, { user }) => {
                    return isAdmin({ req: { user } })
                }
            }
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
        },
        {
            name: 'test',
            type: 'text',
            admin: {
                components: {
                    Field: 'src/customs/CustomTextField',
                }
            }
        },
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
            name: 'metadata',
            type: 'group',
            label: 'Metadata',
            fields: [
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
                    defaultValue: false,
                }
            ]
        }
    ],
};