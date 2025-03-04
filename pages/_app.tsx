import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import { ThemeProvider } from 'next-themes'
import { NextIntlClientProvider, AbstractIntlMessages } from 'next-intl'
import { useRouter } from 'next/router'
import '../styles/globals.css'

// Import all messages
import en from '../messages/en.json'
import fr from '../messages/fr.json'
import de from '../messages/de.json'

const messages = { en, fr, de }

function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false)
  const router = useRouter()
  const locale = router.locale || 'en'

  // Ensure theme switching works properly with SSR
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <NextIntlClientProvider messages={messages[locale as keyof typeof messages] as unknown as AbstractIntlMessages} locale={locale}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </NextIntlClientProvider>
  )
}

export default MyApp 