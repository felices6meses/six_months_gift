/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily:{
        title: ['Shrikhand', 'serif'],
        text: ['Belleza', 'sans-serif']
      },
      backgroundImage: {
        'blurred-pattern': "url('pattern_bg.png')"
      },
      colors:{ 
        'accent': '#FF9CF2',
        'principal': '#181A1B',
        'borders' : '#EBB0E3'
      },
      opacity: {
        '8': 0.08
      }
    },
  },
  plugins: [],
}
