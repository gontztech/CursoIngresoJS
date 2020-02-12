function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;


switch(mesDelAño) {
    case "Julio":
    case "Agosto":
         alert ("es el viernes de la jungla, a todo ojete ");
         break;

    case ("Enero"):
    case ("Febrero"):
    case ("Marzo"):
    case ("Abril"):
    case ("Mayo"):
    case ("Junio"):
         alert ("Falta para el invierno de la jungla maquina");

    break;
    default:
        alert ("Ya pasó el viernes de la jungla , te la perdiste hijo de re mil");




} 


}//FIN DE LA FUNCIÓN