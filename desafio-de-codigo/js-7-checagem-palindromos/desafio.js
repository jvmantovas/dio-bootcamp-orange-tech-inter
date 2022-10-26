// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let resultado = "digital";
console.log(checaPalindromo(resultado));

//TODO:Retorne TRUE ou FALSE, caso a "palavra" seja ou não um Palíndromo.

function checaPalindromo(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return "FALSE";
    }
  }
  return "TRUE";
}
