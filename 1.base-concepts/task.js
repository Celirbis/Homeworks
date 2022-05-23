"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  if (d < 0) return arr;
  if (d === 0) arr.push(-b / (2 * a));
  else {
    arr.push( (-b + Math.sqrt(d)) / (2 * a) ); 
    arr.push( (-b - Math.sqrt(d)) / (2 * a) );
  }
  return arr; 
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let intPercent = parseInt(percent);
  if (Number.isNaN(intPercent)) return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  let intContribution = parseInt(contribution);
  if (Number.isNaN(intContribution)) return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  let intAmount = parseInt(amount);
  if (Number.isNaN(intAmount)) return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;

  let loan = intAmount - intContribution; //тело кредита
  let today = new Date();
  let months = Math.round( (date - today) / 86400000 / 30.5); //перевод из милисекунд в месяцы
  let p = percent / 1200; //ставка за месяц
  let payment = loan * (p + (p / (Math.pow((1 + p), months) - 1)));
  totalAmount = Number((months * payment).toFixed(2)); 

  console.log(totalAmount);
  return totalAmount;
}
