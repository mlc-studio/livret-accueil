import { Field } from "payload";

export const ExternalLink: Field = {
    name: 'externalLink',
    type: 'group',
    admin: {
        condition: (values: any) => values.select.modules === "external-link",
        description: {
            en: 'Add an external link to your module',
            fr: 'Ajoutez un lien externe à votre module',
        },
        position: "sidebar"
    },
    label: {
        en: 'External Link',
        fr: 'Lien Externe',
    },
    fields: [
        {
            admin: {
                description: {
                    en: 'The title of the link',
                    fr: 'Le titre du lien',
                }
            },
            name: 'url',
            label: {
                en: 'URL',
                fr: 'URL',
            },
            type: 'text',
            required: true,
        },
    ]
};