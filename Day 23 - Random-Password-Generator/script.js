const passwordInput = document.getElementById("password");
const passwordLength = document.getElementById ('length');
const upperCase = document.getElementById('uppercase');
const lowerCase = document.getElementById('lowercase');
const Numbers = document.getElementById('numbers');
const Symbols = document.getElementById('symbols');

let password = "";
let charTouse = "";

const uppercaseChars  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars  = "abcdefghijklmnopqrstuvwxyz";
const numberChars  = "1234567890";
const symbolChars = "!@#$%^&*()_+-=[]{};':\"|,.<>/?";

function generatePassword() {
    password = "";
    charTouse = "";
    
    const includepasswordLength = parseInt(passwordLength.value);
    const includeupperCase = upperCase.checked;
    const includelowerCase = lowerCase.checked;
    const includeNumbers = Numbers.checked;
    const includeSymbols = Symbols.checked;

    if(includeupperCase) charTouse+=uppercaseChars ;
    if(includelowerCase) charTouse+=lowercaseChars ;
    if(includeNumbers) charTouse+=numberChars ;
    if(includeSymbols) charTouse+=symbolChars;

    if(charTouse.length === 0) {
        passwordInput.value = "Select at least one optional!";
        return;
    } 

    for(let i=0; i<includepasswordLength;i++){
        const randomIndex = Math.floor(Math.random() * charTouse.length);
        password += charTouse.charAt(randomIndex);
    }
    passwordInput.value = password;
 }
 function copyPassword(){
    const passwordd = passwordInput.value;
    navigator.clipboard.writeText(passwordd)
    .then(() => {
        alert("Password copied to clipboard")
    })
    .catch(err=> {
        console.error("Failed to copy password: ", err);
    });
 }
