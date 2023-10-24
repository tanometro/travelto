export default function validate(name: string, email: string, password: string) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errores: string[] = [];
    if (!re.test(email)) {
        errores.push("Invalid email error")
    }
    if (!password || password.length < 6 || password.length > 20) {
        errores.push("Error the password must be greater than 6 characters and less than 20")
    }

    return ([...errores]);
}