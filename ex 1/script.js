let numero = Number(prompt("Digite um numero (1-7):"))

switch(numero){
    case 1:
        alert("Domingo é final de semana")
        break;
    case 2:
        alert("Segunda é dia útil")
        break;
    case 3:
        alert("Terça é dia útil")
        break;
    case 4:
        alert("Quarta é dia útil")
        break;
    case 5:
        alert("Quinta é dia útil")
        break;
    case 6:
        alert("Sexta é dia útil")
        break;
    case 7:
        alert("Sábado é final de semana")
        break;
    default:
        alert("Número inválido")
        break;
}