module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Trust-building navy
        primary: {
          50: "#EBF1F7", // primary-50
          100: "#D7E3EF", // primary-100
          200: "#AFC7DF", // primary-200
          300: "#87ABCF", // primary-300
          400: "#5F8FBF", // primary-400
          500: "#2B5A87", // primary-500 (main)
          600: "#234B72", // primary-600
          700: "#1B3C5D", // primary-700
          800: "#132D48", // primary-800
          900: "#0B1E33", // primary-900
          DEFAULT: "#2B5A87", // primary default
        },
        // Secondary Colors - Growth-oriented green
        secondary: {
          50: "#F0F5F2", // secondary-50
          100: "#E1EBE5", // secondary-100
          200: "#C3D7CB", // secondary-200
          300: "#A5C3B1", // secondary-300
          400: "#87AF97", // secondary-400
          500: "#4A7C59", // secondary-500 (main)
          600: "#3E6A4A", // secondary-600
          700: "#32583B", // secondary-700
          800: "#26462C", // secondary-800
          900: "#1A341D", // secondary-900
          DEFAULT: "#4A7C59", // secondary default
        },
        // Accent Colors - Warm orange
        accent: {
          50: "#FDF4ED", // accent-50
          100: "#FBE9DB", // accent-100
          200: "#F7D3B7", // accent-200
          300: "#F3BD93", // accent-300
          400: "#EFA76F", // accent-400
          500: "#E67E22", // accent-500 (main)
          600: "#C2681C", // accent-600
          700: "#9E5216", // accent-700
          800: "#7A3C10", // accent-800
          900: "#56260A", // accent-900
          DEFAULT: "#E67E22", // accent default
        },
        // Background Colors
        background: "#FAFBFC", // background
        surface: "#F4F6F8", // surface
        // Text Colors
        "text-primary": "#1A202C", // text-primary
        "text-secondary": "#4A5568", // text-secondary
        // Status Colors
        success: {
          50: "#F0FFF4", // success-50
          100: "#C6F6D5", // success-100
          200: "#9AE6B4", // success-200
          300: "#68D391", // success-300
          400: "#48BB78", // success-400
          500: "#38A169", // success-500 (main)
          600: "#2F855A", // success-600
          700: "#276749", // success-700
          800: "#22543D", // success-800
          900: "#1C4532", // success-900
          DEFAULT: "#38A169", // success default
        },
        warning: {
          50: "#FFFBEB", // warning-50
          100: "#FEF5E7", // warning-100
          200: "#FEEBC8", // warning-200
          300: "#FBD38D", // warning-300
          400: "#F6AD55", // warning-400
          500: "#D69E2E", // warning-500 (main)
          600: "#C05621", // warning-600
          700: "#9C4221", // warning-700
          800: "#7C2D12", // warning-800
          900: "#652B19", // warning-900
          DEFAULT: "#D69E2E", // warning default
        },
        error: {
          50: "#FED7D7", // error-50
          100: "#FEB2B2", // error-100
          200: "#FC8181", // error-200
          300: "#F56565", // error-300
          400: "#E53E3E", // error-400 (main)
          500: "#C53030", // error-500
          600: "#9B2C2C", // error-600
          700: "#742A2A", // error-700
          800: "#63171B", // error-800
          900: "#521B1B", // error-900
          DEFAULT: "#E53E3E", // error default
        },
        // Border Colors
        border: "#E2E8F0", // border
        "border-light": "#F7FAFC", // border-light
        "border-dark": "#CBD5E0", // border-dark
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Inter for body and headlines
        inter: ['Inter', 'sans-serif'], // Inter explicit
        accent: ['Playfair Display', 'serif'], // Playfair Display for accents
        playfair: ['Playfair Display', 'serif'], // Playfair Display explicit
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.6rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.3' }],
        '6xl': ['3.75rem', { lineHeight: '1.3' }],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'interactive': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'interactive-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'smooth': 'ease-in-out',
      },
      borderRadius: {
        'lg': '0.5rem',
        'xl': '0.75rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}