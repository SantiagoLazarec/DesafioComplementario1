
let numero1;
let numero2; 
let numero3;
let operador;
do {
    numero1 = parseFloat(prompt("Ingrese un numero"))
    operador = prompt("Ingrese una operacion matematica (+,-,/,*)")
    numero2 = parseFloat(prompt("Ingrese otro numero"))
    operador = prompt("Ingrese una operacion matematica (+,-,/,*)")
    numero3 = parseFloat(prompt("Ingrese otro numero"))
    operador = prompt("Ingrese una operacion matematica (+,-,/,*)")
} while ((isNaN(numero1) || isNaN(numero2) || isNaN(numero4)) || (numero2 === 0 && operador == "/")) 

console.log(numero1 + numero2 + numero3) 
console.log(numero1 - numero2 - numero3)
console.log(numero1 * numero2 * numero3)
console.log(numero1 / numero2 / numero3) 
console.log(numero1 + numero2 - numero3) 
console.log(numero1 + numero2 * numero3)
console.log(numero1 + numero2 / numero3)
console.log(numero1 - numero2 + numero3)
console.log(numero1 - numero2 * numero3) 
console.log(numero1 - numero2 / numero3)
console.log(numero1 * numero2 + numero3)
console.log(numero1 * numero2 - numero3) 
console.log(numero1 * numero2 / numero3) 
console.log(numero1 / numero2 + numero3)
console.log(numero1 / numero2 - numero3)
console.log(numero1 / numero2 * numero3)
