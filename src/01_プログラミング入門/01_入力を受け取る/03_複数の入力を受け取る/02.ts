// 2 つの正の整数 A,B が空白区切りで入力されます。 A と B のうち大きい方の値を出力してください。
// ただし、A と B の値は異なることが保証されています。

function func_大きい数を出力(A: number, B: number) {
  const bigNumber = A > B ? A : B;
  return console.log(bigNumber);
}

func_大きい数を出力(8, 4);
func_大きい数を出力(2, 4);

// 8
// 4
