//Ejercicio  

//En este ejercicio practicarás las estructuras de control, para ello deberás crear:

//Usando un if, crear una condición que compare si la variable numeroIf es positivo, negativo, o 0.
//Pista: Los números inferiores a 0 son negativos y los superiores, positivos.
// tu codigo aqui:
console.log("Ejercicio 1 IF")
console.log("")
numeroif=2;

if (numeroif == 0) {
    console.log("El numero ingresado no tiene polaridad");
} else 
    if (numeroif > 0) {
        console.log("El numero es positivo");
    } else
        console.log("El numero es negativo");

console.log("");

//Crea un bucle While, este bucle tendrá que tener como condición que la variable numeroWhile sea inferior a 3, el bloque de código que tendrá el bucle deberá:
//Incrementar el valor de la variable en uno cada vez que se ejecute.
//Mostrarlo por pantalla cada vez que se ejecute.
//Tu codigo aqui.
console.log("Ejercicio 2 while")
console.log("")

numerowhile=1;

while (numerowhile <= 3) {
    console.log(numerowhile);
    numerowhile++;
}

console.log("");


//Para el bucle Do While, deberás crear la misma estructura que en el While, pero solo se debe ejecutar una vez.
//Tu codigo aqui.

console.log("Ejercicio 3 dowhile")
console.log("")
numerodowhile=3;

do {
    numerodowhile++;
}while (numerodowhile.lenght<=1);

console.log(numerodowhile);

console.log("");


//Para el bucle For, crea una variable numeroFor, esta variable tendrá como valor 0 y su condición será que la variable sea igual o menor que 3, se irá incrementando en 1 su valor cada vez que se ejecute y deberá mostrarse por pantalla.


console.log("Ejercicio 4 for")
console.log("")


numerofor=0;

for (var i=0;i<=3;i++) {
    console.log(numerofor)
    numerofor++;
}

console.log("");

//Por último, para el Switch, deberás crear la variable estacion, y distintos case para las cuatro estaciones del año. 
//Dependiendo del valor de la variable estacion se deberá mandar un mensaje por consola informando de la estación en la que está. 
//También habrá que poner un default para cuando el valor de la variable no sea una estación.'

console.log("Ejercicio 5 switch")
console.log("")

estacion="german";

switch (estacion) {
    case "Verano": 
        console.log("Verano");
        break;
    case "invierno":
        console.log("invierno");
        break;
    case "otoño":
        console.log("Otoño");
        break;
    case "priamvera":
        console.log("primavera");
        break;
    default:
        console.log("El dato ingresado no corresponde a una estacion del año");


}



