import { NextIntlClientProvider, AbstractIntlMessages } from 'next-intl';
import { notFound } from 'next/navigation';
import { ThemeProvider } from 'next-themes';
import { LoadingProvider } from '@/components/providers/LoadingProvider';

// Import all messages
import en from '@/messages/en.json';
import fr from '@/messages/fr.json';
import de from '@/messages/de.json';

// Define supported locales
const locales = ['en', 'fr', 'de'] as const;
type Locale = typeof locales[number];

// Create a type-safe messages object
const messages = {
  en,
  fr,
  de
};

function pick<T>(obj: T, locale: keyof T): unknown {
  return obj[locale];
}

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate that the incoming locale is supported
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider 
          locale={locale} 
          messages={messages[locale as keyof typeof messages] as unknown as AbstractIntlMessages}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <LoadingProvider>{children}</LoadingProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 