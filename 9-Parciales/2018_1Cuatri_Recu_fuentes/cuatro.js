function mostrar()
{
    var numeroUno=prompt("ingrese el primer numero");
    var numeroDos=prompt("ingrese el segundo numero");
    var resultado;
    numeroUno=parseInt(numeroUno);
    numeroDos=parseInt(numeroDos);
    

    if (numeroUno==numeroDos){
        resultado = (numeroUno+numeroDos);
        alert (resultado);
    }else{
        if (numeroUno>numeroDos){
            resultado=(numeroUno/numeroDos);
            alert (resultado);
        }else{
            if (numeroUno<numeroDos){
                resultado=(numeroUno+numeroDos);
                alert (resultado);
            }
        }
    } if (resultado< 50){
        alert (" la suma entre  " +numeroUno+ " y " + numeroDos + " es " +resultado+ " y es menor a 50 " );
    }
    



}
