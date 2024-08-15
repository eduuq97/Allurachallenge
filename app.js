const btn_encript = document.getElementById("btn-encript");
const btn_desencript = document.getElementById("btn-desencript");
const filter = /[A-Z~!@#$%^&*()_+|}{[\]\\\/?=><:"`;.,áéíóúàèìòù'1-9]/g;
const btn_copy = document.getElementById("btn-copy");
const text_area = document.getElementById("text-encript");
const label = document.querySelector("label");
const icon = document.querySelector(".bi-exclamation-circle-fill");
const cover = document.getElementById("cover");
const desencriptArea = document.getElementById('text-desencript');
const containerHidden = document.querySelector(".container-hidden");

// Función que verifica los inputs 
function verify() {
    let new_text = text_area.value;
    if (new_text.match(filter) != null) {
        clean_all();
        // Alerta de error.
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Solo letras minúsculas y sin acentos.',
        });
    }
}

// Función para limpiar todo
function clean_all() {
    text_area.value = "";
    desencriptArea.textContent = ""; // Asegura que se limpie el contenido mostrado
    resetLabelAndIcon();  // Resetea el label y el icono cuando se limpia todo
    showCover();  // Muestra la imagen inicial cuando se limpia todo
}

// Función para resetear el label y el icono a su estado inicial
function resetLabelAndIcon() {
    label.textContent = "Solo letras minúsculas y sin acentos.";
    label.style.color = "#000";  // Color negro por defecto
    icon.className = "bi bi-exclamation-circle-fill";  // Icono por defecto
    icon.style.color = "#000";  // Color negro por defecto
}

// Función encriptar
function encript() {
    let new_text = text_area.value.trimStart();

    // Si el textarea está vacío, resetea el label e icono y detén la función
    if (new_text === "") {
        resetLabelAndIcon();
        showCover();  // Muestra la imagen inicial
        return;
    }

    new_text = new_text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    desencriptArea.textContent = new_text; // Muestra el texto encriptado en el párrafo
    desencriptArea.style.color = "#495057";
    desencriptArea.style.fontFamily = "Inter, sans-serif";
    desencriptArea.style.fontSize = "24px";
    hideCover();

    // Actualiza el label e icono para encriptar
    label.textContent = "¡Texto encriptado con éxito!";
    label.style.color = "#28a745";  // Verde para éxito
    icon.className = "bi bi-check-circle-fill";  // Icono de éxito
    icon.style.color = "#28a745";  // Color verde para éxito
}

// Función desencriptar
function desencript() {
    let new_text = text_area.value;

    // Si el textarea está vacío, resetea el label e icono y detén la función
    if (new_text === "") {
        resetLabelAndIcon();
        showCover();  // Muestra la imagen inicial
        return;
    }

    new_text = new_text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    desencriptArea.textContent = new_text; // Muestra el texto desencriptado en el párrafo
    desencriptArea.style.color = "#495057";
    desencriptArea.style.fontFamily = "Inter, sans-serif";
    desencriptArea.style.fontSize = "24px";
    hideCover();

    // Actualiza el label e icono para desencriptar
    label.textContent = "¡Texto desencriptado con éxito!";
    label.style.color = "#0A3871";  // Azul para éxito
    icon.className = "bi bi-check-circle-fill";  // Icono de éxito
    icon.style.color = "#0A3871";  // Color azul para éxito
}

// Función para ocultar la imagen inicial y mostrar el área de desencriptado
function hideCover() {
    if (desencriptArea.textContent !== "") {
        cover.style.display = "none";  // Oculta la imagen y el mensaje inicial
        containerHidden.style.display = "block";  // Muestra el área de texto desencriptado
    }
}

// Función para mostrar la imagen inicial y ocultar el área de desencriptado
function showCover() {
    if (text_area.value === "") {
        cover.style.display = "block";  // Muestra la imagen y el mensaje inicial
        containerHidden.style.display = "none";  // Oculta el área de texto desencriptado
    }
}

function copy() {
    // Obtener el texto del párrafo
    const resultP = desencriptArea.innerText;

    // Usa la API de Portapapeles para copiar el texto
    navigator.clipboard.writeText(resultP)
        .then(() => {
            btn_copy.innerText = 'Copiado';
            setTimeout(() => {
                btn_copy.innerText = 'Copiar';
            }, 3000);
            Swal.fire({
                icon: 'success',
                title: '¡Copiado!',
                text: 'Texto copiado al portapapeles.',
            });
        })
        .catch(err => {
            Swal.fire({
                icon: 'error',
                title: '¡Error!',
                text: 'Error al copiar el texto',
            });
            console.error('Error al copiar el texto: ', err);
        });
}

btn_encript.addEventListener("click", verify);
btn_encript.addEventListener("click", encript);

btn_desencript.addEventListener("click", verify);
btn_desencript.addEventListener("click", desencript);

btn_copy.addEventListener("click", copy);

text_area.addEventListener("input", () => {
    if (text_area.value === "") {
        resetLabelAndIcon();
        showCover();  // Muestra la imagen inicial si el textarea queda vacío
    }
});






