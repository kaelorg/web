module.exports = {
  plugins: [require('@tailwindcss/ui')], // eslint-disable-line global-require
  future: {
    purgeLayersByDefault: true,
  },
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
  },
};
