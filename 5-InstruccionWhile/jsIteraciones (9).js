function mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var maximo;
	var minimo;
	var primeraVez = true

	while(respuesta!='no')
	{
		var numero = prompt ("ingrese un numero");

		numero=parseInt(numero);

		while(isNaN(numero)) {
			numero = prompt("ingrese un numero");
			numero = parseInt(numero);
		}
	if (primeraVez){
		primeraVez= false;

		maximo=numero;
		minimo=numero;
	}else{
		if (numero>maximo) {
			maximo=numero;
		}
	}

	respuesta = prompt("desea continuar?");
	}

	document.getElementById("maximo").value=maximo;
	document.getElementById("minimo").value=minimo;




}//FIN DE LA FUNCIÓN