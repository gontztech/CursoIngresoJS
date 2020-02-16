function mostrar()
{
//tomo la edad  
    var edad;
    edad=document.getElementById("edad").value;

    if (edad >= 18) {
        alert ("es mayor");
    }else{
        if (edad < 13) {
            alert ("es menor");
        }else{
            alert ("es adolescente");
        }
    }



}//FIN DE LA FUNCIÓN