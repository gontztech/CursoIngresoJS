/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var importe;
    var aumento;
    var resultado;
    aumento = 10
    
    importe = document.getElementById ("sueldo").value;

    importe = parseInt (importe);


    resultado = aumento*importe/100+importe

    document.getElementById("resultado").value=resultado;
    
    resultado = parseInt(resultado);


   
    
	
}
