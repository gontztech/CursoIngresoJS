function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje;
switch(mesDelAño) {
    case ("Enero"):
    mensaje = "Este mes tiene 30 o más días.";

    break;
    
    case ("Febrero"):

    mensaje = "Este mes no tiene más de 29 días.";

    break;

    case ("Marzo"):
    case ("Abril"):
    case ("Mayo"):
    case ("Junio"):
    case ("Agosto"):
    case ("Septiembre"):
    case ("Octubre"):
    case ("Noviembre"):
    case ("Diciembre"):

    mensaje = "Este mes tiene 30 o más días.";

    break;
    default:
}
    

//alert (mesDelAño);

alert (mensaje);
	
	


}//FIN DE LA FUNCIÓN