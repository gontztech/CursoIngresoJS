
function mostrar()
{
    var ancho
    var largo
    var resultado;
    

    largo=prompt("ingrese el largo");
    ancho=prompt("ingrese el ancho");

    resultado=(2*ancho+2*largo);
    resultado=parseInt(resultado);
    ancho=parseInt(ancho);
    largo=parseInt(largo);

    alert (" el perimetro es de  " + resultado);

}

