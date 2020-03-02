function mostrar()
{

	var contador=0;
	var acumulador =0;
	var respuesta=0;
	var numero=0;


	while (respuesta != "basta"  ) {
		respuesta=prompt("ingresar un número - basta para parar");

		if (parseInt(respuesta)){

			acumulador += parseInt(respuesta);
			contador++;
		}
    while (isNaN(numero )) {
		
				numero = prompt ("Error!!! ingrese un numero") ;
		
				numero = parseInt (numero) ;
		                                     }
	}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
}		 	



//FIN DE LA FUNCIÓN
