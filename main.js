const prompt = require("prompt-sync")();

// // Diseñar el pseudocódigo de un programa que sume dos números leídos por pantalla y muestre el resultado por terminal.

// let num1 = Number(prompt("Di un número "))
// let num2 = Number(prompt("Di otro número "))

// console.log(num1 + num2)

// // Hacer el pseudocódigo de un programa que permita leer 2 números diferentes y nos diga cual es el mayor de los 2 números.

// let num1 = Number(prompt("Di un número "));
// let num2 = Number(prompt("Di otro número "));

// while (num1 == num2) {
//   num2 = Number(prompt("El segundo número no puede ser igual que el primero "));
// }

// if (num1 > num2) {
//   console.log(`El primer número, ${num1}, es mayor que el segundo, ${num2}`);
// } else {
//   console.log(`El segundo número, ${num2}, es mayor que el primero, ${num1}`);
// }

// // Crear el pseudocódigo de un programa que almacene 3 números en 3 variables A, B y C. El diagrama debe decidir cuál es el mayor y cuál es el menor.

// let num1 = Number(prompt("Di un número "));
// let num2 = Number(prompt("Di otro número "));

// while (num1 == num2) {
//   num2 = Number(prompt("El segundo número no puede ser igual que el primero"));
// }

// let num3 = Number(prompt("Di un último número "));

// while (num1 == num3 || num2 == num3) {
//   num3 = Number(
//     prompt(
//       "El tercer número debe ser distinto a los otros dos, vuelve a introducirlo "
//     )
//   );
// }

// if (num1 > num2 && num1 > num3) {
//   console.log(`${num1} es el mayor`);
//   if (num2 > num3) {
//     console.log(`${num3} es el menor`);
//   } else {
//     console.log(`${num2} es el menor`);
//   }
// } else if (num2 > num1 && num2 > num3) {
//   console.log(`${num2} es el mayor`);
//   if (num3 > num1) {
//     console.log(`${num1} es el menor`);
//   } else {
//     console.log(`${num3} es el menor`);
//   }
// } else {
//   console.log(`${num3} es el mayor`);
//   if (num2 > num1) {
//     console.log(`${num1} es el menor`);
//   } else {
//     console.log(`${num2} es el menor`);
//   }
// }

// // Realizar el pseudocódigo de un programa que nos calcule la hipotenusa de un triángulo rectángulo, conocidos sus dos catetos.

// let cateto1 = Number(prompt("Di el primer cateto "))
// let cateto2 = Number(prompt("Di el segundo cateto "))

// let hipotenusa = Math.sqrt(cateto1**2 + cateto2**2).toFixed(2)

// console.log(hipotenusa)

// // Realiza el pseudocódigo de un programa que sume 10 números leídos por teclado.

// let suma = 0;

// for(let i = 0; i < 10; i++){
//     let num = Number(prompt("Di un número "))
//     suma += num
// }

// console.log(suma)

// // Modificar el anterior para que permita sumar N números. El valor de N se debe leer previamente por teclado.

// let suma = 0
// let cantidadNumeros = Number(prompt("¿Cuántos números quieres sumar? "))

// for(let i = 0; i < cantidadNumeros; i++){
//     let num = Number(prompt("Di un número "))
//     suma += num
// }

// console.log(suma)

// // Hacer el pseudocódigo de un programa que permita escribir los 100 primeros pares.

// MANERA 1 - CONSUME MÁS RECURSOS
// for(let i = 2; i <= 200; i++){
//     if(i%2 === 0){
//         console.log(i)
//     }
// }

// MANERA 2

// for(let i = 2; i <= 200; i+=2){
//     console.log(i)
// }

// Hacer el código de un programa que pida por pantalla cuántos pares quiere sumar el usuario y lo haga (EJERCICIO EXTRA QUE ME HABÍA INVENTADO)

// let cantidad = Number(prompt("¿Cuántos pares quieres sumar? "));
// let suma = 0;

// // // MANERA 1

// for (let i = 2; i <= cantidad * 2; i++) {
//     if(i % 2 === 0){
//         //  suma = suma + i
//         suma += i
//     }
// }

// // MANERA 2

// for (let i = 2; i <= cantidad * 2; i += 2) {
//   // suma = suma + i
//   suma += i;
// }

// console.log(suma);

// // Diseña el pseudocódigo necesario para sumar los N primeros impares. Realizar después uno que haga lo mismo con los pares y otro con los múltiplos de 3. Crea un menú para ello.

// console.log("Opciones disponibles:");
// console.log("1. Sumar impares");
// console.log("2. Sumar pares");
// console.log("3. Sumar múltiplos de 3");

// let opcion = Number(prompt("¿Qué operación quieres hacer? "));
// let amount = prompt("¿Cuántos números quieres sumar? ");

