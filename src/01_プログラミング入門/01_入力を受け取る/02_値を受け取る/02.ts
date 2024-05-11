// 1 以上 100 以下の整数 N が標準入力から与えられます。
// N を 5 で割ったあまりを標準出力するプログラムを作成してください。

function func_5で割った余り(N: number) {
  if (isNaN(N) || N < 1 || N > 100) {
    console.log("1から100の整数をいれてください");
  } else {
    console.log(N % 5);
  }
}

func_5で割った余り(51);
func_5で割った余り(40);
func_5で割った余り(-2);
func_5で割った余り(102);
