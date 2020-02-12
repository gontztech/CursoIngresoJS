function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje;

switch(mesDelAño) {
    
    case "Enero":
    mensaje = "comienzo de año";

    break;
  
    case "Marzo":
    mensaje = "A clases";

    break;
  
    case "Julio":
    mensaje = "se vienen las fiestas";

    break;
  
    case "Diciembre":
    mensaje = "Felices Fiestas!!!";

    
    
}
alert (mensaje);






}//FIN DE LA FUNCIÓN