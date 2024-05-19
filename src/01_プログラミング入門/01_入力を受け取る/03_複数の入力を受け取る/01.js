/* 
 2 つの正の整数 A,B が空白区切りで入力されます。
 A+B の値を出力してください。
*/

const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();

const [A, B] = input.split(" ").map((a) => Number(a));

console.log(A + B);
