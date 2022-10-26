// 1) Crie um programa que dado um número imprima a sua tabuada.

const num = 2;

for (let i = 1; i <= 10; i++) {
  console.log(`O resultado é: ${i * num}`);
}

// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
  if (i % 2 === 0) {
    console.log(numeros[i]);
  }
}

// 3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".
const nomes = [
  "joao",
  "pedro",
  "valdemar",
  "vitor",
  "marta",
  "claudia",
  "eline",
  "vilma",
];
for (let i = 0; i < nomes.length; i++) {
  if (nomes[i].startsWith("v")) {
    console.log(nomes[i]);
  }
}

// 4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;
// const numPares = [];
// for (let i = 10; numPares.length < 50; i++) {
//   numPares.push();
//   if (i % 2 === 0) {
//     console.log(numPares[i]);
//   }
// }

// 5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
//    Ex de lista = [2, 7, 3, 8, 10, 4]
const medias = [2, 7, 3, 8, 10, 4];
for (let i = 0; i < medias.length; i++) {
  if (medias[i] < 5) {
    console.log(medias[i]);
  }
}

// 6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
//    Ex de lista de notas = [2, 7, 3, 8, 10, 4]
const notas = [2, 7, 3, 8, 10, 4];
