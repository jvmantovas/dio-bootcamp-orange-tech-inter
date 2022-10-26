// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75];

let valor = 4;

//TODO: Retorne o valor do elemento no Array junto de sua respectiva posição.

function buscaSequencial(i) {
  for (let i = 0; i < elementos.length; i++) {
    let i = valor;
    if (elementos.includes(valor)) {
      return console.log(
        "Achei " + valor + " na posicao " + elementos.indexOf(valor)
      );
    } else {
      return console.log("Numero " + valor + " nao encontrado!");
    }
  }
}

buscaSequencial(valor);
