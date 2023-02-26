// /////////////Parse of number with Number.parseInt() and Number.parseFloat()

let elementWidth = "50px";
// elementWidth = Number.parseInt(elementWidth); // parseInt() return целые числа
// console.log("elementWidth", elementWidth); // 50

let elementHeight = "200.74px";
// elementHeight = Number.parseFloat(elementHeight); // parseFloat() return  дробные числа
// console.log("elementHeight", elementHeight); // 200.74

// //////////  Метод-число toFixed(digits)
// Матрешки на примере console.log(Number(число.toFixed(digits)))

let salary = 1300.16472;
salary = Number(salary.toFixed(2)); // 2я вложенность (матрешка) позволяет уйти от длинного кода
// salary = Number(salary)

// console.log(salary);

// console.log(Number(salary.toFixed(2))); // альтернатива

// ///////////// Приведение (перобразование) к числу с Number(value)
// Значение NaN (Not a Number) and method Number.isNaN(value)

let quantity = "30";
let value = " this string is impossible to do a number";

// console.log(Number(quantity)); // 30
// console.log(Number(value)); // NaN

// console.log(Number("5")); // 5 is number

// console.log(Number(true)); // 1 (false will be number 0)

// console.log(Number("kajeh")); // NaN

// console.log(5 / 0); // infinity

// ////////////////////////////// Object Math
// Возведение в степень
// Exponent operator

// console.log(Math);// object Math

// const base = 2;
// const power = 5;

// const result = Math.pow(base, power);

// console.log(result); // 32

// console.log(Math.pow(base, power)); // 32  (alternative syntax)

// console.log(base ** power); // 32 (exponent)  (Math.pow(base, power) === (base ** power))

//////////////////////////// Напиши скрипт, который просит пользователя ввести число и степень, возводит это число в эту степень и выводит результат в консоль

// 1. Попросить ввести число и сохранить в переменную
// let base = prompt("Give a number");
// base = Number(base);

// console.log(base);

// 2. попросить ввести степень и сохранить в переменную

// let power = prompt('Давай степень')
// power = Number(power);

// console.log(power);
// 3. Возвести введенные данные в степень и вывести в консоль

// const result = base ** power;

// console.log(result);

/////////////////// Генерим случайные числа
// Math.random()
//  Math.round()

// console.log(Math.random()); // always return random number from 0 to 1 (0.6021559663136198)

// Math.random() * (max - min) + min /// Формула для получения случайного числа где max-максимальное число (ДО), min - минимальное число (ОТ)

// const max = 50;
// const min = 30;

// const result = Math.round(Math.random() * (max - min) + min); // Math.round округляет до целых чисел

// console.log(result); // даст случайное число от 30 до 50

////////////////////////// EXEMPLE

// const colors = ["tomato", "teal", "orange", "deepink"];

// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);

// const color = colors[index];

// console.log(color);
// document.body.style.backgroundColor = color;
