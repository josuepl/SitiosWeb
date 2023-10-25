window.onload = function(){
    usuario ="";
    passwd = "";
    email = "";
    txtN = document.getElementById('nombreR');
    txtP = document.getElementById('passwdR');
    txtE = document.getElementById('emailR');
    listaN = []
    listaE = []
    listaP = []
}

function registrar(){
    usuario = txtN.value;
    passwd = txtP.value;
    email = txtE.value;
    window.alert("usuario:"+usuario+" pass: "+passwd+"--"+email);
    listaN.push(usuario)
    listaE.push(email)
    listaP.push(passwd)
}

function ver(){
    ix= 0;
    for (item in listaN){
        console.log("Nom -"+listaN[ix]+"Em "+listaE[ix]+" pas --"+listaP[ix]);
        ix+=1;
    } 
}