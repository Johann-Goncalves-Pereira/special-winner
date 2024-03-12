module.exports = {
  plugins: {
    autoprefixer: {},

    "postcss-vwh": {},
    "postcss-custom-media": {},
    "postcss-custom-selectors": {},
    // "postcss-lightningcss": {},
    "postcss-preset-env": {
      precalculate: false,
      features: {
        "logical-properties-and-values": false,
        "custom-properties": false,
      },
    },

    tailwindcss: {},
  },
};
