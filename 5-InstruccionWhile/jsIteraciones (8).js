function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	while(confirm("desea ingresar un numero?")) {

		var numero=prompt("Ingrese un numero");
		numero=parseInt(numero);


		while(isNaN(numero)); {
		 numero = prompt("ingrese un numero");
		 numero =parseInt(numero);
			
		}
        if (numero >= 0) {
		  positivo = positivo + numero;
		  numero = parseInt(numero);

		}else{
			 negativo *= numero;
			 numero = parseInt(numero);

		}

	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN