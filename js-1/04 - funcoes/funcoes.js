function applyDiscount(price, discount) {
  return price - price * (discount / 100);
}

function applyTax(price, tax) {
  return price + price * (tax / 100);
}

const labelPrice = 100;
const paymentMethod = 4;

if (paymentMethod === 1) {
  console.log(
    `O valor total com desconto para débito será R$${applyDiscount(
      labelPrice,
      10
    )}`
  );
} else if (paymentMethod === 2) {
  console.log(
    `O valor total com desconto para dinheiro ou pix será R$${applyDiscount(
      labelPrice,
      15
    )}`
  );
} else if (paymentMethod === 3) {
  console.log(`O valor total para crédito até 2x será R$${labelPrice}`);
} else {
  console.log(
    `O valor total com acréscimo de juros para crédito acima de 2x será R$${applyTax(
      labelPrice,
      10
    )}`
  );
}
