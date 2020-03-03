function mostrar()
{
	var numero=prompt("ingrese un numero del 1 al 9");
	
	while (numero < 0 || numero > 9 || isNaN(numero) ) {
		numero=prompt(" error- ingrese un numero del 1 al 9, " + numero+ " es incorrecto ");

	}
	document.getElementById("Numero").value=numero;
}//FIN DE LA FUNCIÓN


