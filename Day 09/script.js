function bmi_calculater(){
  const cal_wt = parseFloat(document.getElementById("weight").value);
  const cal_ht = parseFloat(document.getElementById("height").value);
  const bmiValue = document.getElementById("bmi-value");
  const resStatus = document.getElementById("status");

  if (isNaN(cal_wt) || isNaN(cal_ht) || cal_wt <= 0 || cal_ht <= 0) {
    alert("Please enter valid weight and height")
    return;
  }
  const heightInMeters = cal_ht / 100;
  const bmi = cal_wt / (heightInMeters * heightInMeters);
  bmiValue.textContent = bmi.toFixed(1);

  if (bmi < 18.5) {
    resStatus.textContent = "underweight";
    resStatus.style.color = "#ffcc00";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    resStatus.textContent = "normal";
    resStatus.style.color = "#00ff99";
  } else if(bmi>=25 && bmi<=29.9){
    resStatus.textContent = "overweight";
    resStatus.style.color = "#ffa500";
  } else{
    resStatus.textContent = "obese";
    resStatus.style.color = "#ff4d4d";
  }
}
