export default {
  locales: ['en'],
  output: 'src/locales/$LOCALE.json', // Customize the output directory as needed
  input: ['src/**/*.{tsx}'],
  defaultNamespace: 'translation',
  createOldCatalogs: false, // Don't create old catalog files
  keySeparator: false, // Allow keys with dots to be parsed
  namespaceSeparator: false, // Allow namespaces in keys
  lexers: {
    js: ['JavascriptLexer'],
    jsx: ['JsxLexer'],
    ts: ['JavascriptLexer'],
    tsx: ['JsxLexer'],
  },
  sort: true, // Sort keys in the output file alphabetically
};
