/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var numeroUno;
var numeroDos;
var numeroTres;
var resultado;
var resultadoFinal;
var IVA ;
IVA = 25;





function Sumar () 
{
numeroUno=document.getElementById("PrecioUno").value;
numeroDos=document.getElementById("PrecioDos").value;
numeroTres=document.getElementById("PrecioTres").value;
    
numeroUno=parseInt(numeroUno);
numeroDos=parseInt(numeroDos);
numeroTres=parseInt(numeroTres);

resultado= (numeroUno +  numeroDos + numeroTres) ;

alert (" la suma es " + resultado  );


	
}
function Promedio () 
{
numeroUno=document.getElementById("PrecioUno").value;
numeroDos=document.getElementById("PrecioDos").value;
numeroTres=document.getElementById("PrecioTres").value;

numeroUno=parseInt(numeroUno);
numeroDos=parseInt(numeroDos);
numeroTres=parseInt(numeroTres);

resultado= (numeroUno +  numeroDos + numeroTres / 3  )   ;
alert (" el promedio es " + resultado );
}
function PrecioFinal () 
{
   
numeroUno=document.getElementById("PrecioUno").value;
numeroDos=document.getElementById("PrecioDos").value;
numeroTres=document.getElementById("PrecioTres").value;
    
numeroUno=parseInt(numeroUno);
numeroDos=parseInt(numeroDos);
numeroTres=parseInt(numeroTres);
resultado = parseInt(resultado);


resultado= (numeroUno +  numeroDos + numeroTres) ;

resultadoFinal= IVA*resultado/100+resultado;

alert (" el precio final con IVA ES " +resultadoFinal );



	
}