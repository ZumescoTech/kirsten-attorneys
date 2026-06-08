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
        sans:    ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono:    ['"Roboto Mono"', 'SFMono-Regular', 'Consolas', 'monospace'],
        display: ['Inter', '"Plus Jakarta Sans"', '-apple-system', '"Segoe UI"', 'sans-serif'],
      },
      fontSize: {
        'xs':      ['0.888rem', { lineHeight: '1.5' }],
        'sm':      ['0.888rem', { lineHeight: '1.6' }],
        'hero':    ['clamp(4.4rem, 7.25vw, 8.6rem)', { lineHeight: '1.05', letterSpacing: '-0.075em', fontWeight: '400' }],
        'hero-copy': ['clamp(1.35rem, 1.55vw, 1.72rem)', { lineHeight: '1.4', letterSpacing: '-0.055em', fontWeight: '500' }],
        'hero-sub':  ['clamp(1rem, 1.4vw, 1.3rem)', { lineHeight: '1.6', letterSpacing: '-0.03em', fontWeight: '400' }],
        'h1':      ['clamp(1.9rem, 1.2rem + 2.2vw, 3rem)',     { lineHeight: '1.15', letterSpacing: '-0.04em' }],
        'h2':      ['clamp(1.625rem, 1.4rem + 0.9vw, 2.5rem)', { lineHeight: '1.2',  letterSpacing: '-0.035em' }],
        'h3':      ['clamp(1.375rem, 1.3rem + 0.26vw, 1.625rem)', { lineHeight: '1.3', letterSpacing: '-0.03em' }],
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
