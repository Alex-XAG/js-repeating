/////////////////////////// lenght  свойство - длина строки

// const message = "В этой строке 26 символов.";

// console.log(message.length) // 26

////////// Кoнкатенация строк

const firstName = "Chelsy";
const lastName = "Emerald";
const fullName = firstName + " " + lastName; // ковычки - это пробел между строками

console.log(fullName); // Chelsy Emerald

//////// Напиши скрипт который вывеедт строку в формате:
// "Гость х у поселяется в z номер q"
// подставив вместо  x y z q значения переменных

const room = 716;
const type = "VIP";

////// Bad decision

// const welcomeMsgBad =
//   "Гость " +
//   firstName +
//   " " +
//   lastName +
//   " поселяется в " +
//   type +
//   " номер " +
//   room;
// console.log(welcomeMsgBad);

//// Good decision

const welcomeMsgGood = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`;

console.log(welcomeMsgGood);

///////////////////////////// Шаблонные строки

const quantity = 5;
const orderMsg = `Вы заказываете ${quantity} холодильников`;

console.log(orderMsg);

/////////// Normalisation by method toLowerCase()

//// what are we search?

// let brand = prompt('Input a brand!');
// brand = brand.toLowerCase();

// console.log(brand);

/////// Search in the string by method includes()

const blacklistedWord1 = "span";
const blacklistedWord2 = "sale";

const string1 = "Hi, this is not a span, I propose you a million!";
const string2 = "The biggest SALE of this week, do not miss it!!!";
const string3 = "Promotion company #fatlivesmatter";

console.log(string1.includes(blacklistedWord1)); // true
console.log(string1.includes(blacklistedWord2)); // false
console.log(string2.includes(blacklistedWord1)); // false

const normalizedString2 = string2.toLowerCase(); // All letters will be lower
console.log(normalizedString2.includes(blacklistedWord2)); // true
console.log(string3.includes(blacklistedWord2)); // false
console.log(string3.includes(blacklistedWord2)); // false
