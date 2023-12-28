export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slider: {
          "40%, 60%": { transform: "translatex(100px)" },
          "100%": { transform: "translatex(100%)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
       
      },
      animation: {
        slider: "slider 3s steps(12) infinite",
        fadeIn: "fadeIn 2s ease-in forwards",
      },
    },
    plugins: [require("daisyui")],
  },
};
