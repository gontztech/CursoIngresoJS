function mostrar()
{

	var contador=0;
	var acumulador=0;
	var repeticiones=5
	while(contador<repeticiones) {
		contador++;
		var numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		acumulador+=numero;
	
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;



}//FIN DE LA FUNCIÓN  