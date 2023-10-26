import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'adminDashBoard': 'url("https://s0.smartresize.com/wallpaper/140/409/HD-wallpaper-the-colosseum-the-amphitheater-people-colosseum-rome-italy.jpg")',
        'usersCard': 'url("https://thumbs.dreamstime.com/z/imagen-vertical-del-viajero-femenino-joven-que-se-sienta-al-borde-de-rocas-altas-monta%C3%B1as-en-fondo-el-hacer-excursionismo-la-155501453.jpg?w=576")',
        'attractionsCard': 'url("https://i.pinimg.com/originals/d7/8e/ef/d78eef9e26ff5d3b4f69a649ab66ffa3.jpg")',
        'locationsCard': 'url("https://w0.peakpx.com/wallpaper/964/80/HD-wallpaper-paisaje-amanecer-sol.jpg")',
      },
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
  plugins: [],
  
};
export default config;
