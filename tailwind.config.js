/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        apex: {
          primary: "#D89400",
          teal: "#FFB612",
          navy: "#090909",
          royal: "#1A1A1A",
          mist: "#FFF4D1",
          white: "#FFFFFF",
        },
      },
      boxShadow: {
        phone: "0 42px 90px rgba(0,0,0,.72), 0 0 0 1px rgba(255,182,18,.12)",
        teal: "0 16px 40px rgba(255,182,18,.2)",
      },
      keyframes: {
        screenIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatTicket: {
          "0%, 100%": { transform: "translateY(0) rotate(-0.4deg)" },
          "50%": { transform: "translateY(-6px) rotate(0.4deg)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: ".65" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "screen-in": "screenIn .32s cubic-bezier(.2,.8,.2,1) both",
        "ticket-float": "floatTicket 4.5s ease-in-out infinite",
        "pulse-soft": "pulseSoft 1.7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
