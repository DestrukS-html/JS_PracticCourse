let count = 3 // Ко-во
let price = 110 // Цена товара
let percent = 14 // Скидка в процентах

//Введите ваше решение ниже
let firstCost = count * price / 100 * percent
let total = count * price - firstCost

console.log(Math.floor(total))