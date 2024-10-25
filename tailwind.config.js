/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "640px",
        tablet: "768px",
        "laptop-md": "1024px",
        laptop: "1280px",
      },
      colors: {
        headMain: "#fff",
        headShade: "#B6B4BD33",
        paraMain: "#998F8F",
      },
    },
  },
  plugins: [],
};
