/*
 1 以上 100 以下の整数 N が標準入力で与えられます。
 N を 2 倍した値を標準出力するプログラムを作成してください。
*/

const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();

const doble = (input) => input * 2;
console.log(doble(input));
