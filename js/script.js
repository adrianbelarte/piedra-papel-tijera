//declarar variables
const puntosJugador = document.getElementById(`contador-usuario`)
const puntosMaquina = document.getElementById(`contador-ordenador`);
const jugadas = [`piedra`,`papel`,`tijera`];
let contadorJugador = 0;
let contadorOrdenador = 0;


// coger el dato del boton
const piedra = document.querySelectorAll(`.boton-jugada`)[0];
const papel = document.querySelectorAll(`.boton-jugada`)[1];
const tijera = document.querySelectorAll(`.boton-jugada`)[2];


piedra.addEventListener(`click`,function(){
    const jugadaPlayer= `piedra`;
    const jugadaOrdenador = JOrdenador();
    resultado(jugadaPlayer,jugadaOrdenador)
})

papel.addEventListener(`click`,function(){
    const jugadaPlayer= `papel`;
    const jugadaOrdenador = JOrdenador();
    resultado(jugadaPlayer,jugadaOrdenador)
})

tijera.addEventListener(`click`,function(){
    const jugadaPlayer= `tijera`;
    const jugadaOrdenador = JOrdenador();
    resultado(jugadaPlayer,jugadaOrdenador)
})

function JOrdenador() {
    const numero = Math.floor (Math.random() * 3)
    const  jugada =  jugadas[numero];
    return jugada;
}

function resultado(jugador, ordenador){
   if(((jugador === `piedra` && ordenador === `piedra`)
    ||(jugador === `papel` && ordenador === `papel`))
    ||(jugador === `tijera` && ordenador === `tijera`)){
        console.log(`empate`)
   }else if(((jugador === `piedra` && ordenador === `tijera`)
    || (jugador === `papel` && ordenador === `piedra`))
    || (jugador === `tijera`&& ordenador === `papel`)){
        console.log(`ganaste`)
        contadorJugador += 1
        console.log(contadorJugador)
        puntosJugador.innerText = `Tus puntos: ${contadorJugador}`
   }else{
        contadorOrdenador += 1
        console.log(contadorOrdenador)
        puntosMaquina.innerText = `Tus puntos: ${contadorOrdenador}`
   }
}

