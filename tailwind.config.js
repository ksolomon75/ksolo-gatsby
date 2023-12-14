const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#005b99',
        'accent': '#d1dce5',
        'text': '#2e353f',
        'text-light': '#4f5969',
        'heading': '#1a202c',
        'heading-black': '#000',
        'color-inherit': 'inherit',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          md: '1rem',
          lg: '2rem',
          xl: '3rem',
          '2xl': '4rem',
        },
      },
      fontFamily: {
        'body': 'Merriweather',
        'heading': 'Montserrat',
        sans: [
          'Montserrat',
          ...defaultTheme.fontFamily.sans,
        ],
        serif: [
          'Merriweather',
          ...defaultTheme.fontFamily.serif,
        ],
      },
      fontSize: {
        /* 1.200 Minor Third Type Scale */
        'fontSize-0': '0.833rem',
        'fontSize-1': '1rem',
        'fontSize-2': '1.2rem',
        'fontSize-3': '1.44rem',
        'fontSize-4': '1.728rem',
        'fontSize-5': '2.074rem',
        'fontSize-6': '2.488rem',
        'fontSize-7': '2.986rem',

        /* Keith Basic Fluid Type Scale */
        '14px': 'clamp(0.75rem,0.7292vw,1.7rem)',   // 12px-27px, default: 14px
        '16px': 'clamp(0.875rem,0.8333vw,1.8rem)',  // 14px-28px, default: 16px
        '18px': 'clamp(0.875rem,0.9375vw,1.9rem)',  // 14px-30px, default: 18px
        '20px': 'clamp(1rem,1.0417vw,2rem)',        // 16px-32px, default: 20px
        '22px': 'clamp(1.1rem,1.15vw,2.1rem)',      // 17px-33px, default: 22px
        '25px': 'clamp(1.125rem,1.3021vw,2.2rem)',  // 18px-35px, default: 25px
        '30px': 'clamp(1.185rem,1.5625vw,2.35rem)', // 19px-37px, default: 30px
        '35px': 'clamp(1.25rem,1.8229vw,2.5rem)',   // 20px-40px, default: 35px
        '38px': 'clamp(1.4rem,1.9791vw,3rem)',      // 22px-48px, default: 38px
        '40px': 'clamp(1.5rem,2.0834vw,3.5rem)',    // 24px-56px, default: 40px
        '45px': 'clamp(1.6rem,2.3438vw,4rem)',      // 25px-64px, default: 45px
        '50px': 'clamp(2.2rem,2.6042vw,4.5rem)',    // 27px-72px, default: 50px
        '70px': 'clamp(1.9rem,3.6458vw,4.8rem)',    // 30px-76px, default: 70px
        '75px': 'clamp(2.5rem,3.9063vw,5rem)',      // 40px-80px, default: 75px
      },
    },
  },
  plugins: [],
}

