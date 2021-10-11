/*
Reduce

Some todos os números de um array
Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.
*/

function randomArray(size) {
  const array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 10));
  }
  return array;
}

const numbers = randomArray(Math.random() * 100);

//sum numbers in array with reduce
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

//function to calculate the final balance
function finalBalance(balance, prices) {
  return balance - prices.reduce((acc, curr) => acc + curr, 0);
}

const prices = randomArray(Math.random() * 20);
const balance = Math.floor(Math.random() * 100);
const finalBalanceReseult = finalBalance(balance, prices);

console.log(`Saldo final = ${finalBalanceReseult}`);