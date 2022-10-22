const nota1 = 8;
const nota2 = 7;
const nota3 = 9;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
  console.log(
    "A média deste aluno é: " + media.toFixed(2) + " e ele está reprovado."
  );
} else if (media >= 5 && media <= 7) {
  console.log(
    "A média deste aluno é: " + media.toFixed(2) + " e ele está de recuperação."
  );
} else {
  console.log(
    "A média deste aluno é: " + media.toFixed(2) + " e ele está aprovado."
  );
}
