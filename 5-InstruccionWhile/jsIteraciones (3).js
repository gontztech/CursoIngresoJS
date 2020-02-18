function mostrar()
{
var clave = prompt ("ingrese el numero clave.");

while (clave!= "utn750") {
    clave = prompt("Ingrese su clave");

    contador++;
    if (contador == 3 ); {
        break;
    }

}

if (clave == "utn750"){
    alert ("bienvenido");
}else{
    alert ("intentos maximos");

}

}//FIN DE LA FUNCIÓN
