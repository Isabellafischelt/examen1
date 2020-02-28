function mostrarFoto12(){
    document.getElementById("foto").style.display = "block";
}
    

function ocultarFoto12(){
    document.getElementById("foto").style.display = "none";
}

function validarTelefono12(){
    var telefono12 = document.getElementById("telefono12").value;
   
    var mensaje = new Array();
  
    var flagNumCaracteres = false;
    var flagLetraMayuscula = false;
    var flagLetraMinuscula = false;
    var flagNumero = false;
    var flagCaracterEspecial = false;
  
    var n = password.length;
    if (n < 10){
        flagNumCaracteres = true;
        mensaje.push("El password ingresado no tiene más de 8 caracteres")
    }
    //checamos que tenga al menos una letra mayuscula
    var mayuscula = 0;
    for (var i=0; i<n; i++){
        if ((telefono12.charCodeAt(i) >= 65) && (telefono12.charCodeAt(i) <= 90)) mayuscula++;
    }
    if (mayuscula == 0){
        flagLetraMayuscula = true;
        mensaje.push("El teléfono debe tener exactamente 10 números");
    }
    //checamos que tenga al menos una letra minuscula
    var minuscula = 0;
    for (var i=0; i<n; i++){
        if ((telefono12.charCodeAt(i) >= 97) && (telefono12.charCodeAt(i) <= 122)) minuscula++;
    }
    if (minuscula == 0){
        flagLetraMinuscula = true;
        mensaje.push("El teléfono debe solo contener números del 0 al 9");
    }
    //checamos que tenga al menos un numero
    var numero = 0;
    for (var i=0; i<n; i++){
        if ((telefono12.charCodeAt(i) >= 48) && (telefono12.charCodeAt(i) <= 57)) numero++;
    }
    if (numero == 0){
        flagNumero = true;
        mensaje.push("El teléfono debe solo contener números del 0 al 9");
    }
   
    //checamos el estado de las banderas
    if(!flagNumCaracteres && !flagLetraMayuscula && !flagLetraMinuscula && !flagNumero){
        //borramos los mensajes de la lista de errores si es que existen
        document.getElementById("msj").innerHTML="";
        //añadimos a la lista de erroes, un elemento que indica que el primer ingresado es correcto
        var li = document.createElement("li");
        li.innerHTML = "<span class = 'passwordCorrecto'>El teléfono ingresado es correcto</span>";
        document.getElementById("msj").appendChild(li);
    }else{
        //corremos una funcion que lee los mensajes del arreglo mensaje, y los imprime como una lista dentro del ul
        imprimirErrores(mensaje);
    }
}
function imprimirErrores(errores){
    
    var listaErrores = document.getElementById("msj");
    listaErrores.innerHTML = "";
    
    errores.forEach(function(error){
        var li = document.createElement("li");
        li.innerHTML = "<span class = 'error'>"+error+"</span>";
        listaErrores.appendChild(li);
    });
}