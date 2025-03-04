# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🌓 Dark/Light mode support
- 🌍 Internationalization (i18n) support for English, French, and German
- 🎨 Tailwind CSS for styling
- 🎭 Framer Motion animations
- 📱 Fully responsive design
- ⚡ Next.js for optimal performance

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Translations

The website supports multiple languages through the `next-intl` package. Translation files are located in the `messages` directory.

### Translation Structure

- `messages/en.json` - English translations (base)
- `messages/fr.json` - French translations
- `messages/de.json` - German translations

### Managing Translations

1. Add new text in `messages/en.json` first
2. Add corresponding translations in other language files
3. Use the translation key in components:
```tsx
const t = useTranslations('namespace');
// ...
<div>{t('key')}</div>
```

### Validation

The project includes automatic translation validation that:
- Ensures all languages have the same structure
- Checks for missing translations
- Validates during build process

Run translation checks manually:
```bash
npm run check-translations
```

The check is automatically run before each build (`npm run build`). The build will fail if:
- Any translation keys are missing
- There are extra keys in non-English translations
- Translation files have invalid JSON syntax

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run check-translations` - Validate translation files

## Adding New Languages

1. Create a new translation file in `messages/`
2. Add the locale to `next.config.js`
3. Add the language to the `languages` array in `LanguageSelector.tsx`
4. Add the locale to `scripts/check-translations.js`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and translation checks
5. Submit a pull request

## License

MIT License - feel free to use this code for your own portfolio! 