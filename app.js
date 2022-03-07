function calcNum(number) {
    let tmp = number % 22;
    return tmp === 0 ? 22 : tmp;
}

function calcYear(year) {
    return year.toString().split('').reduce(
        function (prev, next) {return parseInt(prev) + parseInt(next)}
    )
}

function Calculate (day, month, year) {
    let map_elements = document.querySelectorAll('.number');
    let table_elements = document.querySelectorAll('.item-number');
    let numbers = new Array(13)

    numbers[0] = calcNum(day);  // А
    numbers[1] = month; // Б
    numbers[2] = calcNum(calcYear(year)); // В
    numbers[3] = calcNum(numbers[0] + numbers[1] + numbers[2]); // Г

    numbers[4] = calcNum(numbers[0] + numbers[1]); // Д
    numbers[5] = calcNum(numbers[0] + numbers[2]); // Е
    numbers[6] = calcNum(numbers[4] + numbers[5]); // Ж
    numbers[7] = calcNum(numbers[1] + numbers[2]); // З

    numbers[8] = Math.abs(numbers[0] - numbers[1]) || 22; // И
    numbers[9] = Math.abs(numbers[0] - numbers[2]) || 22; // К
    numbers[10] = Math.abs(numbers[8] - numbers[9]) || 22; // Л 
    numbers[11] = Math.abs(numbers[1] - numbers[2]) || 22; // М
    numbers[12] = calcNum(numbers[8] + numbers[9] + numbers[10] + numbers[11]) || 22; // Н

    for (let index = 0; index < numbers.length; index++) {
        map_elements[index].textContent = numbers[index].toString();
        table_elements[index].textContent = numbers[index].toString();
    }

    document.getElementById('table').classList.remove('invisible');
    document.getElementById('nresult').classList.remove('invisible');
}

function CalculateButtonOnClick () {
    let day = parseInt(document.getElementById('date-day').value);
    if ((day <= 0) || (day > 31)) { console.error("Wrong day"); return}

    let month = parseInt(document.getElementById('date-month').value);
    if ((month <= 0) || (month > 12)) { console.error("Wrong month"); return}

    let year = parseInt(document.getElementById('date-year').value);
    if ((year <= 0) || (year > 9999)) { console.error('Wrong year'); return}

    Calculate(day, month, year);
}

let calc_button = document.getElementById('calculate-button');
calc_button.addEventListener("click", CalculateButtonOnClick);