// const sumaPares = (cantidad) => {
//   let suma = 0;
//   for (let i = 2; i <= cantidad * 2; i += 2) {
//     suma += i;
//   }
//   return suma;
// };

// const sumaImpares = (cantidad) => {
//   let suma = 0;
//   for (let i = 1; i < cantidad * 2; i += 2) {
//     suma += i;
//   }
//   return suma;
// };

// const sumaMultiplos = (cantidad, multiplo) => {
//   let suma = 0;
//   for (let i = multiplo; i <= cantidad * multiplo; i += multiplo) {
//     suma += i;
//   }
//   return suma;
// };

// switch (opcion) {
//   case 1:
//     console.log(sumaImpares(amount));
//     break;
//   case 2:
//     console.log(sumaPares(amount));
//     break;
//   case 3:
//     console.log(sumaMultiplos(amount, 3));
//     break;
//   default:
//     console.log("No es una opción válida");
// }

// // Hacer el pseudocódigo de un programa que simule un reloj.

// let horas = 23
// let minutos = 58
// let segundos = 0

// while(horas < 24){
//     segundos++
//     if(segundos == 60){
//         segundos = 0
//         minutos++
//     }
//     if(minutos == 60){
//         minutos = 0
//         horas++
//     }
//     // if(horas == 24){
//     //     horas = 0
//     // }
//     console.log(`${horas}:${minutos}:${segundos}`)
// }

// // Define un diagrama de flujo que lea N números pedidos al usuario, calcule y escriba la suma de los pares y el producto de los impares.

// let cantidad = Number(prompt("¿Cuántos números quieres analizar? "))
// let suma = 0
// let producto = 1
// for(let i = 0; i < cantidad; i++){
//     let num = Number(prompt("Di un número "))
//     if(num % 2 === 0){
//         // suma = suma + num
//         suma += num
//         console.log(`SUMA = ${suma}`)
//     } else {
//         // producto = producto * num
//         producto *= num
//         console.log(`PRODUCTO = ${producto}`)
//     }
// }

// console.log(`La suma de los pares es ${suma} y el producto de los impares es ${producto}`)

// // Un año es bisiesto si es múltiplo de 4, exceptuando los múltiplos de 100, que sólo son bisiestos cuando son múltiplos además de 400, por ejemplo, el año 1900 no fue bisiesto, pero el año 2000 sí lo será. Hacer el pseudocódigo de un programa que dado un año A nos diga si es o no bisiesto.

// const esBisiesto = (year) => {
//   if (year % 4 === 0) {
//     if (year % 100 == 0 && year % 400 == 0) {
//       return true;
//     } else if (year % 100 == 0) {
//       return false;
//     }
//     return true;
//   }
// };

// let year = prompt("Di un año y te diré si fue o será bisiesto ");

// console.log(esBisiesto(year));

// // Realiza el pseudocódigo de un programa que simule una caja registradora.

// let cantidad = Number(prompt("Introduce la cantidad de artículos a cobrar "))

// let precioFinal = 0
// for(let i = 0; i < cantidad; i++){
//     let precioUnidad = Number(prompt("Introduce el precio del artículo "))
//     precioFinal += precioUnidad
// }

// let dinero = Number(prompt("¿Con cuánto dinero vas a pagar? "))

// if(precioFinal > dinero) {
//     console.log('Lo siento, no es suficiente para pagar la compra.')
// } else {
//     let cambio = dinero - precioFinal
//     console.log(`Compra realizada, te devuelvo ${cambio} €`)
// }

// // Dadas dos variables numéricas A y B, que el usuario debe teclear, se pide realizar un algoritmo que intercambie los valores de ambas variables y muestre cuánto valen al final las dos variables (recuerda la asignación).

// let a = Number(prompt("Introduce el número A "))
// console.log(`El número A es ${a}`)
// let b = Number(prompt("Introduce el número B "))
// console.log(`El número B es ${b}`)

// let aux = a
// console.log("_______________________")
// console.log(a)
// console.log(aux)
// console.log(b)
// console.log("_______________________")
// a = b
// console.log("_______________________")
// console.log(a)
// console.log(aux)
// console.log(b)
// console.log("_______________________")
// b = aux
// console.log("_______________________")
// console.log(a)
// console.log(aux)
// console.log(b)
// console.log("_______________________")

// console.log("-------------------------------")
// console.log("¡Intercambio completado!")
// console.log(`El número A es ${a}`)
// console.log(`El número B es ${b}`)

// // Algoritmo que lea dos números, calculando y escribiendo el valor de su suma, resta, producto y división.

// let num1 = Number(prompt("Di un número "))
// let num2 = Number(prompt("Di otro número "))

// let suma = num1 + num2
// let resta = num1 - num2
// let multi = num1 * num2
// let divi = num1 / num2

