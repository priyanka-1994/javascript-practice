function tip_calculator(){
  const bill = parseFloat(document.getElementById("bill-amount").value)
  const tipPercent = parseFloat(document.getElementById("tip-percent").value)

  const tipAmountDisplay = document.getElementById("tip-amount")
  const totalAmountDisplay = document.getElementById("total-amount")

  if (isNaN(bill)) {
    alert("Please enter a valid bill amount");
    return
  }
  const tipAmount = (bill * tipPercent) / 100
  const totalAmount = bill + tipAmount

  tipAmountDisplay.textContent = tipAmount.toFixed(2)
  totalAmountDisplay.textContent = totalAmount.toFixed(2)

  let message;
  if(tipPercent<=10) message = "Basic Service";
  else if(tipPercent<=15) message = "Good Service";
  else message = "Excellent Service";
  document.getElementById("feedback").textContent = message;
}
