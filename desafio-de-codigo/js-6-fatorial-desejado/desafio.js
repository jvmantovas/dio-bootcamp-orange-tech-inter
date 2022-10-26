// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let n = 12;

if (n <= 2) {
  return n;
}

// TODO: Calcule o valor do fatorial de "n", atribuindo o retorno a "r".

const desajeitado = function (N) {
  if (N == 3) return 6;
  if (N == 2) return 2;
  if (N == 1) return 1;
  let res = 0;
  for (i = N; i >= 1; i = i - 4) {
    if (i == N) pos = 1;
    else pos = -1;
    switch (i) {
      case 3:
        res += -6;
        break;
      case 2:
        res += -2;
        break;
      case 1:
        res += -1;
        break;
      default:
        res = res + pos * Math.floor((i * (i - 1)) / (i - 2)) + (i - 3);
        break;
    }
  }
  return res;
};

console.log(desajeitado(n));
