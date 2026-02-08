/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1320px',
        xl: '1320px',
        '2xl': '1320px',
      },
    },
		extend: {
      colors: {
        primary: '#145da0', // Main Color & Button Background
        'primary-dark': '#0f4b82', // Darker shade for hover
        'ue-dark': '#061f35', // Dark Navy (Gradient Top Left)
        'ue-light': '#145da0', // Light Blue (Gradient Bottom Right / Main)
        'accent-yellow': '#FFB800', 
        'ue-blue-light': '#f0f9ff',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Default Body Font
        heading: ['Poppins', 'sans-serif'], // Headings
        body: ['Roboto', 'sans-serif'], // Alias
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
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
	},
	plugins: [
    require('@tailwindcss/typography'),
  ],
}
