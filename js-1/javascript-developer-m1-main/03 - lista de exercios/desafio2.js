const peso = 90;
const altura = 1.75;
const imc = peso / Math.pow(altura, 2);

if (imc < 18.5) {
  console.log(
    "Esta pesssoa tem o IMC " + imc + " e esta abaixo do peso ideal."
  );
} else if (imc >= 18.5 && imc <= 25) {
  console.log(
    "Esta pesssoa tem o IMC " + imc.toFixed(2) + " e esta com o peso ideal."
  );
} else if (imc > 25 && imc <= 30) {
  console.log(
    "Esta pesssoa tem o IMC " + imc.toFixed(2) + " e esta acima do peso ideal."
  );
} else if (imc > 30 && imc <= 40) {
  console.log("Esta pesssoa tem o IMC " + imc.toFixed(2) + " e esta obesa.");
} else {
  console.log(
    "Esta pesssoa tem o IMC " + imc.toFixed(2) + " e esta em obesidade grave."
  );
}
