//Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.

camelize("background-color") == "backgroundColor";
camelize("list-style-image") == "listStyleImage";
camelize("-webkit-transition") == "WebkitTransition";

function camelize(str) {
    const arr = str.split("-");
    const string = arr.reduce((accum, item) => {
        return accum + item[0].toUpperCase() + item.slice(1);
    });
    console.log(string);
}

// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
// Функция должна возвращать новый массив и не изменять исходный.

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

function filterRange(arr, start, finish) {
    const gettingArray = arr.filter((item, index) => {
        if (item >= start && item <= finish) {
            return true;
        }
    });
    console.log(gettingArray);
}

// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и
// удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.

let arra = [5, 3, 8, 1];

filterRangeInPlace(arra, 1, 4); // удалены числа вне диапазона 1..4

function filterRangeInPlace(array, start, finish) {
    let finAr = [];
    array.forEach((item, index) => {
        if (item < start || item > finish) {
          array.splice(index, 1);
        }
    });
}


console.log(arra);