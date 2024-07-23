import type { CollectionConfig } from 'payload'
import { Icon } from './components/Icon'
import { Select } from './components/Select'
import { Wifi } from './components/Wifi'

export const Modules: CollectionConfig = {
    slug: 'modules',
    admin: {
        useAsTitle: 'title'
    },
    fields: [
        Select,
        ...Icon,
        Wifi
    ]
}