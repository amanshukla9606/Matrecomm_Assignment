module.exports = {
  defaultNamespace: 'translation',
  lexers: {
    js: ['JsxLexer'],
    default: ['JavascriptLexer'],
  },
  locales: ['en', 'lv', 'es'], 
  output: 'public/locales/$LOCALE/$NAMESPACE.json', 
  input: [ 'src/*.js', ],
}