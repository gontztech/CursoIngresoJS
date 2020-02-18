function mostrar()
{

var sexo = prompt("ingrese f ó m .");



document.getElementById('Sexo').value=sexo;

while (sexo != "f" && sexo != "m" ) {
    sexo=prompt("Error. ingrese f ó m.");

}
if (sexo == "f") {
    alert ("usted es mujer")
}else{ 
    if(sexo == "m" ) {
        alert ("usted es hombre");
    }

}

}//FIN DE LA FUNCIÓN