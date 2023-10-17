window.onload = function(){
    usuario ="";
    passwd = "";
    email = "";
    txtN = document.getElementById('nombreR');
    txtP = document.getElementById('passwdR');
    txtE = document.getElementById('emailR');
}

function registrar(){
    usuario = txtN.value;
    passwd = txtP.value;
    email = txtE.value;
    window.alert("usuario:"+usuario+" pass: "+passwd+"--"+email);
}
window.alert("usuario:"+usuario+" pass: "+passwd+"--"+email);