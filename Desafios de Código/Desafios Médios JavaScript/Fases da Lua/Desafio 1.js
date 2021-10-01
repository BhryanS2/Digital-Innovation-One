let lines = gets().split('\n');

let line = lines.shift().split(" ");
let inicio = parseInt(line[0]);
let final = parseInt(line[1]);

if (inicio >= 0 && final <= 2) print("nova");
else if (inicio < final && final <= 96) print("crescente");
else if (inicio >= 97 || final >= 97) print("cheia");
else print("minguante");