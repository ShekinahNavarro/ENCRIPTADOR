let esBinario = false;

function cambiarTituloABinario() {
    let titulo = document.querySelector('.titulo h1');
    let textoOriginal = titulo.getAttribute('data-original-text');
    let textoBinario = '';

    if (!esBinario) {
        // Almacena el texto original en un atributo de datos
        titulo.setAttribute('data-original-text', textoOriginal);

        // Convierte cada carácter a su representación binaria
        for (let i = 0; i < textoOriginal.length; i++) {
            let charCode = textoOriginal.charCodeAt(i);
            let binaryRepresentation = charCode.toString(2).padStart(8, '0');
            textoBinario += binaryRepresentation + ' ';
        }

        esBinario = true;
    } else {
        // Restaura el texto original desde el atributo de datos
        textoBinario = titulo.getAttribute('data-original-text');
        esBinario = false;
    }

    // Actualiza el contenido del título
    titulo.innerText = textoBinario.trim();
}

function encrypt() {
    let inputText = document.getElementById('inputText').value;
    let encriptarText = '';
    for (let i = 0; i < inputText.length; i++) {
        let ascii = inputText.charCodeAt(i);
        if (ascii >= 65 && ascii <= 90) {
            encriptarText += String.fromCharCode((ascii - 65 + 3) % 26 + 65);
        } else if (ascii >= 97 && ascii <= 122) {
            encriptarText += String.fromCharCode((ascii - 97 + 3) % 26 + 97);
        } else {
            encriptarText += inputText.charAt(i);
        }
    }
    document.getElementById('result').value = encriptarText; 
}

function decrypt() {
    let encriptarText = document.getElementById('inputText').value;
    let desencriptarText = '';
    for (let i = 0; i < encriptarText.length; i++) {
        let ascii = encriptarText.charCodeAt(i);
        if (ascii >= 65 && ascii <= 90) {
            desencriptarText += String.fromCharCode((ascii - 65 - 3 + 26) % 26 + 65);
        } else if (ascii >= 97 && ascii <= 122) {
            desencriptarText += String.fromCharCode((ascii - 97 - 3 + 26) % 26 + 97);
        } else {
            desencriptarText += encriptarText.charAt(i);
        }
    }
    document.getElementById('result').value = desencriptarText;
}

function copyToClipboard() {
    /* Obtén el campo de resultado */
    let resultadoFinal = document.getElementById('result');

    /* Selecciona el contenido del campo de resultado */
    resultadoFinal.select();
    resultadoFinal.setSelectionRange(0, 99999); /* Para dispositivos móviles */

    /* Copia el contenido al portapapeles */
    document.execCommand('copy');

    /* Deselecciona el campo */
    resultadoFinal.setSelectionRange(0, 0);

    /* Puedes agregar una alerta u otro tipo de feedback si lo deseas */
    alert('Texto copiado al portapapeles');
}

