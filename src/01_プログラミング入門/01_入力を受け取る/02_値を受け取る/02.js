/*
 1 以上 100 以下の整数 N が標準入力から与えられます。
 N を 5 で割ったあまりを標準出力するプログラムを作成してください。
*/

const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();

const result = (input) => input % 5;
console.log(result(input));
