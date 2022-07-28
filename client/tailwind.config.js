const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '2rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.5rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Lexend', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      colors: {
        primary: {
          light: '#858ae8',
          DEFAULT: '#676de3',
          dark: '#5c62cc',
        },
        secondary: {
          light: '#85e8b2',
          DEFAULT: '#67e39f',
          dark: '#5ccc8f',
        },
      },
    },
  },

  daisyui: {
    themes: [
      {
        light: {
          primary: '#8a4af3',
          secondary: '#86efac',
          accent: '#fcd34d',
          neutral: '#e4e5f6',
          'base-100': '#f8fafc',
          'base-200': '#f1f2fc',
          'base-300': '#fff',
        },
      },
      {
        dark: {
          primary: '#8a4af3',
          secondary: '#86efac',
          accent: '#fcd34d',
          neutral: '#e4e5f6',
          'base-100': '#20252f',
          'base-200': '#1c212a',
          'base-300': '#0d131f',
        },
      },
      'cupcake',
    ],
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('daisyui'),
  ],
}
