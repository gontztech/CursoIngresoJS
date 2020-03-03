function mostrar()
{

var sexo=prompt("ingrese f o m");

while (sexo != "f" && sexo!= "m" ){
    sexo=prompt("error. ingrese f o m");
}

document.getElementById("Sexo").value=sexo

}//FIN DE LA FUNCIÓN