function isValid(s: string): boolean {
  const stack: string[] = [];
  // https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type
  const pairs: Record<string, string> = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (pairs[char]) {
      stack.push(char);
    } else {
      if (stack.length === 0) return false;

      // 使用類型斷言 "!" 來確保 lastOpenBracket 不為 undefined
      const lastOpenBracket = stack.pop()!;

      if (pairs[lastOpenBracket] !== char) return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid('(]'));