/** @type {import('tailwindcss').Config} */
export const content = ['./index.html', './src/**/*.{js,ts,jsx,tsx}'];
export const theme = {
  extend: {
    colors: {
      customGray: '#666666',
      customPink: '#E70FAA',
      customPurple: '#716AD5',
      customBlue: '#42446E',
    },
    backgroundImage: {
      customGradient:
        'linear-gradient(62.8deg, #00C0FD -30.73%, #E70FAA 98.26%)',
    },
  },
};
export const plugins = [];
