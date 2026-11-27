// Задание 1
console.log("Привет");
console.log("Привет");

// Задание 2
for (let number = 1; number <= 5; number += 1) {
  console.log(number);
}

// Задание 3
for (let number = 7; number <= 22; number += 1) {
  console.log(number);
}

// Задание 4
const obj = {
  Коля: "200",
  Вася: "300",
  Петя: "400",
};

for (const employee in obj) {
  console.log(`${employee} — зарплата "${obj[employee]}" долларов.`);
}

// Задание 5
let num = 1000;
let iterations = 0;

while (num > 50) {
  num /= 2;
  iterations += 1;
}

console.log(num);
num = iterations;
console.log(num);

// Задание 6
const firstFriday = 5;

for (let day = firstFriday; day <= 31; day += 7) {
  console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}
