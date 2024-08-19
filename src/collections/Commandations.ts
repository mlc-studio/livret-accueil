import { isAdmin } from "@/access";
import { CollectionConfig } from "payload";

export const Commandations: CollectionConfig = {
    slug: 'commandations',
    admin: {
        useAsTitle: 'name',
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
            if (user?.role === 'host') return true;
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
            if (user?.role === 'host') {
                return {
                    belongsTo: {
                        equals: user.id
                    }
                }
            }

            return false;
        }
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
            name: 'name',
            label: 'Name',
            type: 'text',
            required: true,
        },
        {
            name: 'description',
            label: 'Description',
            type: 'textarea',
            required: true,
        },
        {
            name: 'image',
            label: 'Image',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'address',
            label: 'Address',
            type: 'text',
            required: true,
        },
        {
            name: 'phone',
            label: 'Phone',
            type: 'text',
            required: true
        },
        {
            name: 'rangePrice',
            label: 'Range Price',
            type: 'select',
            required: true,
            admin: {
                position: 'sidebar',
            },
            options: [
                { value: '1', label: '€' },
                { value: '2', label: '€€' },
                { value: '3', label: '€€€' },
                { value: '4', label: '€€€€' },
            ],
            defaultValue: '1',
        }
    ],
};