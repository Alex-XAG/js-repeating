// cycle for

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);
// }

// console.log(";awkjf");

// Напиши скрипт, который подсчитывает общую сумму ЗП работников.
// КОЛ-ВО РАБОТНИКОВ ХРАНИТСЯ В ПЕРЕМЕННОЙ employees.
//  ЗП каждого работника - это случайное число от 500 до 5000
//  Записать сумму в переменную totalSalsry и вывести в консоль

// 1. Сделать переменные

const minSalary = 500;
const maxSalary = 5000;
const employees = 4;
let totalSalary = 0;

// 2. перебрать работников в цикле

for (let i = 1; i <= employees; i += 1) {
  // 3. Сгенерить случайную ЗП
  const salary = Math.round(
    Math.random() * (maxSalary - minSalary) + minSalary
  );

  console.log(`ЗП работника номер ${i} - ${salary}`);

  // 4. прибавить к тотал
  totalSalary += salary;
}

// 5. Лог
console.log("Total salary: ", totalSalary);

// Напиши скрипт, который подсчитывает сумму всех четных чисел.
// которые входят в диапазон чисел в переменных от min до max.
// Например, если min = 0 и max = 5, то дипазон 0-5, и в нем два четніх числа - 2 и 4, их сумма 6.
//
// 1.Объявить переменные
const min = 6;
const max = 13;
let total = 0;

// 2. Перебрать числа чере фор

for (let i = min; i <= max; i += 1) {
  // Проверяем остаток от деления
  if (i % 2 !== 0) {
    continue;
  }
  //   Пишем вычисление суммы
  total += i;
}
console.log(total);
