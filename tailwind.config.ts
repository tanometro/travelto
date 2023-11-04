import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'title-color': 'var(--title-color), hsl(0, 0%, 95%)',
      },
      fontFamily: {
        'second-font': 'var(--second-font) "Montserrat", sans-serif"',
      },
      fontWeight: {
        'semi-bold': 'var(--font-semi-bold) 600',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  
};
export default config;
