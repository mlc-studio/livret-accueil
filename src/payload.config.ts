// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Icons } from './collections/Icons'
import { Modules } from './collections/Modules'
import { HomePage } from './globals/HomePage'
import CustomAdminView from './customs/CustomAdminView'
import { Commandations } from './collections/Commandations'
import { Establishments } from './collections/Establishments'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    // components: {
    //   views: {
    //     Dashboard: CustomAdminView,
    //   }
    // }
  },
  collections: [Users, Establishments, Modules, Commandations, Media, Icons],
  globals: [HomePage],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    vercelBlobStorage({
      collections: {
        [Media.slug]: true,
        [Icons.slug]: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
    }),
  ],
  localization: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    fallback: true
  }
})
