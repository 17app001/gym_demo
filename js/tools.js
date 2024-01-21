function getBmi(height, weight) {
    let bmi = (weight / (height / 100) ** 2).toFixed(2);
    if (isNaN(bmi)) {
        return '數值不正確!';
    }

    return bmi;
}