import { url } from 'inspector'
import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'adminDashBoard': 'url("https://s0.smartresize.com/wallpaper/140/409/HD-wallpaper-the-colosseum-the-amphitheater-people-colosseum-rome-italy.jpg")',
       
      },
    },
  },
  plugins: [],
}
export default config
