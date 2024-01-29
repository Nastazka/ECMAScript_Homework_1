//Задание 1.
//Дан массив const arr = [1, 5, 7, 9]
// с помощью Math.min и spread оператора,
//найти минимальное число в массиве, решение
//задание должно состоять из одной строки

const arr = [1, 5, 7, 9];
const minValue = Math.min(...arr);
console.log(minValue); // 1

//Задание 2.
//Напишите функцию createCounter, которая
//создает счетчик и возвращает объект с двумя
//методами: increment и decrement. Метод increment
//должен увеличивать значение счетчика на 1, а метод
//decrement должен уменьшать значение счетчика на 1.
//Значение счетчика должно быть доступно только через
//методы объекта, а не напрямую.

// function createCounter() {
//     let count = 0;
//     const counter = {
//         increment() {
//         count++;
//         },
//         decrement() {
//         count--;
//         }
//     };
//     return counter;
// }

//Задание 3.
//Напишем функцию, которая будет находить факториал числа с использованием рекурсии:
// примеры вызова функции
//console.log(factorial(5)); // выводит 120 (5 * 4 * 3 * 2 * 1)
//console.log(factorial(0)); // выводит 1 (по определению факториала)

// function factorial(n) {
//     // Базовый случай
//     if (n === 0) {
//       return 1;
//     }
  
//     // Рекурсивный случай
//     return n * factorial(n - 1);
// }

// console.log(factorial(5)); // выводит 120
// console.log(factorial(0)); // выводит 1

//Задание 4.
//Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
//*Пример**
//const rootElement = document.getElementById('root');
//const targetElement = findElementByClass(rootElement, 'my-class');
//console.log(targetElement);

// function findElementByClass(rootElement, className) {
//     // Базовый случай
//     if (!rootElement) {
//       return null;
//     }
  
//     // Рекурсивный случай
//     for (const child of rootElement.children) {
//       if (child.classList.contains(className)) {
//         return child;
//       }
  
//       const foundElement = findElementByClass(child, className);
//       if (foundElement) {
//         return foundElement;
//       }
//     }
  
//     return null;
// }