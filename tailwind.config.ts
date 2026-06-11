import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#131214",
        cream: "#F4F0EB",
        sand: "#EAE4DC",
        brand: {
          DEFAULT: "#FF4800",
          dark: "#E03E00",
          soft: "#FFE9DF"
        },
        ok: "#1E9E5A",
        warn: "#E8A100"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"]
      },
      borderRadius: {
        card: "1.75rem",
        big: "2.5rem"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        marquee: "marquee 30s linear infinite"
      }
    }
  },
  plugins: []
};
export default config;
