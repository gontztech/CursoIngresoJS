function mostrar()
{
    var respuesta=0;
    var Iteraciones=0;
    var contadorTemperaturaPar=0;
    var contadorProductosMenosDeCeroGrados=0;
    var acumuladorPeso=0;
    var promedio=0;
    var productoMasPesado;
    var pesoMasPesado=0;
    var pesoMasLiviano=0;
    var flagPesado=0;
    var flagLiviano=0;
   

    do{
        {
           var marca=prompt("ingrese una marca");
        
         }while (marca == null || marca == "");
         do{
            var peso=prompt("ingrese un peso del 1 al 100");
            peso=parseInt(peso);
            acumuladorPeso+=peso;
            acumuladorPeso=parseInt(acumuladorPeso);
 
         }while (peso < 1 || peso >100);
         do{
            var temperatura=prompt("ingrese temperatura de almacenamiento - de -30 a 30 grados");
            peso=parseInt(peso);
        }while (temperatura <-30 || temperatura > 30);

        if (temperatura%2==0){
            contadorTemperaturaPar++;
        }else 
        if (temperatura < -1){
            contadorProductosMenosDeCeroGrados++;

           }
            
            if (parseInt(peso) < pesoMasLiviano || flagLiviano==0){
                flagLiviano=1;
                pesoMasLiviano=parseInt(peso);
               

            }else if (parseInt(peso) > pesoMasPesado || flagPesado==0){
                flagPesado=1;
                productoMasPesado=marca;
                pesoMasPesado=parseInt(peso);
           
            }
             
     respuesta=prompt("ingrese : si . si desea ingresar mas datos");
     Iteraciones++;
     Iteraciones=parseInt(Iteraciones);

     promedio=(acumuladorPeso/Iteraciones);
    

    }while (respuesta == "si");

    document.write(" la cantidad de temperaturas pares es de  " +contadorTemperaturaPar );
    document.write (" el producto mas pesado es " +productoMasPesado+ " y su peso es de " +pesoMasPesado );
    document.write (" el promedio del peso es de " +promedio);
    document.write (" La cantidad de productos que se conservan a menos de 0 grados es de " +contadorProductosMenosDeCeroGrados );
    document.write (" el peso maximo es " +pesoMasPesado+ " y el minimo es " +pesoMasLiviano);

    

}
