const prompt=require("prompt-sync")();
/*Desarrollar un algoritmo que permita ingresar la cantidad de hijos de N personas de una empresa, donde ninguno de ellos
 es pareja de otro, validando que este valor no sea negativo. Se declararán las variables junto con su tipo y ámbito bloque.
 Por tanto, se pedirá el número de personas, cada pareja sólo cuenta una, y a continuación, se solicitará el número de hijos
  por cada persona. Luego mostrar un cuadro resumen con la cantidad de personas que tienen hijos y los que no. Además, mostrar
   el promedio de hijos por persona, número máximo de hijos, el número mínimo de hijos. */
let totalPersonas = Number(prompt('Introduzca el número de personas (cada pareja cuenta una): '));


let cantidadPersonasConHijos = 0;
let cantidadPersonasSinHijos = 0;


let minimoHijos = 0;
let maximoHijos = 0;
let sumaHijos = 0;


if (totalPersonas > 0) {


    for (let persona = 1; persona <= totalPersonas; persona++) {


        let hijos = Number(prompt(`¿Cuántos hijos tiene la persona ${persona}?: `));


        while (hijos < 0 || isNaN(hijos)) {
            console.log("No se puede ingresar un número negativo o inválido.");
            hijos = Number(prompt(`Ingrese nuevamente la cantidad de hijos para la persona ${persona}: `));
        }


        if (hijos === 0) {
            cantidadPersonasSinHijos++;
        } else {
            cantidadPersonasConHijos++;
        }


        
        if (persona === 1) {
            minimoHijos = hijos;
            maximoHijos = hijos;
        } else {
            if (hijos < minimoHijos) minimoHijos = hijos;
            if (hijos > maximoHijos) maximoHijos = hijos;
        }


        sumaHijos += hijos;


        console.log('----------------------------------');
        console.log(`La persona ${persona} tiene ${hijos} hijo(s).`);
        console.log('----------------------------------');
    }


    console.log();
    console.log(`Personas con hijos: ${cantidadPersonasConHijos}`);
    console.log(`Personas sin hijos: ${cantidadPersonasSinHijos}`);
    console.log(`Promedio de hijos: ${sumaHijos / totalPersonas}`);
    console.log(`Máximo número de hijos: ${maximoHijos}`);
    console.log(`Mínimo número de hijos: ${minimoHijos}`);
    console.log();


} else {
    console.log("Número de personas inválido. Debe ser mayor que 0.");
}

