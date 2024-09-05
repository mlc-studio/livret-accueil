import { isAdmin } from "@/access";
import { Field, GlobalConfig } from "payload";

const FAQ: Field[] = [
    {
        name: 'title',
        label: {
            en: 'Title',
            fr: 'Titre',
        },
        type: 'text',
        required: true,
    },
    {
        name: 'content',
        type: 'blocks',
        label: {
            en: 'Content',
            fr: 'Contenu',
        },
        blocks: [
            {
                slug: 'paragraph',
                fields: [
                    {
                        name: 'text',
                        type: 'textarea',
                        label: {
                            en: 'Content',
                            fr: 'Contenu',
                        },
                    }
                ]
            },
            {
                slug: 'image',
                fields: [
                    {
                        name: 'image',
                        type: 'upload',
                        relationTo: 'media',
                        required: true,
                    },
                    {
                        name: 'caption',
                        type: 'text',
                        label: {
                            en: 'Caption',
                            fr: 'Légende',
                        },
                    }
                ]
            }
        ],
    },
];

export const FAQS: GlobalConfig = {
    slug: 'questions',
    access: {
        read: isAdmin,
        update: isAdmin,
    },
    admin: {
        group: {
            en: 'Administration',
            fr: 'Administration',
        },
    },
    fields: [
        {
            name: 'modules',
            label: {
                en: 'Actions Questions',
                fr: 'Questions Actions',
            },
            type: 'group',
            localized: true,
            fields: [
                {
                    name: 'isActivated',
                    type: 'checkbox',
                    label: {
                        en: 'Is activated',
                        fr: 'Est activé',
                    },
                    defaultValue: false,
                },
                {
                    name: 'title',
                    type: 'text',
                    label: {
                        en: 'Title',
                        fr: 'Titre',
                    },
                    localized: true,
                    admin: {
                        condition: (_, siblingData) => siblingData.isActivated,
                    }
                },
                {
                    name: 'faqs',
                    type: 'array',
                    label: {
                        en: 'FAQs',
                        fr: 'FAQs',
                    },
                    labels: {
                        singular: {
                            en: 'FAQ',
                            fr: 'FAQ',
                        },
                        plural: {
                            en: 'FAQs',
                            fr: 'FAQs',
                        }
                    },
                    fields: FAQ,
                    minRows: 1,
                    required: true,
                    admin: {
                        condition: (_, siblingData) => siblingData.isActivated,
                    }
                },
            ]
        },
        {
            name: 'establishments',
            label: {
                en: 'Establishments Questions',
                fr: 'Questions Établissements',
            },
            type: 'group',
            localized: true,
            fields: [
                {
                    name: 'isActivated',
                    type: 'checkbox',
                    label: {
                        en: 'Is activated',
                        fr: 'Est activé',
                    },
                    defaultValue: false,
                },
                {
                    name: 'title',
                    type: 'text',
                    label: {
                        en: 'Title',
                        fr: 'Titre',
                    },
                    admin: {
                        condition: (_, siblingData) => siblingData.isActivated,
                    }
                },
                {
                    name: 'faqs',
                    type: 'array',
                    label: {
                        en: 'FAQs',
                        fr: 'FAQs',
                    },
                    labels: {
                        singular: {
                            en: 'FAQ',
                            fr: 'FAQ',
                        },
                        plural: {
                            en: 'FAQs',
                            fr: 'FAQs',
                        }
                    },
                    fields: FAQ,
                    minRows: 1,
                    required: true,
                    admin: {
                        condition: (_, siblingData) => siblingData.isActivated,
                    }
                },
            ]
        },
    ]
}