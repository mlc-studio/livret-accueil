'use client'

import { RefreshRouteOnSave as PayloadLivePreview } from '@payloadcms/live-preview-react'
import { useRouter } from 'next/navigation'

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