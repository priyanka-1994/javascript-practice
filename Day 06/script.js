function calculate(operator) {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const resultDisplay = document.getElementById('result');
  let result;
   if (isNaN(num1) || isNaN(num2)) {
     resultDisplay.textContent = "Please enter valid number";
     return;
   }
   switch(operator) {
     case '+':
       result = num1 + num2;
       break;
     case '-':
       result = num1 - num2;
       break;
     case '*':
       result = num1 * num2;
       break;
     case '/':
       result = num1 / num2;
       break;
     default:
       result = "Invalid Operation";
   }
  resultDisplay.textContent = result;
}
document.getElementById('reset').addEventListener('click',function () {
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
  document.getElementById('result').textContent = '0';
});
