//순열 구하기
const permutation = (arr, n) => {
  const result = [];

  // DFS
  const dfs = (i, arr) => {
    // 탈출
    if (i === arr.length) {
      return result.push([...arr.slice(0, n)]);
    }

    for (let j = i; j < arr.length; j++) {
      //swap
      [arr[i], arr[j]] = [arr[j], arr[i]];
      //dfs
      dfs(i + 1, arr);
      //swap back
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };

  dfs(0, arr);
  return result;
};

console.log(permutation(['a', 'b', 'c', 'd'], 3));
