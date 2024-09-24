import { Field } from "payload";

export const Commandation: Field = {
    name: "commandation",
    type: "group",
    admin: {
        position: "sidebar",
        condition: (values: any) => values.select.modules === "commandation",
        description: {
            en: "Add your best local recommendations for your travelers.",
            fr: "Ajoutez vos meilleures recommandations locales pour vos voyageurs.",
        }
    },
    label: {
        en: "Commandation",
        fr: "Recommandation",
    },
    fields: [
        {
            admin: {
                description: {
                    en: "Commandations are a list of recommendations for your travelers.",
                    fr: "Les recommandations sont une liste de recommandations pour vos voyageurs.",
                }
            },
            label: {
                en: "Commandations",
                fr: "Recommandations",
            },
            labels: {
                singular: {
                    en: "Commandation",
                    fr: "Recommandation",
                },
                plural: {
                    en: "Commandations",
                    fr: "Recommandations",
                }
            },
            name: 'array',
            type: 'array',
            fields: [
                {
                    name: 'title',
                    label: {
                        en: 'Title',
                        fr: 'Titre',
                    },
                    admin: {
                        description: {
                            en: 'The title of the commandation',
                            fr: 'Le titre de la recommandation',
                        }
                    },
                    type: 'text',
                    required: true,
                    localized: true,
                },
                {
                    name: 'titleIcon',
                    label: {
                        en: 'Title Icon',
                        fr: 'Icône de Titre',
                    },
                    admin: {
                        description: {
                            en: 'The icon for the title',
                            fr: 'L\'icône pour le titre',
                        }
                    },
                    type: 'upload',
                    relationTo: 'icons',
                    required: true,
                },
                {
                    name: 'commandationList',
                    label: {
                        en: 'Commandation List',
                        fr: 'Liste de Recommandations',
                    },
                    admin: {
                        description: {
                            en: 'The list of commandations',
                            fr: 'La liste de recommandations',
                        }
                    },
                    type: 'relationship',
                    relationTo: 'commandations',
                    hasMany: true,
                }
            ]
        }
    ]
};