module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'intro-desktop' : "url('/src/image/bg-intro-desktop.png')",
        'intro-mobile' : "url('/src/image/bg-intro-mobile.png')",
      }),
      colors: {
        red: {
          450:'#ff7a7a'
        },
        green:{
          450:'#38cc8c'
        },
        indigo:{
          550:'#6055a5'
        },
        gray:{
          850:'#3e3c49'
        },
        purple:{
          350:'#b9b6d3'
        }
      },
    },
    fontFamily:{
        'Poppins': ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'new': '0px 8px 0px rgba(63,63,63,0.2)',
      },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
