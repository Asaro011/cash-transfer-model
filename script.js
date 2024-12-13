//Variables

let saldo = 1000;
const precios = document.getElementById("prices");
precios.style.display ='none';
//Funciones

function mostrarMensaje(texto) {
    const mensaje = document.querySelector(".mensaje");
    mensaje.style.display = 'block';
    mensaje.textContent = texto;

}

 //Temporizador 10 sec

function timer(){
    setTimeout(() => {
        precios.style.display = 'none';
        mostrarMensaje().style.display = 'none';
    }, 10000)

}

function extraccion() {
    //Visualizacion del contenedor "prices"
    precios.style.display = 'flex';

    //Mensaje inicial

    mostrarMensaje("Indique el monto a retirar");

    //Asignación de eventos

    const botones = precios.querySelectorAll("button")

    botones.forEach((boton) => {
        boton.onclick = () => {

            const valor = parseInt(boton.textContent); // Se obtiene los Valores declarados en los botones
            if (valor <= saldo) {
                saldo -= valor; // Le resta el valor seleccionado al saldo  
                mostrarMensaje("El nuevo saldo actual es: " + saldo + " $");
            } else {
                mostrarMensaje("Saldo insuficiente");
            }
            precios.style.display = 'none';
        }
    })
timer();
}

function deposito() {


    mostrarMensaje("Indique el monto a ingresar");

    const botones = precios.querySelectorAll("button")


    botones.forEach((boton) => {
        boton.onclick = () => {

            const valor = parseInt(boton.textContent); // Se obtiene los Valores declarados en los botones

            saldo += valor; // Le suma el valor seleccionado al saldo  

            mostrarMensaje("El nuevo saldo actual es: " + saldo + " $");
            precios.style.display = 'none';
        }


    })

    precios.style.display = 'flex';
   timer();
}

function saldoActual() {

    mostrarMensaje("El saldo actual es de: " + saldo + " $");
    precios.style.display= 'none';
    setTimeout(() => {
        mostrarMensaje().style.display = 'none';
    }, 10000)
}

function finalizarPrograma(){
    const cuerpo = document.querySelector(".principal");
    cuerpo.style.display='none';

  mostrarMensaje("Gracias por utilizar nuestros servicios");

    setTimeout(()=> {
        mostrarMensaje();
        cuerpo.style.display = 'block';
    }, 10000);
}