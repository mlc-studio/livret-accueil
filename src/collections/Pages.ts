import { isAdmin } from "@/access";
import { CollectionConfig } from "payload";

const Pages: CollectionConfig = {
    slug: 'pages',
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

export default Pages;