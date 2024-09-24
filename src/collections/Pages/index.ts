import { isAdmin } from "@/access";
import { CollectionConfig } from "payload";
import Header from "./components/Header";
import Blocks from "./components/Layout";

export const Pages: CollectionConfig = {
    slug: 'pages',
    admin: {
        group: {
            en: 'Administration',
            fr: 'Administration',
        },
    },
    labels: {
        singular: {
            en: 'Page',
            fr: 'Page',
        },
        plural: {
            en: 'Pages',
            fr: 'Pages',

        }
    },
    access: {
        read: isAdmin,
        create: isAdmin,
        update: isAdmin,
        delete: isAdmin,
    },
    fields: [
        {
            name: 'settings',
            type: 'group',
            label: {
                en: 'Settings',
                fr: 'Paramètres',
            },
            fields: [
                {
                    name: 'slug',
                    type: 'text',
                    label: {
                        en: 'Slug',
                        fr: 'Slug',
                    },
                    required: true,
                    unique: true,
                    admin: {
                        description: {
                            en: 'The URL for this page. Must be unique. Use the slug \'home\' for the home page.',
                            fr: 'L\'URL de cette page. Doit être unique. Utilisez le slug \'home\' pour la page d\'accueil.',
                        },
                        components: {
                            Field: 'src/customs/SlugCustomField',
                        }
                    }
                }
            ],
        },
        Header,
        Blocks,
        {
            name: 'metadata',
            type: 'group',
            label: {
                en: 'Metadata',
                fr: 'Métadonnées',
            },
            localized: true,
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    label: {
                        en: 'Title',
                        fr: 'Titre',
                    },
                    required: true,
                    admin: {
                        description: {
                            en: 'The title of the page. This is used for SEO.',
                            fr: 'Le titre de la page. Ceci est utilisé pour le SEO.',
                        },
                    }
                },
                {
                    name: 'description',
                    type: 'textarea',
                    label: {
                        en: 'Description',
                        fr: 'Description',
                    },
                    required: true,
                    admin: {
                        description: {
                            en: 'The description of the page. This is used for SEO.',
                            fr: 'La description de la page. Ceci est utilisé pour le SEO.',
                        },
                    }
                },
            ],
        },
    ],
};