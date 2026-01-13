const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=-";

const GenerateBtn = document.getElementById("Generatorbtn");
const saveBtn = document.getElementById("saveBtn");
const result = document.getElementById("result");
const savedContent = document.getElementById("savedContent");

GenerateBtn.addEventListener("click", generate);
saveBtn.addEventListener("click", savePassword);

// ---------- GENERATE ----------
function generate() {
    let characters = "";

    if (document.getElementById("Lower-case").checked) characters += lowercase;
    if (document.getElementById("Upper-case").checked) characters += uppercase;
    if (document.getElementById("Numbers").checked) characters += numbers;
    if (document.getElementById("Symbols").checked) characters += symbols;

    if (!characters) return;

    const length = Number(document.getElementById("password-length").value);
    let password = "";

    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }

    result.value = password;
}

// ---------- SAVE ----------
function savePassword() {
    const password = result.value;
    if (!password || password === "password") return;

    addPasswordToUI(password);
    saveToLocalStorage(password);
}

// ---------- UI ----------
function addPasswordToUI(password) {
    const savedItem = document.createElement("div");
    savedItem.className = "savedItem";

    const text = document.createElement("span");
    text.textContent = password;

    const actions = document.createElement("div");
    actions.className = "actions";

    const copyBtn = document.createElement("button");
    copyBtn.textContent = "Copy";
    copyBtn.className = "copyBtn";

    copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(password);
        copyBtn.textContent = "Copied!";
        setTimeout(() => copyBtn.textContent = "Copy", 1000);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";

    deleteBtn.addEventListener("click", () => {
        savedItem.remove();
        removeFromLocalStorage(password);
    });

    actions.appendChild(copyBtn);
    actions.appendChild(deleteBtn);

    savedItem.appendChild(text);
    savedItem.appendChild(actions);

    savedContent.prepend(savedItem);
}

// ---------- LOCAL STORAGE ----------
function saveToLocalStorage(password) {
    let passwords = JSON.parse(localStorage.getItem("passwords")) || [];
    passwords.unshift(password);
    localStorage.setItem("passwords", JSON.stringify(passwords));
}

function removeFromLocalStorage(password) {
    let passwords = JSON.parse(localStorage.getItem("passwords")) || [];
    passwords = passwords.filter(p => p !== password);
    localStorage.setItem("passwords", JSON.stringify(passwords));
}

function loadSavedPasswords() {
    const passwords = JSON.parse(localStorage.getItem("passwords")) || [];
    passwords.forEach(addPasswordToUI);
}

loadSavedPasswords();

const navbarToggle = document.querySelector('.menu-btn')
const NavLink = document.querySelector('.navlinks')
navbarToggle.addEventListener("click", () => {
    navbarToggle.classList.toggle('active');
    NavLink.classList.toggle('active');
})