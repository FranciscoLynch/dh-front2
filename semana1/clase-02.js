const opciones = ['Piedra', 'Papel', 'Tijera']

const jugadaUsuario = () => {

    let eleccion = 0

    do {

        eleccion = parseInt(prompt('Ingrese: \n 1 = Piedra \n 2 = Papel \n 3 = Tijera'))

        console.log('la eleccion es ', eleccion)

    } while (isNaN(eleccion) || (eleccion < 1 || eleccion > 3))

    console.log('la eleccion del jugador es', opciones[eleccion - 1])

    return eleccion
}

const jugadaPC = () => {

    const eleccionPC = Math.floor(Math.random() * (3 - 1 + 1)) + 1

    console.log('La eleccion de la computadora es', eleccionPC)

    console.log('La eleccion de la computadora es', opciones[eleccionPC - 1])

    return eleccionPC

}

// const opciones = ['Piedra', 'Papel', 'Tijera']
//                      1         2         3
const compararJugadas = (jugadaUsuario, jugadaPC) => {

    const eleccionJugador = jugadaUsuario
    const eleccionPC = jugadaPC

    if (eleccionJugador === eleccionPC) return '¡Empate!'

    if ((eleccionJugador === 1 && eleccionPC === 3) || (eleccionJugador === 2 && eleccionPC === 1) || (eleccionJugador === 3 && eleccionPC === 2)) return '¡Ganaste :D!'

    if ((eleccionPC === 1 && eleccionJugador === 3) || (eleccionPC === 2 && eleccionJugador === 1) || (eleccionPC === 3 && eleccionJugador === 2)) return '¡Perdiste D:!'

}

console.log(compararJugadas(jugadaUsuario(), jugadaPC()))








