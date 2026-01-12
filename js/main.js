const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=-";

const GenerateBtn = document.getElementById("Generatorbtn");
GenerateBtn.addEventListener("click", generate);
const result = document.getElementById("result");

function generate() {
    let charecters = ""
    if(document.getElementById("Lower-case").checked) {
        charecters += lowercase;
    }
    if(document.getElementById("Upper-case").checked) {
        charecters += uppercase;
    }
    if(document.getElementById("Numbers").checked) {
        charecters += numbers;
    }
    if(document.getElementById("Symbols").checked) {
        charecters += symbols;
    }
    if(charecters != "") {

    const length = Number(document.getElementById("password-length").value);
    let password = "";
    for(let  i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * charecters.length);
        password += charecters[index];
    }
    result.value = password;
    }
}