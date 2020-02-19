function mostrar()
{

var numero = prompt("ingrese un número entre 0 y 10.");
while (numero < 0 || numero > 9 || isNaN(numero)  ) {
	numero=prompt(" ingrese un numero correcto , " + numero + " es erroneo " );

	numero = parseInt(numero);
}


}//FIN DE LA FUNCIÓN