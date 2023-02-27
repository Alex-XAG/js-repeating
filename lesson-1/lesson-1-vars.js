// "use strict"(строгий режим в коде модуля);
// type = "module" как атрибут в теге < script > (строгий режим по умолчанию) --- применен к этому модулю.

// Переменные  и типы примитивов
//const и let
// Логирование методом console.log()
// Уникальность идентификатора

// const x = 5;

// const x = 10; // (Uncaught SyntaxError: Identifier 'x' has already been declared )

// const x; // (Uncaught SyntaxError: Missing initializer in const declaration)

// const x = 10; // (const  всегда должно иметь значение)

// x = 5; //(Uncaught TypeError: Assignment to constant variable.) Переменной, которая была объявлена через const нельзя записать другое значение!!!

// let x = 5;

// x = 10; //(Значение переменной, которая объявлена через let можно изменять)

const age = 10;
const totalPrice = 200.74;
const userName = "Chelsi";
const message = "Добро пожаловать";
const isOpen = true;
const shouldConfirm = false;

// console.log("Цена: ", totalPrice);
// console.log(5, true); // Синий цвет в консоли - число или буль
// console.log("w;kfksdf"); // черный цвет в уонсоли - строка

// Оператор typeof

// const type = typeof 5; // Проверяет тип переменной

// console.log(type);

// Как window.alert() блокирует интерпретацию

// console.log("До алерта");
// alert(
//   "Останавливает процесс выполнения кода до тех пор, пока не нажмешь ОК во всплывающем окне alert"
// );
// console.log("После");
