// Задание 1
function minOfTwo(first, second) {
  return first < second ? first : second;
}

console.log(minOfTwo(8, 4));
console.log(minOfTwo(6, 6));

// Задание 2
function getParityMessage(number) {
  return number % 2 === 0 ? "Число четное" : "Число нечетное";
}

console.log(getParityMessage(4));
console.log(getParityMessage(5));

// Задание 3
function logSquare(number) {
  console.log(number ** 2);
}

function getSquare(number) {
  return number ** 2;
}

logSquare(4);
console.log(getSquare(5));

// Задание 4
function correctAge(age) {
  const numericAge = Number(age);

  if (
    age === null
    || (typeof age === "string" && age.trim() === "")
    || isNaN(numericAge)
    || numericAge < 0
  ) {
    return "Вы ввели неправильное значение";
  }

  if (numericAge <= 12) {
    return "Привет, друг!";
  }

  return "Добро пожаловать!";
}

alert(correctAge(prompt("Сколько вам лет?")));

// Задание 5
function multiplyNumbers(firstValue, secondValue) {
  const firstNumber = Number(firstValue);
  const secondNumber = Number(secondValue);
  const firstIsEmpty = typeof firstValue === "string" && firstValue.trim() === "";
  const secondIsEmpty = typeof secondValue === "string" && secondValue.trim() === "";

  if (
    firstValue === null
    || secondValue === null
    || firstIsEmpty
    || secondIsEmpty
    || isNaN(firstNumber)
    || isNaN(secondNumber)
  ) {
    return "Одно или оба значения не являются числом";
  }

  return firstNumber * secondNumber;
}

console.log(multiplyNumbers("3", "4"));
console.log(multiplyNumbers("не число", 4));

// Задание 6
function getCubeMessage(value = prompt("Введите число")) {
  const number = Number(value);

  if (
    value === null
    || (typeof value === "string" && value.trim() === "")
    || isNaN(number)
  ) {
    return "Переданный параметр не является числом";
  }

  return `${number} в кубе равняется ${number ** 3}`;
}

console.log(getCubeMessage());

for (let number = 0; number <= 10; number += 1) {
  console.log(getCubeMessage(number));
}

// Задание 7
const circle1 = {
  radius: 5,
  getArea() {
    return Math.PI * this.radius ** 2;
  },
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  },
};

const circle2 = {
  radius: 10,
  getArea() {
    return Math.PI * this.radius ** 2;
  },
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  },
};

console.log(circle1.getArea(), circle1.getPerimeter());
console.log(circle2.getArea(), circle2.getPerimeter());
