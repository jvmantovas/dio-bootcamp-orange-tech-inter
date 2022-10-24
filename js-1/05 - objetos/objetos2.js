class Pessoa {
  nome;
  peso;
  altura;
  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }
  calcularImc() {
    return this.peso / (this.altura * this.altura);
  }
  classificarImc() {
    const imc = this.calcularImc();
    if (imc < 18.5) {
      return "Esta pesssoa tem o IMC " + imc + " e esta abaixo do peso ideal.";
    } else if (imc >= 18.5 && imc <= 25) {
      return (
        "Esta pesssoa tem o IMC " + imc.toFixed(2) + " e esta com o peso ideal."
      );
    } else if (imc > 25 && imc <= 30) {
      return (
        "Esta pesssoa tem o IMC " +
        imc.toFixed(2) +
        " e esta acima do peso ideal."
      );
    } else if (imc > 30 && imc <= 40) {
      return "Esta pesssoa tem o IMC " + imc.toFixed(2) + " e esta obesa.";
    } else {
      return (
        "Esta pesssoa tem o IMC " +
        imc.toFixed(2) +
        " e esta em obesidade grave."
      );
    }
  }
}

const jose = new Pessoa("José", 70, 1.75);
console.log(jose.classificarImc());

const joao = new Pessoa("Joao", 90, 1.75);
console.log(joao.classificarImc());
