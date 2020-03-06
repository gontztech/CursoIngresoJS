function mostrar()
{
    var respuesta =0;
    var contadorI=0;
    var contadorPar=0;
    var contadorImpar=0;
    var contadorCero=0;
    var respuestaPromedio=0;
    var contadorPositivo=0;
    var contadorNegativo=0;
    var negativos=0;
    var positivos=0;
  

   do {
       
       do {
        var letra =prompt("ingrese una letra");
        
    }while(letra== null || letra == "");
    do{
        var numero=prompt("ingrese un numero - entre -100 y 100");
        numero=parseInt(numero);
        
    }while (numero >  100 && numero < -100 || isNaN(numero) );

    if (numero %2==0 )contadorPar++;
    else{
        if (numero %2 != 0) contadorImpar++;
        else{
            if (numero == 0)contadorCero++;
            else{
                if (numero > 0)
                positivos+=numero;
                contadorPositivo++;
            
                    
                }
            }
        }
    if (numero < 0)
    negativos+=numero;
    contadorNegativo++;
    
    
    
    respuesta=prompt("ingrese : si , si desea continuar ingresando datos");
    contadorI++;
    console.log(contadorI);
   }while (respuesta =="si" );
    respuestaPromedio=(positivos/contadorPositivo);
   


   document.write (" numeros pares " +contadorPar+ "</p>" );
   document.write(" numeros impares " +contadorImpar+ "</p>" );
   document.write (" ceros  " +contadorCero +"</p>" );
   document.write (" promedio de los numeros positivos " +respuestaPromedio+ "</p>" );
   document.write (" suma de negativos " +negativos+ "</p>" );
}
