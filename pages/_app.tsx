import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false)

  // Ensure theme switching works properly with SSR
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <Component {...pageProps} />
}

export default MyApp 