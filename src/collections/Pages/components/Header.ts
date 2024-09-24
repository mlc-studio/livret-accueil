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
            label: {
                en: 'Title',
                fr: 'Titre',
            },
            required: true,
        },
        {
            name: 'subtitle',
            type: 'text',
            label: {
                en: 'Subtitle',
                fr: 'Sous-titre',
            },
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
            label: {
                en: 'Title',
                fr: 'Titre',
            },
        },
        {
            name: 'subtitle',
            type: 'text',
            label: {
                en: 'Subtitle',
                fr: 'Sous-titre',
            },
        },
        {
            name: 'backgroundImage',
            type: 'upload',
            relationTo: 'media',
            required: true,
            label: {
                en: 'Background Image',
                fr: 'Image de fond',
            },
            filterOptions: {
                mimeType: {
                    contains: 'image',
                }
            }
        },
        {
            name: 'opacity',
            type: 'number',
            label: {
                en: 'Opacity',
                fr: 'Opacité',
            },
            required: true,
            defaultValue: 0.5,
            min: 0,
            max: 1,
            admin: {
                step: 0.1,
                description: {
                    en: 'The opacity of the background image. 0.5 is the default value.',
                    fr: 'L\'opacité de l\'image de fond. 0.5 est la valeur par défaut.',
                },
            },
        }
    ]
};

const Header: Field = {
    name: 'header',
    type: 'group',
    localized: true,
    label: {
        en: 'Header',
        fr: 'Header',
    },
    fields: [
        {
            name: 'headerType',
            type: 'select',
            label: {
                en: 'Header Type',
                fr: 'Type de Header',
            },
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