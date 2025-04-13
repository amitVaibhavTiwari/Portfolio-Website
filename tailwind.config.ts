import type { Config } from "tailwindcss";

export default {
  darkMode:"class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "clip-path": "clipPathAnim 3s ease-in-out infinite",
      },
      keyframes: {
        clipPathAnim: {
          "0%, 100%": {
            clipPath:
              "polygon(0% 45%, 16% 44%, 33% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%)",
          },
          "50%": {
            clipPath:
              "polygon(0% 60%, 15% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
