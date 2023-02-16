/* -------------------------------- Clase 01 -------------------------------- */
const inciarJuego = () => {

    // Saludamos al  usuario
    alert('Bienvenido al Juego de Piedra Papel o Tijera');
    // Soliciatemos el nombre del usuario
    const nombre = prompt('Ingrese su nombre');

    const validateName = (name) => {
        const regex = /^[a-zA-Z ]+$/;
        return regex.test(name) && name.length >= 3 && !/\d/.test(name)
    }

    if (validateName(nombre)) {

        console.log('-----------------------------');
        console.log('El nombre es ' + nombre + ' LINEA 16');
        console.log('-----------------------------');

        return nombre.toUpperCase()
        
    }

    inciarJuego()
}

/* --- Creamos la variable nombre Global para guardar el dato del jugador --- */
let nombre = inciarJuego();

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar la funcion de iniciarJuego(), validar si ingresa un dato válido como nombre.
// 2- Si no ingresa un texto, o tiene menos de 3 caracteres debemos volverle a pedir que lo ingrese.
// 3- Finalmente el nombre devuelto debe estar todo en mayúsculas.