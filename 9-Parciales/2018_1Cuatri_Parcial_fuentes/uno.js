
function mostrar()
{  
    var respuesta=0;
    var iteraciones=5;
    var barbijoCaro=0;
    var flagBarbijo=0;
    var cantidadBarbijo=0;
    var fabricanteBarbijo;
    var itemMax=0;
    var flagItemMax=0;
    var fabricanteItemMax;
    var contadorJabon=0;
    var acumuladorJabon=0;

       do{
           {
            var productos=prompt("ingrese un producto : barbijo, jabon o alcohol");
           }while (productos != "barbijo" && productos != "jabon" && productos != "alcohol" );
           do {
               var precio=prompt("ingrese un precio, entre 100 y 300");
           }while (isNaN(precio) || precio < 100 || precio > 300 );
           do{
               var cantidad=prompt("ingrese la cantidad de unidades (no debe superar las 1000)");
               
           }while (isNaN(cantidad) || cantidad >1000 || cantidad == 0);
           do{
               var marca=prompt("ingrese la marca");
           }while (marca == "" || marca == null);
           do{
               var fabricante=prompt("ingrese el nombre del fabricante");
           }while (fabricante == "" || fabricante == null);

           if (productos == "barbijo"){
               if (precio > barbijoCaro || flagBarbijo==0 ){
                   flagBarbijo=1;
                   barbijoCaro=precio;
                   fabricanteBarbijo=fabricante;
                   cantidadBarbijo=parseInt(cantidadBarbijo);
                   cantidadBarbijo+=cantidad;
               }
           }

           if (cantidad > itemMax || flagItemMax==0 ){
               flagItemMax=1;
               itemMax=cantidad;
               fabricanteItemMax=fabricante;
           }
           if (productos == "jabon"){
               acumuladorJabon=parseInt(acumuladorJabon);
               acumuladorJabon+=cantidad;
           }

       respuesta++;
       }while(respuesta<iteraciones );

       document.write(" el precio del barbijo mas caro es de " +barbijoCaro+ " la cantidad de unidades es de " +cantidadBarbijo+ " y el fabricante es " +fabricanteBarbijo );
       document.write(" la cantidad del item con mas unidades es de "  +itemMax+ " y el fabricante es " +fabricanteItemMax);
       document.write(" la cantidad de jabones es de " +acumuladorJabon);

}

