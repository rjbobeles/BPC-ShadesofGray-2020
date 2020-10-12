/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    container: {
      center: true,
    },
    extend: {
      width: {
        'screen-1/2': '50vw',
        'screen-1/3': '33.33vw',
        'screen-2/3': '66.66vw',
        'screen-1/4': '25vw',
        'screen-3/4': '75vw',
        'screen-1/5': '20vw',
        'screen-2/5': '40vw',
        'screen-3/5': '60vw',
        'screen-4/5': '80vw',
        'screen-1/6': '16.66vw',
        'screen-5/6': '83.34vw',
      },
      height: {
        inherit: 'inherit',
        'screen-1/2': '50vh',
        'screen-1/3': '33.33vh',
        'screen-2/3': '66.66.vh',
        'screen-1/4': '25vh',
        'screen-3/4': '75vh',
        'screen-1/5': '20vh',
        'screen-2/5': '40vh',
        'screen-3/5': '60vh',
        'screen-4/5': '80vh',
        'screen-1/6': '16.66vh',
        'screen-5/6': '83.34vh',
      },
    },
    minHeight: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
      screen: '100vh',
      'screen-1/4': '25vh',
      'screen-1/2': '50vh',
      'screen-3/4': '75vh',
    },
    colors: {
      gritty: '#0c0c0c',
      mango: '#FEB51A',
      ash: '#FCFCFC',
      black: '#000000',
      white: '#FFFFFF',
      marble: '#EFEFEF',
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/components/**/*.vue', './src/views/**/*.vue'],
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
