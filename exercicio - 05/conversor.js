const medida = parseFloat(prompt("Insira a Medida em metros: "))
const unidade = prompt (
    "Para Qual Unidade de Medida deseja Converter? "+
    "\n1 - milimetros (mm)" +
    "\n2 - centimetros (cm)" +
    "\n3 - decimetros (dm)" +
    "\n4 - decâmetros (dam)" +
    "\n5 - hectômetros (hm)" +
    "\n6 - quilometros (km)"
)
switch (unidade) {
    case "1":
        alert ("resultado: " + medida + "m = " + medida * 1000 + "mm")
        break;
    case "2":
        alert ("resultado: " + medida + "m = " + medida * 100 + "cm")
        break;
    case "3":
        alert ("resultado: " + medida + "m = " + medida * 10 + "dm")
        break;
    case "4":
        alert ("resultado: " + medida + "m = " + medida / 10 + "dam")
        break;
    case "5":
        alert ("resultado: " + medida + "m = " + medida / 100 + "hm")
        break;
    case "6":
        alert ("resultado: " + medida + "m = " + medida / 1000 + "km")
        break;
    default:
        break;
}