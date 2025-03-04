const fs = require('fs');
const path = require('path');

// Load all translation files
const loadTranslations = () => {
  const translations = {};
  const locales = ['en', 'fr', 'de'];
  
  locales.forEach(locale => {
    const filePath = path.join(process.cwd(), 'messages', `${locale}.json`);
    translations[locale] = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  });
  
  return translations;
};

// Check if all translations have the same structure
const validateTranslations = (translations) => {
  const referenceKeys = getAllKeys(translations['en']);
  const errors = [];

  Object.entries(translations).forEach(([locale, translation]) => {
    if (locale === 'en') return;

    const translationKeys = getAllKeys(translation);
    const missingKeys = referenceKeys.filter(key => !translationKeys.includes(key));
    const extraKeys = translationKeys.filter(key => !referenceKeys.includes(key));

    if (missingKeys.length > 0) {
      errors.push(`Missing keys in ${locale}: ${missingKeys.join(', ')}`);
    }
    if (extraKeys.length > 0) {
      errors.push(`Extra keys in ${locale}: ${extraKeys.join(', ')}`);
    }
  });

  return errors;
};

// Get all keys from an object (including nested)
const getAllKeys = (obj, prefix = '') => {
  return Object.entries(obj).reduce((keys, [key, value]) => {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null) {
      return [...keys, ...getAllKeys(value, newKey)];
    }
    return [...keys, newKey];
  }, []);
};

// Main execution
try {
  console.log('Checking translations...');
  const translations = loadTranslations();
  const errors = validateTranslations(translations);

  if (errors.length > 0) {
    console.error('Translation validation failed:');
    errors.forEach(error => console.error(`- ${error}`));
    process.exit(1);
  } else {
    console.log('All translations are valid!');
  }
} catch (error) {
  console.error('Error checking translations:', error);
  process.exit(1);
} 