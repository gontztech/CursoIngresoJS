/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{  var lampara;
   var cantidad;
   var marca;
   var descuento;
   var impuesto;
   var iibb;
   var lamparaSinDescuento;
   var precioFinal;
   var precioConDescuento;

   lampara = 35;
   descuento = 0;

   lampara=parseInt(lampara);
   descuento=parseInt(descuento);
   impuesto=parseInt(impuesto);
   lamparaSinDescuento=parseInt(lamparaSinDescuento);
   precioFinal=parseInt(precioFinal);
   iibb=parseInt(iibb);
   precioConDescuento=parseInt(precioConDescuento);



   cantidad=document.getElementById("Cantidad").value;
   marca=document.getElementById("Marca").value;
   descuento=document.getElementById("precioDescuento").value;

   lamparaSinDescuento=lampara*cantidad;

//ITEM A//

   if(cantidad > 5){
       descuento = 50;
   
//ITEM B//
   }else if (cantidad==5 && marca == "ArgentinaLuz") {

       descuento = 40;

   }else if(cantidad ==5) {

           descuento = 30;
   } //ITEM C//

   else if (cantidad == 4 && marca == "ArgentinaLuz") {

           descuento = 25;
   }else if (cantidad == 4 && marca == "FelipeLamparas") {
           
           descuento = 25;

   }else if (cantidad == 4) {

           descuento = 20;  

   } //ITEM D//

   else if (cantidad == 3 && marca == "ArgentinaLuz" ) {

           descuento = 15;

   }else if (cantidad == 3 && marca == "FelipeLamparas") {

           descuento = 10;

   }else if (cantidad == 3) {

           descuento = 5;    

        }
  
//ITEM E//

        precioConDescuento=lamparaSinDescuento*descuento/100;
	precioFinal=(cantidad*lampara)-precioConDescuento;
	iibb=precioFinal*10/100;
	if(precioFinal>120)
	{
		impuesto=precioFinal+iibb;
		precioFinal=impuesto
		alert("IIBB Usted pagó $" +iibb+ " de impuestos");
        }
     iibb=parseInt(iibb);
	document.getElementById('precioDescuento').value=precioFinal;
   





 	
}
