export default function registerValidate(name: string, email: string, password: string, checkPassword: string, dni: string) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errores: string[] = [];
    if (!re.test(email)) {
        errores.push("Email invalido")
    }
    if (!password || password.length < 6 || password.length > 20) {
        errores.push("Error la contraseña debe contener al menos 6 caracteres y menos de 20")
    }
    if (password !== checkPassword) {
        errores.push("Error las contraseñas no coinciden")
    }
    if (name.length > 60) {
        errores.push("Error el nombre no puede contener mas de 100 caracteres");
    }

    name.split(/[ ,]+/).forEach((element) => {
        if (element.length > 23)
            errores.push("Error el nombre es demasiado largo");
    });


    return ([...errores]);
}


