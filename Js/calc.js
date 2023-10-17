window.onload = function(){
    console.log("Cargo la pagina");
    aux = 0;
    aux2 = 0;
    entrada = document.getElementById("entrada");
}

function agrega(value){
    aux = entrada.value + value;
    console.log("aux: ",aux)
    entrada.value = aux;
}

function igual(){
    aux = entrada.value;

    total = eval(aux);
    entrada.value = total;
}