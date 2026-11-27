function esMayorDeEdad (edad) {
    let booleano = edad >= 18;
    return booleano;
}

function describirPersona (nombre, edad){
    return nombre + " tiene "+ edad + " años";
}

function clasificarPersona(nombre, edad){
    if(esMayorDeEdad(edad)){
        let respuesta = nombre + " es mayor de edad";
    } else {
        respuesta = nombre + " es menor de edad";
    } 
    return respuesta;
}

console.log(esMayorDeEdad(12));

console.log(describirPersona("Santiago", 25));

console.log(clasificarPersona("santiago", 17));