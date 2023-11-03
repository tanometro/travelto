export default function registerValidate(name: string, email: string, password: string, checkPassword: string, dni: string) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errores: string = "";
    if (!re.test(email)) {
        errores.concat("Email invalido")
    }
    if (!password || password.length < 6 || password.length > 20) {
        errores.concat("Error la contraseña debe contener al menos 6 caracteres y menos de 20")
    }
    if (password !== checkPassword) {
        errores.concat("Error las contraseñas no coinciden")
    }
    if (name.length > 60) {
        errores.concat("Error el nombre no puede contener mas de 100 caracteres");
    }

    name.split(/[ ,]+/).forEach((element) => {
        if (element.length > 23)
            errores.concat("Error el nombre es demasiado largo");
    });


    return (errores);
}


