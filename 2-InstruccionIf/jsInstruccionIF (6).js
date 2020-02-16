function mostrar()
{
//tomo la edad  
    var edad;
    edad=document.getElementById("edad").value;

    if (edad > 17) {
        alert ("es mayor");

    } else {

        if (edad < 13) {
                alert ("es menor");

        } else {
                alert ("Adolescente");
        }

    }



}//FIN DE LA FUNCIÓN