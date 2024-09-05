import { isAdmin } from '@/access'
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: {
      en: 'Media',
      fr: 'Média',
    },
    plural: {
      en: 'Medias',
      fr: 'Médias',
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
    },
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
    }
  ],
  upload: {
    mimeTypes: ['image/*'],
  },
}
