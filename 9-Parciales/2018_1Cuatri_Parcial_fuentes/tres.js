function mostrar()
{
    var precio=prompt("ingrese el precio");
    var descuento=prompt("ingrese el descuento");
    var precioFinal;



    precioFinal= (precio -  (precio*descuento/100) ) ;

    document.getElementById("elPrecioFinal").value=precioFinal

    precioFinal=parseInt(precioFinal);
    

}
