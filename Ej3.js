const prompt=require("prompt-sync")();

/*El  juego de adivinar un número. El valor a adivinar lo tendremos puesto en una variable el valor
que nosotros queramos.

El número será entre 1 y 100. El programa debe dar pistas de si el número a adivinar es mayor o menor
que el introducido.

Tendremos que hacer los siguientes subprocesos (funciones):

leerNumero(): Pide un numero y hasta que el usuario no escribe un valor entre 1 y 100,  
vuelve a pedir el valor.

comprobarValor(numeroUsuario, numeroCorrecto): comprueba si el número es correcto; éste  
devuelve un número que puede ser:  0: los dos numeros son iguales  1: el numeroUsuario es mayor que 
el numeroCorrecto  -1: el numeroUsuario es menor que el numeroCorrecto..*/

let numeroSecreto = 62;
solicitarNumero(numeroSecreto);

function solicitarNumero(numeroSecreto) {
    
    do {
       let intento = prompt('Introduce un número entre 1 y 100: ');
        intento = Number(intento); 
        if (intento > 0 && intento < 101) {
            evaluarIntento(intento, numeroSecreto);
        } else {
            console.log('Tiene que ser entre 1 y 100');
        }
    } while (intento =! numeroSecreto);
}

function evaluarIntento(intento, numeroSecreto) {
    if (intento === numeroSecreto) {
        console.log(`Bien lo has conseguido`);
        
    } else if (intento < numeroSecreto) {
        console.log(`El ${intento} es menor que el número secreto`);
        solicitarNumero(numeroSecreto);
    } else {
        console.log(`El ${intento} es mayor que el número secreto`);
        solicitarNumero(numeroSecreto);
    }
}
