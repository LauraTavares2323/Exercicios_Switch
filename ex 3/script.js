let numero1 = Number(prompt("Digite um número"))
let numero2 = Number(prompt("Digite outro número"))

let calculo = Number(prompt("Escolha uma operação \n 1- Multiplicação \n 2- Divisão \n 3- Subtração \n 4- Adição"))

let resultado

switch(calculo){
    case 1:
        resultado = numero1 * numero2
        alert(resultado)
        break;
    case 2:
        resultado = numero1 / numero2
        alert(resultado)
        break;
    case 3:
        resultado = numero1 - numero2
        alert(resultado)
        break;
    case 4:
        resultado = numero1 + numero2
        alert(resultado)
        break;
    default:
        alert("Inválido")
}