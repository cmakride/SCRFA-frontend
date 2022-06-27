module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {

        'logo': "url('./assets/rfa-logo.png')"
        

      },
      fontFamily: {
        'OpenSans': ['"Open Sans"', 'sans-serif'],
        'RobotoSlab': ['"Roboto Slab"', 'serif'],
        'RobotoCondensed': ['"Roboto Condensed"', 'sans-serif'],

      },
      colors: {
        row1: {

          1: '#142B47',
          2: '#1B3A61',
          3: '#225089',
          4: '#3068AD',
          5: '#0074C1',
          6: '#93A4BD',
          7: '#35B0CB',

        },
        row2: {

          1: '#415A7B'

        },
        row3: {

          1: '#8C6910',
          2: '#D2B859',
          3: '#F0EBDD',
          4: '#F7F4ED',
          5: '#E9261D',

        },
        row4: {

          1: '#000000',
          2: '#333333',
          3: '#666666',
          4: '#757575',
          5: '#C3C3C3',
          6: '#CCCCCC',
          7: '#E1E5EA',
          8: '#F3F6F9',

        },
      }
    }
  },
  plugins: [],
}
