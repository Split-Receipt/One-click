module.exports = {
  input: [
    'src/**/*.{js,jsx,ts,tsx}'
  ],
  output: '.',
  options: {
    sort: true,
    removeUnusedKeys: false,
    lngs: ['es', 'ru'],
    ns: ['translation'],
    defaultLng: 'es',
    defaultNs: 'translation',
    resource: {
      lloadPath: 'locales/{{lng}}/{{ns}}.json',
      savePath: 'locales/{{lng}}/{{ns}}.json',
      jsonIndent: 2,
      lineEnding: '\n'
    },
    func: {
      list: ['t', 'i18next.t'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      regex: [
        /t\(\s*['"`]([^'"`]+?)['"`]\s*[,)]/g,
        /t\(\s*`([\s\S]*?)`\s*[,)]/g
      ]
    },
    trans: {
      component: 'Trans',
      i18nKey: 'i18nKey',
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    defaultValue: function() {
      return '';
    }
  }
};