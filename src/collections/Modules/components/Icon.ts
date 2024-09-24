import { Field } from "payload";

export const Icon: Field[] = [
    {
        admin: {
            description: {
                en: 'The title of the icon',
                fr: 'Le titre de l\'icône',
            }
        },
        name: 'title',
        label: {
            en: 'Title',
            fr: 'Titre',
        },
        type: 'text',
        localized: true,
        required: true,
    },
    {
        admin: {
            description: {
                en: 'The icon',
                fr: 'L\'icône',
            }
        },
        name: "icon",
        label: {
            en: 'Icon',
            fr: 'Icône',
        },
        type: "upload",
        relationTo: "icons",
        required: true,
    },
]