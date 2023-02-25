
const inciarJuego = () => {

    const nombre = prompt('Ingrese su nombre');

    const validateName = (name) => {
        const regex = /^[a-zA-Z ]+$/;
        return regex.test(name) && name.length >= 3 && !/\d/.test(name)
    }

    if (validateName(nombre)) return nombre.toUpperCase()

    inciarJuego()
}

