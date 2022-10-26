// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let resultado = 15;
console.log(fizzBuzz(resultado));

//TODO: Caso o valor não seja múltiplo de 3 ou 5, exiba o número, conforme o enunciado.
function fizzBuzz(numero) {
  if (numero % 15 === 0) {
    return "FizzBuzz";
  }
  if (numero % 3 === 0) {
    return "Fizz";
  }
  if (numero % 5 === 0) {
    return "Buzz";
  }
  return numero;
}
