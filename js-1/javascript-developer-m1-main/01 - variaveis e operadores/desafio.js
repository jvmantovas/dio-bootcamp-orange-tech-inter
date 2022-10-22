const gasPrice = 5.79;
const kmPerLiter = 12;
const distance = 100;
const totalCost = (distance / kmPerLiter) * gasPrice;

console.log(
  `O gasto total em combustível nesta viagem será de R$${totalCost.toFixed(2)}.`
);
