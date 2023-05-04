/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {},
    colors: {
      primaryColor: {
        100: '#26A69A',
        200: '#408d86',
        300: '#cdfaf6',
      },
      primaryAccent: {
        100: '#80CBC4',
        200: '#43A49B',
      },
      primaryText: {
        100: '#263339',
        200: '#728f9e',
      },
      primaryBg: {
        100: '#E0F2F1',
        200: '#D0EBEA',
        300: '#FFFFFF',
      },
    }
  },
  plugins: [],
}

