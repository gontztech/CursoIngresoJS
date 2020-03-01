function mostrar()
{
    var numeroUno;
    var numeroDos;
    var resultado;

    numeroUno=prompt("ingrese el primer numero");
    numeroDos=prompt("ingrese el segundo numero");

    numeroUno=parseInt(numeroUno);
    numeroDos=parseInt(numeroDos);
    resultado=parseInt(resultado);



    if (numeroUno > numeroDos) {
        resultado = (numeroUno-numeroDos);
        alert(resultado);
 
    }else{
        if (numeroUno < numeroDos){
            resultado = (numeroUno+numeroDos)
            alert (resultado);
        }else{
            if (numeroUno == numeroDos) {
                resultado = (numeroUno+numeroDos)
                alert (resultado);
            }
        }
            
        }            if (resultado >= "11"){
            alert (" la suma es " +resultado+ " y superó el numero 10 " );
    }



}
