/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    
    var importe;
    var descuento;
    var resultado;
    descuento = 25
    
    importe = document.getElementById ("importe").value;

    importe = parseInt (importe);


    resultado = descuento/100*importe ;

    document.getElementById("resultado").value=resultado;
    
    resultado = parseInt(resultado);
	
}
