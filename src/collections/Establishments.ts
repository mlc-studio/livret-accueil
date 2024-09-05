import { isAdmin } from "@/access";
import { CollectionConfig, CustomComponent, Field } from "payload";

export const Establishments: CollectionConfig = {
    slug: 'establishments',
    admin: {
        useAsTitle: 'slug',
        livePreview: {
            url: ({ data }) => {
                const domain = process.env.NEXT_PUBLIC_APP_DOMAIN || 'http://localhost:3000';
                return `${domain}/l/${data.slug}?livePreview=true`;
            },
            breakpoints: [
                {
                    label: 'Mobile',
                    name: 'mobile',
                    width: 375,
                    height: 667,
                },
            ],
        },
    },
    versions: {
        drafts: {
            autosave: true,
            validate: true,
        }
    },
    labels: {
        singular: {
            en: 'Your Establishment',
            fr: 'Votre Établissement',
        },
        plural: {
            en: 'Your Establishments',
            fr: 'Vos Établissements',
        }
    },
    access: {
        read: ({ req: { user } }) => {
            if (user?.role === 'host') {
                return {
                    belongsTo: {
                        equals: user.id
                    }
                }
            }

            return true;
        },
        create: ({ req: { user } }) => {
            if (user?.role === 'admin') return true;
            return false;
        },
        update: ({ req: { user } }) => {
            if (user?.role === 'admin') return true;
            if (user?.role === 'host') {
                return {
                    belongsTo: {
                        equals: user.id
                    }
                }
            }

            return false;
        },
        delete: ({ req: { user } }) => {
            if (user?.role === 'admin') return true;
            return false;
        },
    },
    fields: [
        {
            name: 'guide',
            type: 'ui',
            admin: {
                components: {
                    Field: 'src/customs/Fields/Guides/Establishments.tsx',
                }
            }
        },
        {
            name: 'belongsTo',
            label: {
                en: 'Belongs to',
                fr: 'Appartient à',
            },
            type: 'relationship',
            relationTo: 'users',
            required: true,
            defaultValue: ({ user }: any) => user.id,
            admin: {
                condition: (data, siblingData, { user }) => {
                    return isAdmin({ req: { user } })
                },
                description: {
                    en: 'The user that this establishment belongs to',
                    fr: 'L\'utilisateur à qui appartient cet établissement',
                }
            }
        },
        {
            name: 'slug',
            type: 'text',
            label: {
                en: 'Slug',
                fr: 'Slug',
            },
            unique: true,
            required: true,
            admin: {
                description: {
                    en: 'The URL-friendly version of the name. This will be used in the URL of the establishment page.',
                    fr: 'La version de l\'URL du nom. Cela sera utilisé dans l\'URL de la page de l\'établissement.',
                },
                components: {
                    Field: 'src/customs/SlugEstablishmentCustomField',
                }
            },
        },
        {
            name: 'pageDetails',
            label: {
                en: 'Page Details',
                fr: 'Détails de la page',
            },
            type: 'group',
            fields: [
                {
                    name: 'welcomeMessage',
                    label: {
                        en: 'Welcome Message',
                        fr: 'Message de bienvenue',
                    },
                    type: 'group',
                    fields: [
                        {
                            name: 'profileImage',
                            label: {
                                en: 'Profile Image',
                                fr: 'Image de profil',
                            },
                            type: 'upload',
                            relationTo: 'media',
                            required: true
                        },
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
                            name: 'description',
                            label: {
                                en: 'Description',
                                fr: 'Description',
                            },
                            type: 'textarea',
                            required: true,
                        }
                    ]
                },
                {
                    name: 'securityPin',
                    label: {
                        en: 'Security Pin',
                        fr: 'Code de sécurité',
                    },
                    type: 'text',
                    required: true,
                    admin: {
                        description: {
                            en: 'The security pin that will be used to access the secure modules of the establishment.',
                            fr: 'Le code de sécurité qui sera utilisé pour accéder aux modules sécurisés de l\'établissement.',
                        },
                    }
                }
            ]
        },
        {
            name: 'metadata',
            label: {
                en: 'Metadata (SEO)',
                fr: 'Métadonnées (SEO)',
            },
            admin: {
                description: {
                    en: 'Metadata are additional information about the establishment that will be used to improve the SEO of the page.',
                    fr: 'Les métadonnées sont des informations supplémentaires sur l\'établissement qui seront utilisées pour améliorer le référencement de la page.',
                }
            },
            type: 'group',
            fields: [
                {
                    name: 'title',
                    label: {
                        en: 'Title',
                        fr: 'Titre',
                    },
                    type: 'text',
                    required: true,
                    unique: true,
                },
                {
                    name: 'description',
                    label: {
                        en: 'Description',
                        fr: 'Description',
                    },
                    type: 'textarea',
                    required: true,
                }
            ]
        },
        {
            name: 'modules',
            type: 'array',
            label: {
                en: 'Buttons',
                fr: 'Boutons',
            },
            labels: {
                singular: {
                    en: 'Button',
                    fr: 'Bouton',
                },
                plural: {
                    en: 'Buttons',
                    fr: 'Boutons',
                },
            },
            admin: {
                position: 'sidebar',
            },
            fields: [
                {
                    name: 'module',
                    label: {
                        en: 'Action',
                        fr: 'Action',
                    },
                    type: 'relationship',
                    relationTo: 'modules',
                    required: true,
                    admin: {
                        description: {
                            en: 'The action that will be added to this button',
                            fr: 'L\'action qui sera ajouté à ce bouton',
                        }
                    }
                },
                {
                    name: 'enabled',
                    type: 'checkbox',
                    label: {
                        en: 'Enabled',
                        fr: 'Activé',
                    },
                    admin: {
                        description: {
                            en: 'Whether the module is enabled or not.',
                            fr: 'Si le module est activé ou non.',
                        }
                    },
                    defaultValue: true,
                },
                {
                    name: 'secure',
                    type: 'checkbox',
                    label: {
                        en: 'Secure',
                        fr: 'Sécurisé',
                    },
                    admin: {
                        description: {
                            en: 'Whether the module is secure or not.',
                            fr: 'Si le module est sécurisé ou non.',
                        }
                    },
                    defaultValue: false,
                }
            ]
        }
    ],
};