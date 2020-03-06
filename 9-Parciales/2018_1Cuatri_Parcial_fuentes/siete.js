function mostrar()
{ 
    var respuesta;
    var sexo;
    var alumnos;
    var nota;
    var acumuladorNotas=0;
    var acumuladorSexo=0;
    var acumulador=0;
    var notaMinima;
    var sexoMinima;
    var contadorDeVarones=0;
    var promedio;
    var contador=0;

    while (acumulador <5){  
        acumulador++;

    do {
        nota=prompt("ingrese una nota")
        nota = parseInt(nota);

    }while (  nota <0 || nota > 10);
    
    do{
        sexo=prompt("ingrese sex");

    }while (sexo!= "f" && sexo!= "m" );
 

    acumuladorNotas+=nota;

    if (contador==1){
        notaMinima=nota;
        sexoMinima=sexo;

    }else if (nota < notaMinima){
        notaMinima=nota;
        sexoMinima=sexo;
    }
    if (sexo== "m" && nota >= 6  ){
        contadorDeVarones++;

    }
    promedio = acumuladorNotas / contador;
    alert (" el promedio es de  " +promedio );
    alert (" la nota mas baja es de " + notaMinima + " y el sexo de esa persona es " +sexoMinima );
    alert (" la cantidad de varones que tuvieron una nota de 6 o mas es de  " +contadorDeVarones );
    
}
}
