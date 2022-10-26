// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

//TODO: implemente a lógica de caracteres válidos e retorne se a string é valida ou não.

var isValid = function (s) {
  const stack = [];
  const characters = { ")": "(", "}": "{", "]": "[" };
  for (const char of s) {
    if (!characters[char]) {
      stack.push(char);
    } else if (stack.pop() !== characters[char]) {
      return false;
    }
  }
  return stack.length === 0;
};

console.log(isValid(gets()));
