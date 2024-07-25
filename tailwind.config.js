const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "shape-green": "url('/img/bg.png')",
        "shape-green-md": "url('/img/bg-responsif.png')",
        "gradient-card": "url('/img/gradient-card.png')",
        "texture": "url('/img/texture.png')",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [
    require('daisyui'),
    function ({ addUtilities }) {
      const textUtilities = {
        '.text-primary': {
          'background-image': 'linear-gradient(to right, #10edea, #3ccaf9)',
          'font-weight': 'bold',
          'color': 'transparent',
          'background-clip': 'text',
        }
      };

      addUtilities(textUtilities, ['responsive', 'hover']);
    },
  ],
});
