"use strict"

// Работа с датами

// const now = new Date(); // - создали новую дату и поместили ее в переменную now

//const now = new Date(2020, 5 , 1 , 20) // - год , месяц , день , час (месяц это индекс(начинается с нуля))

const now = new Date();

console.log(now.setHours(18));
console.log(now);


/*console.log(now.getFullYear()); // - получить год

console.log(now.getMonth());

console.log(now.getDate());

console.log(now.getDay());

console.log(now.getHours());

console.log(now.getUTCHours());*/

console.log(now.getTimezoneOffset());

console.log(now.getTime());

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert('Цикл отработал за ${end - start} милисекунд')



