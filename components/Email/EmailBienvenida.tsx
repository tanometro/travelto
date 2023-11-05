import { BASE_FRONT_URL, baseURL } from "@/constant";

interface EmailTemplateProps {
    firstName: string;
}

export const EmailBienvenida: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
}) => (
    <div>
        <h1>Hola {firstName}!</h1>
        <p>Te damos las gracias por registrarte en travel to</p>
        <button>
            <a href={BASE_FRONT_URL}> Explora el mundo</a>
        </button>
    </div>
);
