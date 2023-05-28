function copiar() {
    let mensaje = document.getElementById("mensaje");
  
    mensaje.select();
    document.execCommand("copy");
  
    mensaje.blur();

}

function encriptar(){
    let texto = document.getElementById("texto").value;
    let mensaje = document.getElementById("mensaje").value;
    let titulo = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muneco");
    var copiar = document.getElementById("btn-copiar")

    let textoCifrado = texto
    textoCifrado = textoCifrado.replace(/[e]/g, "enter")
    textoCifrado = textoCifrado.replace(/[i]/g, "imes")
    textoCifrado = textoCifrado.replace(/[a]/g, "ai")
    textoCifrado = textoCifrado.replace(/[o]/g, "ober")
    textoCifrado = textoCifrado.replace(/[u]/g, "ufat")

    if(texto.length != 0){
        document.getElementById("mensaje").value = textoCifrado;
        document.getElementById("texto").value = "";
        titulo.textContent = "Encriptado Exitoso";
        parrafo.textContent = "";
        muñeco.style.display = "none";
        copiar.style.display = "block";
    }
    else{
        titulo.textContent = "Ningún mensaje fue encontrado";
        muñeco.src = "./img/desencriptado-removebg-preview.png";
        parrafo.textContent = "Ingresa el mensaje a encriptar o desencriptar";
        alert("Ingrese el mensaje a Encriptar");
    }

    let botonCopiar = document.querySelector(".btn-copiar");
    botonCopiar.textContent = "Copiar";
}

function desencriptar(){
    let textoCifrado = document.getElementById("texto").value;
    let mensajeCifrado = document.getElementById("mensaje").value;
    let titulo = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muneco");
    var copiar = document.getElementById("btn-copiar")


    let textoDesencriptado = textoCifrado;
    textoDesencriptado = textoDesencriptado.replace(/[u]fat/g, "u")
    textoDesencriptado = textoDesencriptado.replace(/[o]ber/g, "o")
    textoDesencriptado = textoDesencriptado.replace(/[a]i/g, "a")
    textoDesencriptado = textoDesencriptado.replace(/[i]mes/g, "i")
    textoDesencriptado = textoDesencriptado.replace(/[e]nter/g, "e")

    if(textoCifrado.length != 0){
        document.getElementById("texto").value = "";
        document.getElementById("mensaje").value = textoDesencriptado;
        titulo.textContent = "Desencriptado Exitoso";
        parrafo.textContent = "";
        muñeco.style.display = "none";
        copiar.style.display = "block";
    }
    else{
        titulo.textContent = "Ningún mensaje fue encontrado";
        muñeco.src = "./img/desencriptado-removebg-preview.png";
        parrafo.textContent = "Ingresa el mensaje que deseas encriptar o desencriptar";
        alert("Ingrese el mensaje a Desencriptar");
    }
    let botonCopiar = document.querySelector(".btn-copiar");
    botonCopiar.textContent = "Copiar";
}