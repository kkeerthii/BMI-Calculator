const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");

function calculateBMI() {
    const heightValue = document.getElementById("height").value / 100;
    const weightValue = document.getElementById("weight").value;

    if (!heightValue || !weightValue || heightValue <= 0 || weightValue <= 0) {
        bmiInputEl.value = "Invalid input";
        weightConditionEl.innerText = "";
        return;
    }

    const bmiValue = (weightValue / (heightValue * heightValue)).toFixed(2);
    bmiInputEl.value = bmiValue;

    if (bmiValue < 18.5) {
        weightConditionEl.innerText = "Under Weight";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        weightConditionEl.innerText = "Normal Weight";
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        weightConditionEl.innerText = "Over Weight";
    } else {
        weightConditionEl.innerText = "Obesity";
    }
}

btnEl.addEventListener("click", calculateBMI);
