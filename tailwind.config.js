module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    './src/**/*.js',
    './src/**/*.ts',
    './src/**/*.tsx',
    './src/**/*.md',
    './src/**/*.mdx',

    // other files...
    './node_modules/flowbite.{js,ts}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        colorPrimary: '#eeeeee',
        darkColorPrimary: '#151517',
        colorSecondary: '#f5f5f5',
        darkColorSecondary: '#1e1e1e',
        text: '#151517',
        darkText: '#eeeeee',
        accent: '#0059e0',
        darkAccent: '#0059e0',
        inactive: '#afafaf',
        darkInactive: '#afafaf',
        tertiary: '#7eb0df',
        darkTertiary: '#7eb0df'
      },
      fontSize: {
        xss: '0.5625rem'
      }
    }
  },
  plugins: [
    require('flowbite')
  ]
}
