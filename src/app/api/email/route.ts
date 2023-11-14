import { transporter, mailOptions } from "../../config/nodemailer";
import { NextResponse } from "next/server";


export async function POST(request): Promise<NextResponse> {

    const newUser = await request.json();

    try {
        if (!newUser.email) throw new Error("Email is required");

        await transporter.sendMail({
            ...mailOptions,
            to: `${newUser.email}`,
            subject: "Bienvenido a TravelTo",
            text: "Bienvenido a TravelTo",
            html: `<h1>Hola ${newUser.name},</h1>
            <p>Gracias por registrarte en TravelTo</p>
            <p>Tu usuario es: ${newUser.email} </p>
            <p>Visitanos nuevamente:</p>
            <p>https://travelto-front.vercel.app/</p>`
        })
        return NextResponse.json({ message: 'Mail enviado con exito' });
    } catch (error) {
        return NextResponse.json(error);
    }

}