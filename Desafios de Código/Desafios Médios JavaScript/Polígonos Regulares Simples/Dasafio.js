/*
Digital innovation One
Polígonos Regulares Simples
*/
let lines = gets().split("\n");
let line = lines.shift().split(' ');
let n = parseInt(line[0]);
let m = parseInt(line[1]);

const getPerimeter = (n, m) => {
    return (n * m);
}

print(getPerimeter(n, m));