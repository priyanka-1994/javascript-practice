const generateButton = document.getElementById('generate-pwd');
const Password = document.getElementById('pwd');
const uppercaseSense = document.getElementById('uppercase');
const passwordLengthSlider = document.getElementById("passwordLength");
const lengthValueDisplay = document.getElementById('lengthValue');

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

passwordLengthSlider.addEventListener("input",() => {
    lengthValueDisplay.textContent = passwordLengthSlider.value;
});

generateButton.addEventListener("click", () => {
        let generatedPassword = "";
        let charToUse = "";
        if(uppercaseSense.checked) {
            charToUse += uppercaseChars;
        }
        if(charToUse.length === 0){
            Password.value="Select Option!";
            return;
        }
        const passwordLength = parseInt(passwordLengthSlider.value);

        for(let i=0; i<=passwordLength; i++) {
            const randomIndex = Math.floor(Math.random()*charToUse.length);
            generatedPassword += charToUse.charAt(randomIndex);
        } 
        Password.value = generatedPassword;
    
    });
lengthValueDisplay.textContent = passwordLengthSlider.value;
