/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: 'class',
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
      darkPrimaryColor: {
        100: '#00ADB5',
        200: '#AAE3E2',
        300: '#fdf6fd',
      },
      darkPrimaryAccent: {
        100: '#AC7DD2',
        200: '#fff4ff',
      },
      darkPrimaryText: {
        100: '#EEEEEE',
        200: '#C5C5C5',
      },
      darkPrimaryBg: {
        100: '#222831',
        200: '#393E46',
        300: '#454e59',
      },
    },
  },
  plugins: [],
}

