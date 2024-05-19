/*
 0 以上 23 以下の整数 X が標準入力から与えられます。
 現在の時刻が X 時のとき、日が変わる ( 24 時になる) まであと何時間かかるかを計算してください。
*/

const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();

console.log(24 - input);
