import { Field } from "payload";

const HeaderOne: Field = {
    name: 'headerOne',
    type: 'group',
    admin: {
        condition: (_, siblingData) => siblingData.headerType === 'headerOne',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'subtitle',
            type: 'text',
        }
    ]
};

const HeaderTwo: Field = {
    name: 'headerTwo',
    type: 'group',
    admin: {
        condition: (_, siblingData) => siblingData.headerType === 'headerTwo',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'subtitle',
            type: 'text',
        },
        {
            name: 'backgroundImage',
            type: 'upload',
            relationTo: 'media',
            required: true,
            filterOptions: {
                mimeType: {
                    contains: 'image',
                }
            }
        },
        {
            // Opacity
            name: 'opacity',
            type: 'number',
            required: true,
            defaultValue: 0.5,
            min: 0,
            max: 1,
            admin: {
                step: 0.1,
            },
        }
    ]
};

const Header: Field = {
    name: 'header',
    type: 'group',
    fields: [
        {
            name: 'headerType',
            type: 'select',
            options: [
                {
                    label: {
                        en: 'None',
                        fr: 'Aucun',
                    },
                    value: 'none',
                },
                {
                    label: {
                        en: 'Title and Subtitle',
                        fr: 'Titre et sous-titre',
                    },
                    value: 'headerOne',
                },
                {
                    label: {
                        en: 'Title, Subtitle and Background Image',
                        fr: 'Titre, sous-titre et image de fond',
                    },
                    value: 'headerTwo',
                },
            ],
            required: true,
            defaultValue: 'headerOne',
        },
        HeaderOne,
        HeaderTwo
    ]
};

export default Header;