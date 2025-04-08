let text = document.getElementById("content");
let img = document.getElementById("qr_img");
let button = document.getElementById("generate");

let api = "https://api.qrserver.com/v1/create-qr-code/?data=";

let generateQR = () => {
    let content = text.value;
    let api = "https://api.qrserver.com/v1/create-qr-code/?data=";
    if (content === "") {
        alert ("Enter text to generate QR");
        img.style.display = "none";
    }
    else {
        img.style.display = "block";
        img.src = `${api}${content}`;
    }
}

button.addEventListener("click", generateQR);