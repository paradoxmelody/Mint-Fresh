export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    preflight: false, // This stops Tailwind from overriding 98.css styles
  },
  theme: {
    extend: {
      textShadow: {
        'win98': '1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000',
      },
    },
  },
  plugins: [],
}