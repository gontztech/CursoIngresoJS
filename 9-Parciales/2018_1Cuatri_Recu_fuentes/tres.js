function mostrar()
{

    var precio=prompt("ingrese el precio");
    var porcentajeDescuento=prompt("ingrese el descuento");
    var precioConDescuento;

    precio=parseInt(precio);
    porcentajeDescuento=parseInt(porcentajeDescuento);

    precioConDescuento=( precio-   (precio*porcentajeDescuento /100 )  );

    alert(" el precio con descuento es de  " +precioConDescuento + " $ " )

    document.getElementById("elPrecioFinal").value=precioConDescuento;


}
