function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random;
	var max;
	var min;

	max = ("10");
	min = ("1");

	random = Math.floor(Math.random()* max + min);
	console.log (random);

	switch(random){
		case 10:
		case 9:
			alert("buenarodo");
			break;
		case 8:
		case 7:
		case 6:
		case 5:
		case 4:
			alert("aprovado");
			break;
		case 3:
		case 2:
		case 1:
			alert ("a casa pete");
			break;
	}
	
}//FIN DE LA FUNCIÓN