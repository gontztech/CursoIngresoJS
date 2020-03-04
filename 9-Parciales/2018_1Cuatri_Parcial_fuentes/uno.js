
function mostrar()
{   
    var pasaje;
    var edad =0;
    var acumSexoF=0;
    var acumSexoM=0;
    var acumPasaje=0;
    var nombre;
    var acumNombre=0;
    var respuestaSexo=0;
    var respuestaPasaje=0;
    var respuestaEdad=0;
    var respuestaNombre;
    var maximoEdad=0;
    var minimoEdad=0;
    var contadorF=0;
    var contadorM=0;
    var promedioF=0;
    var primeraVezHombreNacional= true;
    var edadMaxima;

    while (respuestaSexo != "basta" && respuestaPasaje != "basta" && respuestaEdad != "basta" && respuestaNombre != "basta" ){


        respuestaSexo=prompt("ingrese m o f segun el sexo");
        respuestaPasaje=prompt("ingrese el pasaje");
        respuestaEdad=prompt("ingrese edad");
        respuestaNombre=prompt("ingrese nombre");

        acumSexoF=parseInt(acumSexoF);
        acumSexoM=parseInt(acumSexoM);


        if (respuestaEdad > maximoEdad) maximoEdad=respuestaEdad;
        if (respuestaEdad < minimoEdad) minimoEdad=respuestaEdad;
         
        if (respuestaSexo == "f"  (respuestaPasaje == "urbano" !! respuestaPasaje == "nacional" ){
acumSexoF+=respuestaSexo;
            contadorF++;
        }else if (respuestaSexo == "m"){
            acumSexoM+=respuestaSexo;
            contadorM++;

        }
    if (sexo== "m" && pasaje == "nacional" )
        if (primeraVezHombreNacional){
            primeraVezHombreNacional=false;
            primeraVezHombreNacional=nombre;
            primeraVezHombreNacional=edad;
        }else if (edad < primeraVezHombreNacional){
            primeraVezHombreNacional=nombre;
            primeraVezHombreNacional=edad;
        }

        }
        }
    promedioF=(acumSexoF/contadorF);

    }
    
alert (" la cantidad de mujeres con pasaje urbano son de " +contadorF+ " mujeres " );




}

