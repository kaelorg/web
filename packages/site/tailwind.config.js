module.exports = {
  plugins: [require('@tailwindcss/ui')], // eslint-disable-line global-require
  future: {
    purgeLayersByDefault: true,
  },
  purge: {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
  },
};
