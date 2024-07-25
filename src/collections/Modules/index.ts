import type { CollectionConfig } from 'payload'
import { Icon } from './components/Icon'
import { Select } from './components/Select'
import { Wifi } from './components/Wifi'
import { Constructor } from './components/Constructor'

export const Modules: CollectionConfig = {
    slug: 'modules',
    admin: {
        useAsTitle: 'title'
    },
    fields: [
        Select,
        ...Icon,
        Wifi,
        Constructor
    ]
}