function borde() {
    imgborde = document.getElementById("imgborde");

    if (imgborde.style.border == "") {
        imgborde.style.border = "2px solid red";
    } else {
        imgborde.style.border = "";
    }
}

function resultado() {
    var stickerUno = document.getElementById("input1").value;
    var stickerDos = document.getElementById("input2").value;
    var stickerTres = document.getElementById("input3").value;
    var mensaje = document.getElementById("texto");

    valorTotal = parseInt(stickerUno) + parseInt(stickerDos) + parseInt(stickerTres);

    if (valorTotal <= 10) {
        texto.innerHTML = "Llevas " + valorTotal + " stickers";
    } else {
        texto.innerHTML = "Llevas demasiados stickers";
    }
}

function password() {
    var select1 = document.getElementById("select1").value;
    var select2 = document.getElementById("select2").value;
    var select3 = document.getElementById("select3").value;
    var texto = document.getElementById("clave");

    if (select1 == 9 && select2 == 1 && select3 == 1) {
        texto.innerHTML = "Password 1 Correcto"
    } else if (select1 == 7 && select2 == 1 && select3 == 4) {
        texto.innerHTML = "Password 2 Correcto"
    } else {
        texto.innerHTML = "Password Incorrecta"
    }
}