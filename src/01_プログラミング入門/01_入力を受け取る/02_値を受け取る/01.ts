// 1 以上 100 以下の整数 N が標準入力で与えられます。
// N を 2 倍した値を標準出力するプログラムを作成してください。

function func_2倍にする(N: number) {
  if (isNaN(N) || N < 1 || N > 100) {
    console.log("入力が不正です。1以上100以下の整数を入力してください。");
  } else {
    // 条件を満たした場合、その数値を2倍にして出力
    console.log(N * 2);
  }
}

func_2倍にする(40);
