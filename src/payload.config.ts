// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { cloudStoragePlugin } from "@payloadcms/plugin-cloud-storage";
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { en } from 'payload/i18n/en'
import { fr } from 'payload/i18n/fr'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Icons } from './collections/Icons'
import { Modules } from './collections/Modules'
import { Commandations } from './collections/Commandations'
import { Establishments } from './collections/Establishments'
import { FAQS } from './collections/FAQs';
import Pages from './collections/Pages';
import { Video } from './collections/Video';

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Pages, Establishments, Modules, Commandations, Media, Video, Icons],
  globals: [FAQS],
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
    cloudStoragePlugin({
      collections: {
        [Media.slug]: {
          adapter: s3Adapter({
            bucket: process.env.S3_BUCKET || '',
            config: {
              region: process.env.S3_REGION || 'us-east-1',
              credentials: {
                accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
                secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
              }
            }
          })
        },
        [Icons.slug]: {
          adapter: s3Adapter({
            bucket: process.env.S3_BUCKET || '',
            config: {
              region: process.env.S3_REGION || 'us-east-1',
              credentials: {
                accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
                secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
              }
            }
          })
        }
      }
    })
  ],
  localization: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    fallback: true
  },
  i18n: {
    fallbackLanguage: 'fr',
    supportedLanguages: { en, fr }
  }
})
