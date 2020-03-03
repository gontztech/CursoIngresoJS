function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta=0;

	while (respuesta!="basta"){
		respuesta=prompt("ingrese un numero - basta para parar");
		if (parseInt(respuesta)){
			acumulador+=parseInt(respuesta);
			contador++;
		}
	}

		                                     
	
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
}		 	



//FIN DE LA FUNCIÓN
