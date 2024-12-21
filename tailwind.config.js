/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        'primary': ['Gothic', 'Helvetica', 'Arial', 'sans-serif'],
        'heading': ['Boowie', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: {
          400: '#A35A61',
          500: '#A35A61',
          600: '#A35A61',
        },
        secondary: {
          400: '#3A5367',
          500: '#3A5367',
          600: '#3A5367',
        },
        base: {
          background: '#d6cfd3',
          surface: '#d6cfd3',
          border: '#000',
        }
      },
      screens: {
        'mobile-0' : '534px' ,
        'mobile': '640px',
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1280px',
        'wide': '1536px',
        'ultra': '2000px'
      },
    },
  },
  plugins: [],
}

