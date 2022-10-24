class Carros {
  marca;
  cor;
  gastoMedio;
  constructor(marca, cor, gastoMedio) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedio = gastoMedio;
  }
  calcularGasto(distancia, preco) {
    return distancia * this.gastoMedio * preco;
  }
}

const uno = new Carros("Fiat", "Roxo", 1 / 12);
console.log(uno.calcularGasto(800, 5));

const palio = new Carros("Fiat", "Preto", 1 / 10);
console.log(palio.calcularGasto(800, 5));
