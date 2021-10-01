/*
Digital innovation One
Teorema da Divisão Euclidiana
*/
let lines = gets().split("\n");
let line = lines.shift().split(' ');
let n = parseInt(line[0]);
let m = parseInt(line[1]);
let q = (a / b);
let r = a - b * q;

if (r < 0) {
    r += abs(b);
    q = (a - r) / b;
}

print(`${q} ${r}`);