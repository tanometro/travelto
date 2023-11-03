import Link from "next/link"
export default function HotFound () {

    return (
<main className=" place-content-center">
    <p className=" text-center text-5xl justify-center">Aqui hay un Problema</p>
    <p  className=" text-center justify-center">No pudimos encontrar la pagina que estas buscando</p>
    <Link href='/' className=" text-center text-5xl justify-center"><p>Vuelve al Home</p></Link>
    <p  className=" text-center justify-center text-6xl">Porfa FrontEnds denme ESTILO :(</p>
</main>

    )
}