// console.log(`Los números proporcionados eran ${num1} y ${num2}`)
// console.log(`La suma de ambos es ${suma}`)
// console.log(`La resta de ambos es ${resta}`)
// console.log(`La multiplicación de ambos es ${multi}`)
// console.log(`La división de ambos es ${divi}`)

// // Algoritmo que lea dos números y nos diga cuál de ellos es mayor o bien si son iguales (recuerda usar la estructura condicional SI).

// let num1 = Number(prompt("Di un número "))
// let num2 = Number(prompt("Di otro número "))

// if(num1 > num2) {
//     console.log(`El primer número es mayor que el segundo`)
// } else if (num1 < num2) {
//     console.log(`El primer número es mayor que el segundo`)
// } else {
//     console.log(`Ambos números son iguales`)
// }

// // Algoritmo que lea tres números distintos y nos diga cuál de ellos es el mayor (recuerda usar la estructura condicional Si y los operadores lógicos).

// let num1 = Number(prompt("Di un número "));
// let num2 = Number(prompt("Di otro número "));

// while (num1 == num2) {
//   num2 = Number(prompt("El segundo número no puede ser igual que el primero"));
// }

// let num3 = Number(prompt("Di un último número "));

// while (num1 == num3 || num2 == num3) {
//   num3 = Number(
//     prompt(
//       "El tercer número debe ser distinto a los otros dos, vuelve a introducirlo "
//     )
//   );
// }

// if(num1 > num2 && num1 > num3){
//     console.log(`${num1} es el mayor`)
// } else if(num2 > num1 && num2 > num3){
//     console.log(`${num2} es el mayor`)
// } else {
//     console.log(`${num3} es el mayor`)
// }

// // Diseñar un algoritmo que pida por teclado tres números; si el primero es negativo, debe imprimir el producto de los tres y si no lo es, imprimirá la suma.

// let num1 = Number(prompt("Di un número "));
// let num2 = Number(prompt("Di otro número "));
// let num3 = Number(prompt("Di un último número "));

// if(num1 < 0){
//     console.log(num1 * num2 * num3)
// } else {
//     console.log(num1 + num2 + num3)
// }

// // Realizar un algoritmo que lea un número por teclado. En caso de que ese número sea 0 o menor que 0, se saldrá del programa imprimiendo antes un mensaje de error. Si es mayor que 0, se deberá calcular su cuadrado y la raíz cuadrada del mismo, visualizando el número que ha tecleado el usuario y su resultado (“Del número X, su potencia es X y su raíz X”). Para calcular la raíz cuadrada se puede usar la función interna RAIZ(X) o con una potencia de 0,5.

// let num1 = Number(prompt("Di un número "));

// if (num1 <= 0) {
//   console.log("Error");
// } else {
//   let cuadrado = num1 ** 2;
//   let raiz = Math.sqrt(num1);

//   console.log(
//     `Del número ${num1}, su cuadrado es ${cuadrado} y su raíz cuadrada es ${raiz}`
//   );
// }

// // Un colegio desea saber qué porcentaje de niños y qué porcentaje de niñas hay en el curso actual. Diseñar un algoritmo para este propósito (recuerda que para calcular el porcentaje puedes hacer una regla de 3).

// let boys = Number(prompt("¿Cuántos niños hay? - "))
// let girls = Number(prompt("¿Cuántas niñas hay? - "))

// let porcentajeChicos = boys * 100 / (boys + girls)

// console.log(`Hay un ${porcentajeChicos.toFixed(2)} % de chicos y un ${100 - porcentajeChicos.toFixed(2)} % de chicas`)

// // Una tienda ofrece un descuento del 15% sobre el total de la compra durante el mes de octubre. Dado un mes y un importe, calcular cuál es la cantidad que se debe cobrar al cliente.

// let mes = prompt("¿En qué mes estamos? - ");
// let total = Number(prompt("¿Cuánto es el importe total de la compra? - "));

// if (mes.toLowerCase() == "octubre") {
//   total -= total * 0.15;
// }

// console.log(`El importe final a cobrar es ${total}`);

// ------------------------------------

// // Realizar un algoritmo que, dado un número entero, visualice en pantalla si es par o impar. En el caso de ser 0, debe visualizar “el número no es par ni impar” (para que un número sea par, se debe dividir entre dos y que su resto sea 0).

// let num = parseInt(prompt("Introduce un número entero - "))

// if(num === 0){
//     console.log("El número no es par ni impar")
// } else if (num % 2 === 0) {
//     console.log("El número es par")
// } else {
//     console.log("El número es impar")
// }

// // Modificar el algoritmo anterior, de forma que, si se teclea un cero, se vuelva a pedir el número por teclado (así hasta que se teclee un número mayor que cero) (recuerda la estructura mientras).

