function mostrar()
{

	
	
	var numAlt=0;
	var numBaj=0;
	var respuesta=0;

	while (respuesta != "basta"){
		respuesta=prompt("ingrese un numero - basta para parar");
		if (parseInt(respuesta)){
			if      (parseInt(respuesta) > numAlt || numAlt == 0 ) numAlt= parseInt(respuesta);
			else if (parseInt(respuesta) < numBaj || numBaj == 0 ) numBaj=parseInt(respuesta);
		}
	}
	document.getElementById("maximo").value=numAlt;
	document.getElementById("minimo").value=numBaj;




}//FIN DE LA FUNCIÓN