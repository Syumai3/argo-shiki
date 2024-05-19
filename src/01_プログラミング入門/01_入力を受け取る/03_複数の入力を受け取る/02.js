/*
 2 つの正の整数 A,B が空白区切りで入力されます。 A と B のうち大きい方の値を出力してください。
 ただし、A と B の値は異なることが保証されています。
*/

const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();

const [A, B] = input.split(" ").map((a) => Number(a));

const maxValue = A > B ? A : B;

console.log(maxValue);
