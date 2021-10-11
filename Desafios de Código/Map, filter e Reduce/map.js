/*
Map

  Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.
*/
// Sem this

function randomArray(size) {
  const array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 100));
  }
  return array;
}

const numbers = randomArray(Math.random() * 10);

const numbersx2 = numbers.map(number => number * 2);
console.log(numbersx2);

// com this

const Banana = {
  price: 3
}

const Pear = {
  price: 5
}

function mapArray() {
  const array = randomArray(Math.random() * 10);
  const BananaArray = array.map(function (item) {
		return item * this.price;
	}, Banana);
  const PearArray = array.map(function (item) {
		return item * this.price;
	}, Pear);
  return [BananaArray, PearArray];
}

console.log(mapArray());