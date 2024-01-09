/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: '#F6F5FC',
        black: '#000000',
        white: '#ffffff',
        blue: {
          900: '#283460',
          400: '#4F5887',
        },
        gray: {
          900: '#222222',
          400: '#BCBCBC',
          200: '#E5E5E5',
        },
        danger: {
          900: '#F63131',
          400: '#FC5050',
          200: '#F97171',
        },
        success: {
          900: '#219653',
          400: '#51CA73',
        },
    },
  },
  plugins: [],
}
}