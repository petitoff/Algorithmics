const isMatch = function (s, p) {
  const dfs = (i, j, memo = {}) => {
    const key = i + ',' + j;

    if (key in memo) return memo[key]; // memo

    if (i >= s.length && j >= p.length) return true;
    if (j >= p.length) return false;

    const match = i < s.length && (s[i] == p[j] || p[j] == '.');

    if (j + 1 < p.length && p[j + 1] == '*') {
      memo[key] = dfs(i, j + 2, memo) || (match && dfs(i + 1, j, memo));
      return memo[key];
    }
    if (match) {
      memo[key] = dfs(i + 1, j + 1, memo);
      return memo[key];
    }

    memo[key] = false;
    return memo[key];
  };

  return dfs(0, 0);
};

console.log(isMatch('aa', 'a*'));
