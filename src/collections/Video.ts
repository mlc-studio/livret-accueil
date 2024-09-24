import { isAdmin } from '@/access'
import type { CollectionConfig, Where } from 'payload'

export const Video: CollectionConfig = {
  slug: 'video',
  labels: {
    singular: {
      en: 'Video',
      fr: 'Vidéo',
    },
    plural: {
      en: 'Videos',
      fr: 'Vidéos',
    }
  },
  admin: {
    group: {
      en: 'Library',
      fr: 'Bibliothèque',
    },
    description: {
      en: 'Media files',
      fr: 'Fichiers média',
    },
    hidden: ({ user }) => {
      if (user?.role === 'admin') return false;
      return true;
    },
  },
  access: {
    read: ({ req: { user } }) => {
      return true;
    },
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      label: {
        en: 'Alt Text',
        fr: 'Texte alternatif',
      },
      admin: {
        description: {
          fr: "Le texte alternatif est utilisé par les lecteurs d'écran pour décrire l'image",
          en: 'The alt text is used by screen readers to describe the image',
        }
      },
      name: 'alt',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'belongsTo',
      type: 'relationship',
      relationTo: 'users',
      label: {
        en: 'Belongs to',
        fr: 'Appartient à',
      },
      defaultValue: ({ user }: any) => user.id,
      required: true,
      admin: {
        description: {
          en: 'The user that this media belongs to',
          fr: 'L\'utilisateur à qui appartient ce média',
        },
        condition: (data, siblingData, { user }) => {
          return isAdmin({ req: { user } })
        }
      }
    },
    {
      name: 'isPublic',
      type: 'checkbox',
      label: {
        en: 'Public',
        fr: 'Public',
      },
      defaultValue: false,
      admin: {
        condition: (data, siblingData, { user }) => {
          return isAdmin({ req: { user } })
        }
      }
    }
  ],
  upload: {
    mimeTypes: ['video/*'],
  },
}
