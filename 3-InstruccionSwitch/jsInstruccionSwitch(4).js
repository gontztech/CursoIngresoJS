function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje;
switch (mesDelAño) {
    case ("Enero"):
    case ("Marzo"):
    case ("Mayo"):
    case ("Julio"):
    case ("Agosto"):
    case ("Octubre"):
    case ("Diciembre"):
        mensaje = "este mes tiene 31 dias";
    break;
    case ("Febrero"):
        mensaje = "este mes tiene 29 dias";
    break;

    default:
        mensaje = "este mes tiene 30 dias";

}






//alert (mesDelAño);
	alert (mensaje);
	



}//FIN DE LA FUNCIÓN