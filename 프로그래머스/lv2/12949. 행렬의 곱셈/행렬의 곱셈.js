function solution(arr1, arr2) {
  return arr1.map((row) =>
    arr2[0].map((v, i) => 
      row.reduce((acc, cur, i2) => 
        acc + cur * arr2[i2][i], 0
      )
    )
  );
}
