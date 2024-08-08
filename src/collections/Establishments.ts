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
            required: true,
            // validate: ({ siblingData }) => {
            //     const regex = '^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$';
            //     const phone = siblingData.phone;

            //     if (!phone.match(regex)) return 'Invalid phone number';
            //     return true;
            // }
        }
    ],
};