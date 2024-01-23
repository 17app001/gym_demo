/**
 * 1.取得元素物件
 * 2.宣告bmi函式
 * 3.身高，體重進行傳遞測試
 * 4.綁定按鈕
 * 5.輸出bmi跟評語
 * 6.增加清除按鈕（所有數據清除)
 */

const userNameEl = document.querySelector("#username");
const heightEl = document.querySelector("#height");
const weightEl = document.querySelector("#weight");
const bmiEl = document.querySelector("#bmi");
const commentEl = document.querySelector("#comment");
//console.log(userNameEl, heightEl, weightEl, bmiEl);


function clearForm() {
    userNameEl.value = "";
    heightEl.value = "";
    weightEl.value = "";
    bmiEl.innerText = "";
    commentEl.innerText = "";
}

function calcBmi() {
    let height = heightEl.value;
    let weight = weightEl.value;

    if (height == "" || weight == "") {
        alert("輸入不能為空");
        return;
    }

    //取得bmi
    let bmi = getBmi(height, weight);
    //取得評語
    let comment;
    if (bmi < 18.5) {
        comment = "體重過輕";
    } else if (bmi < 24) {
        comment = "正常範圍";
    } else if (bmi < 27) {
        comment = "過重";
    } else if (bmi < 30) {
        comment = "輕度肥胖";
    } else if (bmi < 35) {
        comment = "中度肥胖：";
    } else {
        comment = "重度肥胖";
    }

    console.log(bmi, comment);

    bmiEl.innerText = "BMI:" + bmi;
    commentEl.innerText = comment;

}


function getBmi(height, weight) {
    let bmi = weight / (height / 100) ** 2;
    if (isNaN(bmi)) {
        return "數值錯誤！";
    }

    return bmi.toFixed(2);
}

