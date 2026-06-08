/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'navy':          '#0b2a4e',
        'navy-hover':    '#0d3360',
        'navy-dark':     '#071d36',
        'dark':          '#1a1a1a',
        'bg':            '#ffffff',
        'bg-light':      '#f8f8f6',
        'bg-off':        '#f1f1f1',
        'text-primary':  '#1a1a1a',
        'text-body':     '#333333',
        'text-muted':    '#888888',
        'text-light':    '#cccccc',
        'border-subtle': '#efefef',
        'border-mid':    '#cccccc',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['Mulish', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.4rem, 1.2rem + 3.6vw, 3.375rem)', { lineHeight: '1.15' }],
        'h1':      ['clamp(1.9rem, 1.2rem + 2.2vw, 3rem)',     { lineHeight: '1.15' }],
        'h2':      ['clamp(1.625rem, 1.4rem + 0.9vw, 2.5rem)', { lineHeight: '1.2'  }],
        'h3':      ['clamp(1.375rem, 1.3rem + 0.26vw, 1.625rem)', { lineHeight: '1.3' }],
      },
      maxWidth: {
        'content': '1200px',
      },
      transitionDuration: {
        '400': '400ms',
      },
      animation: {
        'bounce-slow': 'bounce-slow 1.8s ease-in-out infinite',
        'arrow-in':    'arrow-in 0.3s ease forwards',
      },
      keyframes: {
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(8px)' },
        },
      },
    },
  },
  plugins: [],
}
