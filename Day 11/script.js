// script.js
const textArea = document.getElementById('text-input')
const wordCountDisplay = document.getElementById('word-count')
const charCountDisplay = document.getElementById('char-count')

textArea.addEventListener('input' ,() => {
  const textInput = textArea.value.trim(); // trim leading/trailing space
  const charCounter = textInput.length;
  
  //split by one or more space(excluding empty string)
  const word = textInput == '' ? [] : textInput.split(/\s+/);
  const wordCounter = word.length;
  
  wordCountDisplay.textContent = wordCounter;
  charCountDisplay.textContent = charCounter
    
  });
