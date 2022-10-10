let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let height_status = false, weight_status = false;

    if (height === '' || isNaN(height) || (height <= 0)) {
        document.getElementById('height_error').innerHTML = 'Silahkan input tinggi badan yang valid';
    } else {
        document.getElementById('height_error').innerHTML = '';
        height_status = true;
    }

    if (weight === '' || isNaN(weight) || (weight <= 0)) {
        document.getElementById('weight_error').innerHTML = 'Silahkan input berat badan yang valid';
    } else {
        document.getElementById('weight_error').innerHTML = '';
        weight_status = true;
    }

    if (height_status && weight_status) {
        //rumus BMI bb / (tb / 100)^2
        const bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);

        if (bmi < 18.5) {
            result.innerHTML = 'BMI : ' + bmi + ', kamu kekurangan berat badan.';
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            result.innerHTML = 'BMI : ' + bmi + ', berat badan kamu normal.';
        } else if (bmi >= 25 && bmi <= 29.9) {
            result.innerHTML = 'BMI : ' + bmi + ', kamu kelebihan berat badan.';
        } else {
            result.innerHTML = 'BMI : ' + bmi + ', kamu obesitas.';
        }
    } else {
        alert('Formulir EROR!');
        result.innerHTML = '';
    }
});