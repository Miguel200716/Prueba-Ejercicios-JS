const prompt = require("prompt-sync")();
/*Escribe una función en que dibuje una pirámide invertida en pantalla como la de la figura. La altura se pasará como parámetro.
 Si se pasa una altura =0 o negativa, la función devolverá –1; en caso contrario devolverá 0 (éxito) y pintará la pirámide. Ejemplo
 altura 5:*/
let altura = prompt('Introduzca una altura: ');
PiramideInvertida(altura);


function PiramideInvertida(altura) {


    let ancho = altura;


    if (altura > 0) {
        console.log("0, éxito");
        console.log(); // Salto de línea


        for (let fila = 1; fila <= altura; fila++) {


            let espacios = "";
            let estrellas = "";


            for (let esp = 1; esp < fila; esp++) {
                espacios += " ";
            }


            for (let est = 1; est < ancho * 2; est++) {
                estrellas += "*";
            }


            console.log(espacios + estrellas);
            ancho--;
        }


    } else {
        console.log(-1);
    }


    console.log(); // Salto final
}
