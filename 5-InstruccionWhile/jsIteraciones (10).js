function mostrar()
{
	  var positivos=0;
	  var negativos=0;
	  var cantidadPositivos=0;
	  var cantidadNegativos=0;
	  var cantidadCeros=0;
	  var cantidadPares=0;
	  var respuesta=0;

	  while(respuesta != "basta"){
		  respuesta= prompt("ingresar un numero - basta para parar");
		  var respuestaInt= parseInt(respuesta);
		  if (respuestaInt) {
			  if (respuestaInt % 2 == 0) cantidadPares++;
			  if (respuestaInt > 0 ) {
				  positivos += respuestaInt;
				  cantidadPositivos++;
			  }
			  else if (respuestaInt<0) {
				  negativos+= respuestaInt;
				  cantidadNegativos++;
			  }
			  else cantidadCeros++;
		  }
	  }
	  alert (" suma de negativos " +negativos );
	  alert (" cantidad de negativos " +cantidadNegativos );
	  alert (" promedio de negativos " +negativos / cantidadNegativos );
	  alert (" suma de positivos " +positivos );
	  alert (" cantidad de positivos " +cantidadPositivos );
	  alert (" promedio de positivos "  +positivos / cantidadPositivos );
	  alert (" cantidad de ceros " +cantidadCeros ) ;
	  alert (" cantidad de pares "  + cantidadPares);
	  alert (" suma total "  + (positivo + negativo)   );

}//FIN DE LA FUNCIÓN