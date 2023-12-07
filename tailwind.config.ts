import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary-c": "#32a856",
        "secondary-c": "#5273aa",
        "tertiary-c": "#7F0001",
        "maximum": "var(--maximum)",
      },
      backgroundColor: {
        primary: "var(--background-color)",
      },
      textColor: {
        primary: "var(--text-color)",
      },
    },
  },
  plugins: [],
};
export default config;
