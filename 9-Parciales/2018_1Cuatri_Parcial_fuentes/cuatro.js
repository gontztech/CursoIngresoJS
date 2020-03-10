function mostrar()
{
    var respuesta=0;
    var hombreCjoven=0;
    var flagHCJ=0;
    var hombreCasadoN;
    var pasajeroViejo=0;
    var flagPV=0;
    var sexoViejo;
    var nombreViejo;
    var mujeresVoC=0;
    var acumM=0;
    var contadorM=0;
    var acumF=0;
    var contadorF=0;
    var promedioM=0;
    var promedioF=0;
    do {
        do{
            var nombre=prompt("ingrese un nombre");

        }while (nombre == "" || nombre == null);
        do{
            var edad=prompt("ingrese la edad (mayor a 18 )");
        }while (isNaN(edad) || edad < 18  );
        do{   
            var estado=prompt("ingrese el estado civil (soltero, casado o viudo)");
        }while (estado != "casado" && estado != "soltero" && estado != "viudo" );
        do{
            var sexo=prompt("ingrese sexo (f o m segun el sexo)");
        }while (sexo != "m" && sexo != "f");

        if (sexo == "m" && estado == "casado"){
            if (edad < hombreCjoven || flagHCJ==0){
                flagHCJ=1;
                hombreCjoven=edad;
                hombreCasadoN=nombre;
            }
        }
        if (edad > pasajeroViejo || flagPV==0 ){
            flagPV=1;
            pasajeroViejo=edad;
            sexoViejo=sexo;
            nombreViejo=nombre;
        }
        if (sexo == "f" && estado == "casado" || estado == "viudo")mujeresVoC++;

        if (sexo = "m"){
            contadorM++;
            acumM=parseInt(acumM);
            acumM+=edad;
        }
        if (sexo = "f"){
            contadorF++;
            acumF=parseInt(acumF);
            acumF+=edad;
        }
        
        promedioF=(acumF/contadorF);
        promedioM=(acumM/contadorM);
  
         respuesta=prompt("escriba : si, si desea continuar ");
        }while (respuesta == "si");

     
        document.write(" el nombre del hombre casado mas joven es " +hombreCasadoN );
        document.write(" el pasajero mas viejo es de sexo " +sexoViejo+ " y se llama " +nombreViejo);
        document.write(" la cantidad de mujeres que son casadas/viudas " +mujeresVoC );
        document.write(" el promedio de los hombres es de  " +promedioM);
        document.write(" el promedio de las mujeres es de  "+promedioF);
    
    



}
