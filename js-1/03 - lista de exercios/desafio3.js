const price = 40;
const paymentMethod = 4;

// 1 - À vista Débito, recebe 10% de desconto;
// 2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
// 3 - Em duas vezes, preço normal de etiqueta sem juros;
// 4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

if (paymentMethod === 1) {
  console.log(
    `O valor total com desconto para débito será R$${price - price * 0.1}`
  );
} else if (paymentMethod === 2) {
  console.log(
    `O valor total com desconto para dinheiro ou pix será R$${
      price - price * 0.15
    }`
  );
} else if (paymentMethod === 3) {
  console.log(`O valor total para crédito até 2x será R$${price}`);
} else {
  console.log(
    `O valor total com acréscimo de juros para crédito acima de 2x será R$${
      price * 1.1
    }`
  );
}
