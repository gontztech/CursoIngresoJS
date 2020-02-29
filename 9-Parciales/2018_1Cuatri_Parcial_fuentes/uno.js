
function mostrar()
{
var reserva;
var nombreHuesped=prompt("ingrese su nombre") 
var cantidadPersonas=prompt("ingrese la cantidad de personas");
var cantidadDias;
var formaDePago;
var respuesta;
var maximoPersonas;
var maximoPersonasHuesped;
var contadorReservas;
var maximoDeDias;
var maximoDeDiasCantidadPersonas;
var contadorefete;
var contadorQR;
var contadorTarjeta;
var acumuladorDias;
var promedio;
var formaDePagoMasUsada;

acumuladorDias=0;
contadorefete=0;
contadorQR=0;
contadorTarjeta=0;
contadorReservas=0;

respuesta = "s";
while (respuesta == "s" ){
    contadorReservas ++ 
    nombreHuesped=prompt("ingrese nombre");
    while ( isNaN ( nombreHuesped ) )
    {
        nombreHuesped=prompt("ingrese nombre");
    }
    cantidadPersonas=prompt("ingrese cantidad de personas");
    cantidadPersonas=parseInt(cantidadPersonas);
    while (isNaN(cantidadPersonas)|| cantidadPersonas < 0 )
    {
        cantidadPersonas=prompt("ingrese cantidad de personas");
        cantidadPersonas=parseInt(cantidadPersonas);

    }
    formaDePago=prompt("forma de pago");
    formaDePago=parseInt(formaDePago);
    while (!isNaN(formaDePago)|| formaDePago!= "efectivo" && formaDePago != "tarjeta" && formaDePago != "qr"   )
    {
        formaDePago=prompt("forma de pago");
        formaDePago=parseInt(formaDePago);

    }
    if (contadorReservas==1|| maximoPersonas < cantidadPersonas )
    {
        maximoPersonas=cantidadPersonas;
    }
    switch(formaDePago){
        case "qr":
           contadorQR= contadorQR +1;
        break;
        case "efectivo":
           contadorefete ++;
        break;
        default:
          contadorTarjeta++;
        break;
    }
    acumuladorDias= acumuladorDias + cantidadDias;

}
promedio=acumuladorDias/contadorReservas;
if (contadorQR > contadorefete && contadorQR > contadorTarjeta ){
    formaDePagoMasUsada="qr";
}else{
    if (contadorTarjeta > contadorefete){
        formaDePagoMasUsada = "tarjeta";

    }else{
        formaDePagoMasUsada= "efete";
    }

}
}
