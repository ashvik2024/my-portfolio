// tailwind.config.js
export default {
  darkMode: "class", // enables class-based dark mode
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        
      },
      
    },
  },
  plugins: [],
};
