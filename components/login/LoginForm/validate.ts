export default function validate(email: string, password: string) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errores: string = "";
    if (!re.test(email)) {
        errores += "Invalid email error";
    }
    if (!password || password.length < 6 || password.length > 20) {
        errores += "*Error the password must be greater than 6 characters and less than 20";
    }

    return (errores);
}


