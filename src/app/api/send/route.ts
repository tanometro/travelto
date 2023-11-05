import { EmailBienvenida } from '@/components/Email/EmailBienvenida';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request): Promise<NextResponse> {

    const newUser = await request.json();

    if (!newUser.email) return NextResponse.json({ error: "no se encontraron datos" });
    try {
        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: [newUser.email],
            subject: 'Bienvenido a travelto',
            react: EmailBienvenida({ firstName: newUser.name }),
            text: "",
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
