// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        html: { fontSize: "14px" }, // Changes rem base from 16px to 14px
      });
    },
  ],
};
