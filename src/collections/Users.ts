import { isAdmin, isAdminOrHimself } from '@/access'
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    group: {
      en: 'Administration',
      fr: 'Administration',
    },
    useAsTitle: 'email',
    hidden: ({ user }) => user?.role === 'admin' ? false : true,
  },
  labels: {
    singular: {
      en: 'User',
      fr: 'Utilisateur',
    },
    plural: {
      en: 'Users',
      fr: 'Utilisateurs',
    }
  },
  access: {
    read: isAdminOrHimself,
    create: isAdmin,
    update: isAdminOrHimself,
    delete: isAdmin,
  },
  auth: true,
  fields: [
    {
      name: 'role',
      label: {
        en: 'Role',
        fr: 'Rôle',
      },
      type: 'select',
      defaultValue: 'host',
      admin: {
        condition: (_, sibligData, { user }) => user?.role === 'admin',
        description: {
          en: 'Only admins can change the role',
          fr: 'Seuls les administrateurs peuvent changer le rôle',
        },
      },
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Host',
          value: 'host',
        },
      ],
    }
  ],
}
