import path from 'path'
import { fileURLToPath } from 'url'

// Payload imports
import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { cloudStoragePlugin } from "@payloadcms/plugin-cloud-storage"
import { en } from 'payload/i18n/en'
import { fr } from 'payload/i18n/fr'

// Local imports
import { s3AdapterConfig } from './s3AdapterConfig'
import sharp from 'sharp'

// Collections
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Icons } from './collections/Icons'
import { Modules } from './collections/Modules'
import { Commandations } from './collections/Commandations'
import { Establishments } from './collections/Establishments'
import { Pages } from './collections/Pages'
import { Video } from './collections/Video'

// Globals
import { FAQS } from './collections/FAQs'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: { user: Users.slug },
  collections: [Users, Pages, Establishments, Modules, Commandations, Media, Video, Icons],
  globals: [FAQS],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: { outputFile: path.resolve(dirname, 'payload-types.ts') },
  db: mongooseAdapter({ url: process.env.DATABASE_URI || '' }),
  sharp,
  plugins: [cloudStoragePlugin({
    collections: {
      [Media.slug]: { adapter: s3AdapterConfig },
      [Icons.slug]: { adapter: s3AdapterConfig },
      [Video.slug]: { adapter: s3AdapterConfig }
    }
  })],
  localization: { locales: ['fr', 'en'], defaultLocale: 'fr', fallback: true },
  i18n: { fallbackLanguage: 'fr', supportedLanguages: { en, fr } }
})
