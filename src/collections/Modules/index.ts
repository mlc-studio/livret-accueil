import type { CollectionConfig } from 'payload'
import { Icon } from './components/Icon'
import { Select } from './components/Select'
import { Wifi } from './components/Wifi'
import { Constructor } from './components/Constructor'
import { ExternalLink } from './components/ExternalLink'
import { Digicode } from './components/Digicode'
import { Commandation } from './components/Commandation'
import { isAdmin } from '@/access'

export const Modules: CollectionConfig = {
    slug: 'modules',
    admin: {
        useAsTitle: 'title'
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
        },
    },
    fields: [
        {
            name: 'belongsTo',
            label: {
                en: 'Belongs to',
                fr: `Appartient à`
            },
            type: 'relationship',
            relationTo: 'users',
            defaultValue: ({ user }: any) => user.id,
            required: true,
            admin: {
                description: {
                    en: 'The user who owns this module',
                    fr: `L'utilisateur qui possède ce module`
                },
                condition: (data, siblingData, { user }) => {
                    return isAdmin({ req: { user } })
                }
            }
        },
        Select,
        ...Icon,
        Wifi,
        Constructor,
        ExternalLink,
        Digicode,
        Commandation
    ]
}