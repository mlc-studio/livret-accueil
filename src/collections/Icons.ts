import { isAdmin } from '@/access';
import type { CollectionConfig, Where } from 'payload'

export const Icons: CollectionConfig = {
  slug: 'icons',
  admin: {
    group: {
      en: 'Library',
      fr: 'Bibliothèque',
    },
  },
  labels: {
    singular: {
      en: 'Icon',
      fr: 'Icône',
    },
    plural: {
      en: 'Icons',
      fr: 'Icônes',
    }
  },
  access: {
    read: ({ req: { user } }) => {
      if (user?.role === 'host') {
        return {
          or: [
            {
              isPublic: {
                equals: true,
              },
            },
            {
              belongsTo: {
                equals: user.id,
              }
            }
          ]
        } as Where
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
      label: {
        en: 'Belongs To',
        fr: 'Appartient à',
      },
      name: 'belongsTo',
      type: 'relationship',
      relationTo: 'users',
      defaultValue: ({ user }: any) => user.id,
      admin: {
        description: {
          en: 'The user that this icon belongs to',
          fr: 'L\'utilisateur à qui appartient cette icône',
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
    mimeTypes: ['image/*'],
  },
}