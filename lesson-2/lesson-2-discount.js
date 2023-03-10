// Напиши скрипт подсчета суммы покупки со скидкой в зависимости
// от потраченой суммы за все время(партнерская программа)

// - Общая сумма потраченого хранится в переменной totalSpent
//     - Сумма текущего платежа хранится в переменной payment
//     - Скидка хранится в переменной discount

//     - Если потревено [100 - 1000] - бронзовый пертнер, скидка 2 %
//     - если потрачено[1000 - 5000] - серебряный партнер, скидка 5 %
//     - Если потрачено больше 5000 - золотой партнер, скидка 10 %
//     - Если потрачено меньше 100 - не партнер, скидка 0 %

//     - В результате вывести сообщение
// "Оформляем заказ на сумму (сумма) со скидкой (скидка)"

let totalSpent = 2000;
let payment = 500;
let discount = 0;

if (totalSpent >= 100 && totalSpent < 1000) {
  console.log("бронзовый пертнер, скидка 2 %");
  discount = 0.02;
} else if (totalSpent >= 1000 && totalSpent < 5000) {
  console.log("серебряный партнер, скидка 5 %");
  discount = 0.05;
} else if (totalSpent > 5000) {
  console.log("золотой партнер, скидка 10 %");
  discount = 0.1;
} else {
  console.log("Не партнер, скидка 0%");
}

payment -= payment * discount;

console.log(
  `Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`
);

totalSpent += payment;

console.log(`Общая сумма потраченого в магазине ${totalSpent}`);
