// a > b и a < b - больше/меньше
// a >= b и a <= b - больше/меньше или равно
// a == b - равенство
// a != b - неравенство
// a === b - строгое равенство
// a !== b - строгое неравенство

const x = 5;
const y = 10;
const z = 5;

console.log("x > y:", x > y); // false
console.log("x < y:", x < y); // true
console.log("x < z:", x < z); // false
console.log("x <= z:", x <= z); // true
console.log("x === y:", x === y); // false
console.log("x === z:", x === z); // true
console.log("x !== y:", x !== y); // true
console.log("x !== z:", x !== z); // false

/////////// Операторы равенства
// ////////«Нестрогие» операторы равенства == и != выполняют преобразование типов сравниваемых значений к числу, что может привести к ошибкам, особенно у начинающих.

// // ❌ Плохо, выполняется приведение типов
// console.log(5 == "5"); // true
// console.log(5 != "5"); // false
// console.log(1 == true); // true
// console.log(1 != true); // false

/////////// Поэтому для проверки равенства или неравенства двух значений используются только операторы === (строгое равенство) и !== (строгое неравенство), которые не выполняют приведение типов операндов.

// ✅ Хорошо, приведение типов не выполняется
console.log(5 === "5"); // false
console.log(5 === 5); // true
console.log(5 !== "5"); // true
console.log(5 !== 5); // false
console.log(1 === true); // false
console.log(1 !== true); // true
