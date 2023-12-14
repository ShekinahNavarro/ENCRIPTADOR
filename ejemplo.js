function encrypt() {
    let inputText = document.getElementById('inputText').value;
    let encryptedText = '';
    for (let i = 0; i < inputText.length; i++) {
        let ascii = inputText.charCodeAt(i);
        if (ascii >= 65 && ascii <= 90) {
            encryptedText += String.fromCharCode((ascii - 65 + 3) % 26 + 65);
        } else if (ascii >= 97 && ascii <= 122) {
            encryptedText += String.fromCharCode((ascii - 97 + 3) % 26 + 97);
        } else {
            encryptedText += inputText.charAt(i);
        }
    }
    document.getElementById('result').value = encryptedText;
}

function decrypt() {
    let encryptedText = document.getElementById('inputText').value;
    let decryptedText = '';
    for (let i = 0; i < encryptedText.length; i++) {
        let ascii = encryptedText.charCodeAt(i);
        if (ascii >= 65 && ascii <= 90) {
            decryptedText += String.fromCharCode((ascii - 65 - 3 + 26) % 26 + 65);
        } else if (ascii >= 97 && ascii <= 122) {
            decryptedText += String.fromCharCode((ascii - 97 - 3 + 26) % 26 + 97);
        } else {
            decryptedText += encryptedText.charAt(i);
        }
    }
    document.getElementById('result').value = decryptedText;
}