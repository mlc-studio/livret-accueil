import { isAdmin } from "@/access";
import { CollectionConfig } from "payload";

export const Commandations: CollectionConfig = {
    slug: 'commandations',
    admin: {
        useAsTitle: 'name',
    },
    labels: {
        singular: {
            en: 'Your Commandation',
            fr: 'Votre Recommandation',
        },
        plural: {
            en: 'Your Commandations',
            fr: 'Vos Recommandations',
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
            if (user?.role === 'host') return true;
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
            if (user?.role === 'host') {
                return {
                    belongsTo: {
                        equals: user.id
                    }
                }
            }

            return false;
        }
    },
    fields: [
        {
            name: 'belongsTo',
            type: 'relationship',
            relationTo: 'users',
            required: true,
            label: {
                en: 'Host',
                fr: 'Hôte',
            },
            defaultValue: ({ user }: any) => user.id,
            admin: {
                description: {
                    en: 'The user that this commandation belongs to',
                    fr: 'L\'utilisateur à qui appartient cette recommandation',
                },
                condition: (data, siblingData, { user }) => {
                    return isAdmin({ req: { user } })
                }
            }
        },
        {
            name: 'name',
            label: {
                en: 'Name',
                fr: 'Nom',
            },
            admin: {
                description: {
                    en: 'The name of the place',
                    fr: 'Le nom du lieu',
                }
            },
            localized: true,
            type: 'text',
            required: true,
        },
        {
            admin: {
                description: {
                    en: 'A short description of the place',
                    fr: 'Une courte description du lieu',
                }
            },
            name: 'description',
            label: {
                en: 'Description',
                fr: 'Description',
            },
            localized: true,
            type: 'textarea',
            required: true,
        },
        {
            admin: {
                description: {
                    en: 'The image of the place',
                    fr: 'L\'image du lieu',
                }
            },
            name: 'image',
            label: {
                en: 'Image',
                fr: 'Image',
            },
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            admin: {
                description: {
                    en: 'The address of the place',
                    fr: 'L\'adresse du lieu',
                }
            },
            name: 'address',
            label: {
                en: 'Address',
                fr: 'Adresse',
            },
            type: 'text',
            required: true,
        },
        {
            admin: {
                description: {
                    en: 'The phone number of the place',
                    fr: 'Le numéro de téléphone du lieu',
                }
            },
            name: 'phone',
            label: {
                en: 'Phone',
                fr: 'Téléphone',
            },
            type: 'text',
            required: false
        },
        {
            name: 'website',
            label: {
                en: 'Website',
                fr: 'Site Web',
            },
            type: 'text',
            required: false,
        },
        {
            name: 'email',
            label: {
                en: 'Email',
                fr: 'Email',
            },
            type: 'text',
            required: false,
        },
        {
            name: 'rangePrice',
            label: {
                en: 'Price range',
                fr: 'Fourchette de prix',
            },
            type: 'select',
            required: true,
            admin: {
                description: {
                    en: 'The price range of the place',
                    fr: 'La fourchette de prix du lieu',
                },
                position: 'sidebar',
            },
            options: [
                { value: '1', label: '€' },
                { value: '2', label: '€€' },
                { value: '3', label: '€€€' },
                { value: '4', label: '€€€€' },
            ],
            defaultValue: '1',
        }
    ],
};