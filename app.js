

const btn_encript = document.getElementById("btn-encript");
const btn_desencript = document.getElementById("btn-desencript");
const filter = /[A-Z~!@#$%^&*()_+|}{[\]\\\/?=><:"`;.,áéíóúàèìòù'1-9]/g;

// Funcion que verifica los inputs 
function verify(){
    let new_text = document.getElementById("text-encript").value;
    if(new_text.match(filter) != null){
        clean_all();
        //Alerta de error.
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Solo letras minúsuclas y sin acentos',
        });
    }
}

// Funcion limpiar todo
function clean_all(){
    document.getElementById("text-encript").value = "";
    document.getElementById("text-desencript").value = "";
}


//funcion encriptar.
function encript(){
    let new_text = document.getElementById("text-encript").value.trimStart();
    new_text;
    new_text = new_text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    new_text;

    document.getElementById("text-desencript").value = new_text;
    document.getElementById("text-desencript").style.color = "#495057";
    document.getElementById("text-desencript").style.fontFamily = "Inter, sans-serif";
    document.getElementById("text-desencript").style.fontSize = "24px";
    hideCover();
}
//Funcion desencriptar.
function desencript(){
    let new_text = document.getElementById("text-encript").value;
    new_text;
    new_text = new_text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

        new_text;

    document.getElementById("text-desencript").value = new_text;
    document.getElementById("text-desencript").style.color = "#495057";
    document.getElementById("text-desencript").style.fontFamily = "Inter, sans-serif";
    document.getElementById("text-desencript").style.fontSize = "24px";
    hideCover();
}

//funcion ocultar imagen y texto por default de el area desencriptar
function hideCover(){
    let empty_text = "";
    let text_area = document.getElementById("text-desencript").value;
    if (empty_text !== text_area){
        document.getElementById("cover").style.display = "none";
    }else document.getElementById("cover").style.display = "";
        showDesencriptArea(text_area);
}

function showDesencriptArea(text_area) {
    document.getElementById('text-desencript').style.display = 'block';
    document.getElementById('text-desencript').innerHTML = text_area;
  }



btn_encript.addEventListener("click", verify);
btn_encript.addEventListener("click", encript);


btn_desencript.addEventListener("click", verify);
btn_desencript.addEventListener("click", desencript);
