'use client'

import { useRouter } from '@/i18n/routing';
import { RefreshRouteOnSave as PayloadLivePreview } from '@payloadcms/live-preview-react'

export const RefreshRouteOnSave = () => {
  const router = useRouter();
  const domain = process.env.NEXT_PUBLIC_APP_DOMAIN || 'http://localhost:3000';

  return (
    <PayloadLivePreview
      refresh={() => router.refresh()}
      serverURL={domain}
    />
  )
}