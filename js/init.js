//variables 
let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;

// funcion asignar textos 
function asignarTexto(elemento, texto){
    let elementohtml = document.querySelector(elemento);
    elementohtml.innerHTML = texto;
    return;
}

//funcion para parametros iniciales
function condicionesIniciales(){
    limpiarCaja()
    asignarTexto('h1', '¡Adivina el numero!');
    asignarTexto('p',`Indica Un Número de 1 a ${numeroMaximo}`);
    numeroSecreto = generarNumSecreto();
    intentos = 1 ;
}
//funcion para limpiar el imput
function limpiarCaja(){
    document.getElementById('valorUsuario').value = '';
}

// funcion boton de intento 
function intento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroUsuario === numeroSecreto){
        asignarTexto('p',`Acertaste el numero Secreto en ${intentos} ${(intentos === 1) ? 'intento': 'intentos'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{

        // verificacion de numeros 
        if(numeroUsuario > numeroSecreto){
            asignarTexto('p','El numero es menor');
        }else{
            asignarTexto('p','El numero es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    
    return numeroUsuario;
}



//funcion para crear un numero aleatorio entre 1 y 10
function generarNumSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numerosSorteados);
    //Si ya estan todos los numeros sorteados
    if(numerosSorteados.length == numeroMaximo){
        asignarTexto('p','Ya se sortearon todos los numeros de la lista')
    }
    else{
        if(numerosSorteados.includes(numeroGenerado)) {
            return generarNumSecreto();
        }
        else{
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

//funcion para reiniciar el juego 
function reiniciarJuego(){
    //Limpiar el imput
    //indicar mensaje de inicio
    //generar numero aleatorio
    //inicializar intentos
    condicionesIniciales();
    //deshabilitar boton nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');
}




condicionesIniciales();
