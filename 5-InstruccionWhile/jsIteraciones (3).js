function mostrar()
{
var clave = prompt ("ingrese el numero clave.");
var contador = 0;

while (clave!= "utn750") {
    clave = prompt("Ingrese su clave");

    contador+1;
    if (contador > 4 ); {
        break;
    }

}

if (clave == "utn750"){
    alert ("bienvenido");
}else{
    alert ("ha alcanzado los intentos maximos");

}

}//FIN DE LA FUNCIÓN
