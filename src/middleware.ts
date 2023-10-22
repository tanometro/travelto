export { default } from "next-auth/middleware"

//aca van las rutas a las que no puede acceder el usuario
export const config = { matcher: ["/pepe"] }