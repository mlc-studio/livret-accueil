import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3';

export const s3AdapterConfig = s3Adapter({
  bucket: process.env.S3_BUCKET || '',
  config: {
    region: process.env.S3_REGION || 'us-east-1',
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
    }
  }
});