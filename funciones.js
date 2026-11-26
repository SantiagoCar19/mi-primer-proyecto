/*function esMayorDeEdad (edad) {
    a = true;
    if (edad >= 18) {
        a = true;
    } else {
        a = false;
    }
    return a;
}
*/    

function esMayorDeEdad (edad) {
    let b = edad >= 18;
    return b;
}

function describirPersona (nombre, edad){
    return nombre + " tiene "+ edad + " años";
}

function clasificarPersona(nombre, edad){
    esMayorDeEdad(edad);
    
    return nombre 
}

console.log(esMayorDeEdad(12));

console.log(describirPersona("Santiago", 25));

