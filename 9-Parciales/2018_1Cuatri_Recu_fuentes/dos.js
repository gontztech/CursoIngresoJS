function mostrar()
{
    var nombre=document.getElementById("elNombre").value;
    var localidad=document.getElementById("laLocalidad").value;

    alert(" usted se llama " +nombre+ " y vive en la localidad de  "  +localidad );

    document.getElementById("elNombre").value=nombre;
    document.getElementById("laLocalidad").value=localidad;
  
}
