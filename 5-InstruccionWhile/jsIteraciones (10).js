function mostrar()
{
	  var positivos=0;
	  var negativos=0;
	  var cantidadNegativos=0;
	  var cantidadCeros=0;
	  var cantidadPositivos=0;
	  var cantidadPares=0;
	  var respuesta=0;
	  

	  while (respuesta !="basta"){
		  respuesta=prompt("ingrese un numero - basta para parar");
		  var numInt=parseInt(respuesta);
		  if (numInt){
			  if (numInt  % 2 ==0 ) cantidadPares++;
			  if ( numInt > 0 ) {
				  positivos+=numInt;
				  cantidadPositivos++;
			  }
			  else if (numInt < 0){
				  negativos+=numInt;
				  cantidadNegativos++;
			  }
			  else cantidadCeros++; 	
			  console.log (numInt);


			  }
		  }
	  






  document.write("<p> Suma de negativos "     + negativos                + "</p>");
  document.write("<p> Cantidad de negativos " + cantidadNegativos           + "</p>");
  document.write("<p> Promedio de negativos " + negativos/cantidadNegativos  + "</p>");
  document.write("<p> Suma de positivos "     + positivos                + "</p>");
  document.write("<p> Cantidad de positivos " + cantidadPositivos           + "</p>");
  document.write("<p> Promedio de negativos " + positivos/cantidadPositivos  + "</p>");
  document.write("<p> Cantidad de ceros "     + cantidadCeros               + "</p>");
  document.write("<p> Cantidad de pares "     + cantidadPares               + "</p>");
  document.write("<p> Suma total "            + (positivos + negativos)   + "</p>");

}//FIN DE LA FUNCIÓN