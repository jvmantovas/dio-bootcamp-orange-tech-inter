// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let a = 7; //antes era ParseInt(gets());
let N = 49; //antes era ParseInt(gets());

//TODO:  Retorne o valor da soma de todos múltiplos de "A" até o seu limite "N".

function calcularSoma(a, N) {
  const multiplos = N / a;
  const soma = (multiplos * (multiplos + 1)) / 2;
  const somaMultiplos = a * soma;
  return somaMultiplos;
}

console.log(calcularSoma(a, N));
