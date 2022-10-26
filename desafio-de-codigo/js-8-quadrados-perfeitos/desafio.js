// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let n = 13;

const dp = new Array(n + 1).fill(Infinity);
dp[0] = 0;

//TODO: Com base no valor total, retorne o menor número de quadrados perfeitos.

const somaQuadrados = (num) => {
  for (let i = 1; i * i <= num; i++) {
    for (let j = i * i; j < dp.length; j++) {
      if (dp[j] == 0) {
        dp[j] = dp[j - i * i] + 1;
      } else {
        dp[j] = Math.min(dp[j - i * i] + 1, dp[j]);
      }
    }
  }
  return dp[num];
};

console.log(somaQuadrados(n));
