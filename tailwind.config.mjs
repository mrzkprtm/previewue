/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        xl: '0',
      },
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1200px',
        xl: '1200px',
        '2xl': '1200px',
      },
    },
    extend: {
      maxWidth: {
        '7xl': '1200px',
      },
      colors: {
        primary: '#145da0', // Main Color & Button Background
        'primary-dark': '#0f4b82', // Darker shade for hover
        'ue-dark': '#061f35', // Dark Navy (Gradient Top Left)
        'ue-light': '#145da0', // Light Blue (Gradient Bottom Right / Main)
        'accent-yellow': '#FFB800',
        'ue-blue-light': '#f0f9ff',

        // Imported from Seto's Design
        'ultimate-blue': '#145da0',
        'ultimate-yellow': '#FFBB00',
        'ultimate-navy': '#07223a',
        'seto-primary': '#F58220', // Renamed from primary to avoid conflict
        'theme-blue': '#083D77',
        'theme-blue-dark': '#052a53',
        'background-light': '#F9FAFB',
        'surface-light': '#FFFFFF',
        'text-main-light': '#1F2937',
        'text-muted-light': '#6B7280',
        'contact-primary': '#F58220',
        'contact-blue': '#083D77',
        'contact-blue-dark': '#052a53',
        'contact-bg-light': '#F9FAFB',
        'contact-bg-dark': '#111827',
        'contact-surface-light': '#FFFFFF',
        'contact-surface-dark': '#1F2937',
        'contact-text-main-light': '#1F2937',
        'contact-text-main-dark': '#F3F4F6',
        'contact-text-muted-light': '#6B7280',
        'contact-text-muted-dark': '#9CA3AF',
      },
      fontFamily: {
        sans: ['Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'], // Default Body Font
        heading: ['Poppins', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'], // Headings
        body: ['Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'], // Alias
        poppins: ['Poppins', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'], // Restoration
        open: ['Open Sans', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'], // Restoration
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #061f35 0%, #145da0 100%)',
      },
      boxShadow: {
        'header': '0px 0px 30px 0px rgba(0,0,0,0.30)',
        'card': '0px 4px 6px -2px rgba(0,0,0,0.05), 0px 4px 15px -3px rgba(0,0,0,0.10)',
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        'scroll': 'scroll 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-250px * 5))' },
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
