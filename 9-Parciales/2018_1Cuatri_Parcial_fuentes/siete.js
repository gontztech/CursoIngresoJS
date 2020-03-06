function mostrar()
{ 
    var iteraciones=5;
    var contadorI=0;
    var promedio=0;
    var contadorVaronesSeis=0;


    do {    
        do{
            var notas=prompt("ingrese notas");
            notas=parseInt(notas);
        }while (isNaN(notas) || notas < 0 || notas > 10);

        do{
            var sexo=prompt("ingrese f o ingrese m según el sexo");
        }while (sexo != "f" && sexo != "m" );

        if (sexo == "m" && notas >5)contadorVaronesSeis++;

        contadorI++;
        console.log(contadorI);
    }while (contadorI< iteraciones);

    promedio=(notas/contadorI);

    alert ( " el promedio es de  " + promedio);
    alert (" los varones con una nota de 6 o mayor son de  "  +contadorVaronesSeis+ " niños " );



}
