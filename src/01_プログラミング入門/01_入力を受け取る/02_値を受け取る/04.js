/*
長さ 5 の文字列 S が標準入力から与えられます。文字列 S の中央の文字を出力してください。
 たとえば入出力例 1 に示す通り、S= power に対しては、文字 w を出力します。
*/

const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();

const middleCharacter = input[2];

console.log(middleCharacter);
