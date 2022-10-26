// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let A = 50;
let B = 50;

//TODO: Imprima se os valores numéricos passados são iguais ou não.

function checarNumeros(a, b) {
  if (a === b) {
    console.log("Sao iguais!");
  } else {
    console.log("Nao sao iguais!");
  }
}

checarNumeros(A, B);
