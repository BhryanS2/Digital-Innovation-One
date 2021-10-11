/*
Filter

Filtre e retorne todos os números pares de um array.
*/

function randomArray(size) {
  const array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 100));
  }
  return array;
}

const numbers = randomArray(Math.random() * 100);

const arrayOfPair = numbers.filter(number => number % 2 === 0);
console.log(arrayOfPair);