import { useEffect } from 'react'

const BASE_TITLE = 'Bingus Labs'

/**
 * Sets document.title for the current page.
 * Usage: usePageTitle('Sessions') → "Sessions — Bingus Labs"
 */
export function usePageTitle(page: string) {
  useEffect(() => {
    document.title = page ? `${page} — ${BASE_TITLE}` : BASE_TITLE
    return () => {
      document.title = BASE_TITLE
    }
  }, [page])
}
