import { CollectionConfig } from "payload";

export const Establishments: CollectionConfig = {
    slug: 'establishments',
    labels: {
        singular: 'Establishment',
        plural: 'Establishments',
    },
    admin: {
        useAsTitle: 'name',
    },
    fields: [
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