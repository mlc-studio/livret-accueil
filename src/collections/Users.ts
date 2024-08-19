import { isAdmin, isAdminOrHimself } from '@/access'
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
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
      label: 'Role',
      type: 'select',
      defaultValue: 'host',
      admin: {
        condition: (_, { user }) => user?.role === 'admin',
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
