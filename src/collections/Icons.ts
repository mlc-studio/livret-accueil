import { isAdmin } from '@/access';
import type { CollectionConfig } from 'payload'

export const Icons: CollectionConfig = {
  slug: 'icons',
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
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'belongsTo',
      type: 'relationship',
      relationTo: 'users',
      defaultValue: ({ user }: any) => user.id,
      admin: {
        condition: (data, siblingData, { user }) => {
          return isAdmin({ req: { user } })
        }
      }
    }
  ],
  upload: true,
}