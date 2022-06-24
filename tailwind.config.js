module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      fontFamily:{
        'OpenSans':['"Open Sans"', 'sans-serif'],
        'RobotoSlab':['"Roboto Slab"','serif']
      },
      colors: {
        row1: {
          
          100: '#142B47',
          200: '#1B3A61',
          300: '#225089',
          400: '#3068AD',
          500: '#0074C1',
          600: '#93A4BD',
          700: '#35B0CB',
        
        },
        row2: {
          
          100: '#415A7B'
        
        },
        row3: {
          
          100: '#8C6910',
          200: '#D2B859',
          300: '#F0EBDD',
          400: '#F7F4ED',
          500: '#E9261D',
        
        },
        row4: {
          
          100: '#000000',
          200: '#333333',
          300: '#666666',
          400: '#757575',
          500: '#C3C3C3',
          600: '#CCCCCC',
          700: '#E1E5EA',
          800: '#F3F6F9',
        
        },
      }
    }
  },
  plugins: [],
}
