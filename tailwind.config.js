/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Sofia Sans', 'Arial', 'sans-serif']
      },
      colors: {
        canvas: '#F3F0EE',
        'canvas-lifted': '#FCFBFA',
        ink: '#141413',
        slate: '#696969',
        'orange-signal': '#CF4500',
        'orange-arc': '#F37338',
        bone: '#F4F4F4',
        watermark: '#E8E2DA'
      },
      borderRadius: {
        btn: '20px',
        hero: '40px',
        pill: '999px',
        circle: '50%'
      },
      boxShadow: {
        nav: 'rgba(0,0,0,0.04) 0px 4px 24px 0px',
        card: 'rgba(0,0,0,0.08) 0px 24px 48px 0px'
      },
      spacing: {
        '1u': '8px',
        '2u': '16px',
        '3u': '24px',
        '4u': '32px',
        '6u': '48px',
        '8u': '64px',
        '12u': '96px',
        '16u': '128px'
      },
      letterSpacing: {
        eyebrow: '0.04em',
        tight: '-0.02em'
      }
    }
  },
  plugins: []
}
