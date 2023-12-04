import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background-dark': 'var(--background-color-dark)',
        'text-dark': 'var(--text-color-dark)',
        'background-light': 'var(--background-color-light)',
        'text-light': 'var(--text-color-light)',
      },
      backgroundColor : {
        "primary": "var(--background-color)",
      },
      textColor : {
        "primary": "var(--text-color)",
      },
    },
  },
  plugins: [],
}
export default config
