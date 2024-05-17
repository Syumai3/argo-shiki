/* 
 文字列 S が標準入力で与えられます。
 S を 3 回繰り返してできる文字列を出力するプログラムを作成してください。
回数を可変にできるようにカスタム
*/

const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();

const tripleRepeat = (input) => input.repeat(3);
console.log(tripleRepeat(input));
