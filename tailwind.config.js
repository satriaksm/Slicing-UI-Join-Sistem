/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(7, 94, 253, 1)',
        secondary: 'rgba(237, 193, 74, 1)',
        darkblue: 'rgba(35, 37, 54, 1)',
        blue: 'rgba(7, 94, 253, 1)',
        yellow: 'rgba(255, 208, 80, 1)',
        darkgrey: 'rgba(76, 76, 76, 1)',
        mediumgrey: 'rgba(109, 110, 118, 1)',
        lightgrey: 'rgba(244, 244, 244, 1)',
        lightergrey: 'rgba(244, 240, 248, 1)',
        lightyellow: 'rgba(251, 246, 234, 1)'
      },
      fontFamily: {
        sen: ['Sen','sans-serif'],
        inter: ['Inter','sans-serif'],
        montserrat: ['Montserrat','sans-serif'],
      },
      fontSize: {
        display: '56px',
        h1: '48px',
        h2: '36px',
        h3: '28px',
        h4: '24px',
        h5: '20px',
        h6: '16px',
        body1: '16px',
        body2: '14px',
        label: '14px',
        cap1: '16px',
        cap2: '12px',
        cap3: '16px'
      },
      lineHeight: {
        display:'64px',
        h1:'64px',
        h2:'48px',
        h3:'36px',
        h4:'32px',
        h5:'32px',
        h6:'24px',
        body1:'28px',
        body2:'20px',
        label:'20px',
        cap1:'20px',
        cap2:'16px',
        cap3:'20px'
      }
    },
  },
  plugins: [],
}