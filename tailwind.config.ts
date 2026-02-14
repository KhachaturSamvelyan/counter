import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#121C2C",
        glass: "rgba(18, 28, 44, 0.52)",
        accent: "#1F3E6F",
        blue2: "#3AD429",
        tintBlue: "#22d3ee"
      },
      boxShadow: {
        glass: "0 8px 30px rgba(8, 9, 27, 0.45)"
      },
      backdropBlur: {
        xs: "2px"
      }
    }
  },
  plugins: []
} satisfies Config;
