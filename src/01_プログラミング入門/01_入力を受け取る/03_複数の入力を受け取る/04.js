/*
 2つの正の整数 A,B が空白区切りで入力されます。 A と B のうち一の位が小さい方の値を出力してください。

 ただし、A と B の一の位は異なることが保証されています。

 補足
 整数の一の位はその数を 10 で割った余りと等しいです。
 たとえば 17 の一の位は 7 ですが、これは 17 を 10 で割った余りと一致します。
*/

const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();

const [A, B] = input.split(" ").map((a) => Number(a));

if (A % B === 0) {
  console.log("Yes");
} else {
  console.log("No");
}
