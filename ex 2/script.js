let turno = prompt("Qual turno você estuda? (M - matutino | N - noturno | V - vespertino")

switch(turno){
    case "M":
        alert("Bom dia")
        break;
    case "N":
        alert("Boa noite")
        break;
    case "V":
        alert("Boa tarde")
        break;
    default:
        alert("Valor inválido")
        break;
}