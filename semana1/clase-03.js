let puntajes = {
    usuario: 0,
    pc: 0
}

const nombreJugador = inciarJuego()

while (puntajes.usuario < 3 && puntajes.pc < 3) {
    const resultado = compararJugadas(jugadaUsuario(), jugadaPC())

    if (resultado === '¡Empate!') {
        alert('¡Empate!')
        console.log('empate')
    }
    if (resultado === '¡Ganaste :D!') {
        alert('¡Ganaste :D!')
        puntajes.usuario++
    }
    if (resultado === '¡Perdiste D:!') {
        alert('¡Perdiste D:!')
        puntajes.pc++
    }

    console.table(puntajes)
}

if (puntajes.usuario > puntajes.pc) alert('¡GANASTE LA PARTIDA :D!')
else alert('¡PERDISTE LA PARTIDA D:!')