// let num = parseInt(prompt("Introduce un número entero - "))

// while(num === 0){
//     num = parseInt(prompt("El número no puede ser cero - "))
// }

// if (num % 2 === 0) {
//     console.log("El número es par")
// } else {
//     console.log("El número es impar")
// }

// // Algoritmo que nos diga si una persona puede acceder a cursar un ciclo formativo de grado superior o no. Para acceder a un grado superior, si se tiene un título de bachiller, en caso de no tenerlo, se puede acceder si hemos superado una prueba de acceso.

// console.log("¿Tienes título de Bachillerato?");
// console.log("1. Sí");
// console.log("2. No");

// let opcion = Number(prompt("Escoge una opción - "));

// if (opcion === 1) {
//   console.log("Puedes acceder al ciclo.");
// } else {
//   console.log("¿Has realizado prueba de acceso?");
//   console.log("1. Sí");
//   console.log("2. No");

//   let opcion = Number(prompt("Escoge una opción - "));
//   if (opcion === 1) {
//     let nota = Number(prompt("¿Qué nota has obtenido en la prueba de acceso?"));
//     if (nota >= 5) {
//       console.log("Puedes acceder al ciclo.");
//     } else {
//       console.log("Lo sentimos, no puedes acceder al ciclo.");
//     }
//   } else {
//     console.log("Lo sentimos, no puedes acceder al ciclo.");
//   }
// }

// // Desarrollar un algoritmo que nos calcule el cuadrado de los 9 primeros números naturales (recuerda la estructura desde-hasta).

// for(let i = 1; i <= 9; i++){
//     console.log(i ** 2)
// }

// // Se pide representar el algoritmo que nos calcule la suma de los N primeros números naturales. N se leerá por teclado (no tenemos por qué llamar a la variable N, podemos llamarla como queramos).

// let cantidad = Number(prompt("¿Cuántos números quieres sumar? - "))
// let suma = 0
// for(let i = 0; i < cantidad; i++){
//     suma += i
// }

// console.log(suma)

// // Se pide representar el algoritmo que nos calcule la suma de los N primeros números pares. Es decir, si insertamos un 5, nos haga la suma de 6+8+10+12+14.

// let cantidad = Number(prompt("¿Cuántos pares quieres sumar?"))
// let comienzo = Number(prompt("¿A partir de qué número?"))
// let suma = 0
// for(let i = comienzo; i <= comienzo + cantidad * 2; i++){
//     if(i % 2 === 0){
//         suma += i
//     }
// }

// console.log(suma)

// // Dada una secuencia de números leídos por teclado, que acabe con un –1, por ejemplo: 5,3,0,2,4,4,0,0,2,3,6, 0,...1; Realizar el algoritmo que calcule la media aritmética. Suponemos que el usuario no insertará números negativos.

// let num = Number(prompt("Introduce un número - "))
// let numeros = []
// let suma = 0

// while(num !== -1){
//     numeros.push(num)
//     suma += num
//     num = Number(prompt("Introduce otro número - "))
// }

// let media = suma / numeros.length

// console.log(media)

// // Teniendo en cuenta que la clave es “eureka”, escribir un algoritmo que nos pida una clave. Solo tenemos 3 intentos para acertar, si fallamos los 3 intentos nos mostrará un mensaje indicándonos que hemos agotado esos 3 intentos (Recomiendo utilizar un interruptor). Si acertamos la clave, saldremos directamente del programa.

// let key = "eureka"
// let intentos = 1
// let claveUsuario = prompt("Introduzca la contraseña - ")

// while(intentos < 3 && claveUsuario !== key){
//         claveUsuario = prompt("Introduzca la contraseña - ")
//         intentos++
// }

// if(intentos === 3 && key !== claveUsuario){
//     console.log("Acceso denegado")
// } else {
//     console.log('¡Enhorabuena!')
// }

// Algoritmo que lea números enteros hasta teclear 0, y nos muestre el máximo, el mínimo y la media de todos ellos. Piensa cómo debemos inicializar las variables.

// let num = Number(prompt("Introduce un número - "))
// let numeros = []

// while(num !== 0){
//     numeros.push(num)
//     num = Number(prompt("Introduce otro número - "))
// }
// console.log(numeros)

// let mayor = numeros[0]
// let menor = numeros[0]
// let suma = 0

// for(let i = 1; i < numeros.length; i++){
//     if(numeros[i] > mayor){
//         mayor = numeros[i]
//     }

//     if(numeros[i] < menor){
//         menor = numeros[i]
//     }

//     suma+=numeros[i]
// }

// console.log(`El número mayor es ${mayor}, el menor es ${menor} y la media es ${suma/numeros.length}`)

// Algoritmo que visualice la cuenta de los números que son múltiplos de 2 o de 3 que hay entre 1 y 100.

