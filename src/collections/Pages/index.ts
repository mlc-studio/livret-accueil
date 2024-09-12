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
        singular: 'Page',
        plural: 'Pages',
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
                            en: 'The URL for this page. Must be unique.',
                            fr: 'L\'URL de cette page. Doit être unique.',
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
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    label: {
                        en: 'Title',
                        fr: 'Titre',
                    },
                },
                {
                    name: 'description',
                    type: 'textarea',
                    label: {
                        en: 'Description',
                        fr: 'Description',
                    },
                },
            ],
        },
    ],
};