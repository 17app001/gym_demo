const userNameEl = document.querySelector("#username");
const heightEl = document.querySelector("#height");
const weightEl = document.querySelector("#weight");
const commentEl = document.querySelector(".comment");
const resetEl = document.querySelector("#reset");
const bmiEl = document.querySelector(".bmi");
const result = document.querySelector("#result");

console.log(userNameEl, heightEl, weightEl, resetEl);


resetEl.addEventListener("click", function () {
    bmiEl.innerText = "";
    commentEl.innerText = "";
    result.style.height = "50px";
    result.style.background = "white";

});

function getBmi() {
    let username = userNameEl.value;
    let height = heightEl.value;
    let weight = weightEl.value;
    let bmi = (weight / (height / 100) ** 2).toFixed(2);
    console.log(username, bmi);
    bmiEl.innerText = bmi;

    if (isNaN(bmi)) {
        bmiEl.innerText = "輸入不正確!";
        return;
    }

    let comment;
    if (bmi < 17) {
        comment = "過瘦!";
    } else {
        comment = "正常!"
    }

    commentEl.innerText = comment;
    result.style.background = "orange";
    result.style.height = "100px";
}

