const userNameEl = document.querySelector("#username");
const heightEl = document.querySelector("#height");
const weightEl = document.querySelector("#weight");
const commentEl = document.querySelector(".comment");
const resetEl = document.querySelector("#reset");
const bmiEl = document.querySelector(".bmi");
const result = document.querySelector("#result");

console.log(userNameEl, heightEl, weightEl, resetEl);

function clearForm() {
    bmiEl.innerText = "";
    commentEl.innerText = "";
    result.style.height = "50px";
    result.style.background = "white";
}


resetEl.addEventListener("click", clearForm);

function calcBmi() {
    let username = userNameEl.value;
    let height = heightEl.value;
    let weight = weightEl.value;

    if (height == '' || weight == '') {
        bmiEl.innerText = "輸入不能為空";
        return;
    }

    let bmi = getBmi(height, weight);

    if (isNaN(bmi)) {
        bmiEl.innerText = bmi;
        return;
    }

    let comment;
    if (bmi < 17) {
        comment = "過瘦!";
    } else {
        comment = "正常!"
    }

    bmiEl.innerText = bmi;
    commentEl.innerText = comment;
    result.style.background = "orange";
    result.style.height = "100px";
}

