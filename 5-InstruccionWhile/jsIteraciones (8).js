function mostrar()
{
                var respuesta=0;
	            var positivo=0;
	var negativo= -1;
	var negativoContador=0;
	
	while(respuesta != "basta") {

		respuesta=prompt("ingrese un número - basta para parar ");
		if (parseInt(respuesta)) {
			if (respuesta > 0) positivo += parseInt(respuesta);
		    else {
			  negativo *= parseInt(respuesta);
			  negativoContador++;
		    }	
	   }         
	}	
 if (negativoContador == 0 ) negativo =0;
 
 document.getElementById('suma').value=positivo;
 document.getElementById('producto').value= ("-")+  negativo;
.
}//FIN DE LA FUNCIÓN
