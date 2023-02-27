// Напиши скрипт проверки подписки пользователя при доступе к контенту
// - Есть три типа подписки: free, pro и vip.
// -Получить доступ могут только пользователи pro и vip

const subscription = "pro";

const canAccessContent = subscription === "pro" || subscription === "vip";

console.log("Есть доступ к контенту? ", canAccessContent);
