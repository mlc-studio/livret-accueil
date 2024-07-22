import type { CollectionConfig } from 'payload'

export const Tests: CollectionConfig = {
  slug: 'tests',
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
        name: 'title',
        label: 'Title',
        type: 'text',
        required: true,
        localized: true,
    },
    {
        name: 'description',
        label: 'Description',
        type: 'textarea',
        required: true,
    },
    {
        name: 'date',
        label: 'Date',
        type: 'date',
        required: true,
    },
    {
        name: 'image',
        label: 'Image',
        type: 'upload',
        relationTo: 'media',
        required: true,
    }
  ],
}
