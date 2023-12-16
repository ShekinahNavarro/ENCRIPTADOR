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
    document.getElementById('result').value = encryptedText;
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
