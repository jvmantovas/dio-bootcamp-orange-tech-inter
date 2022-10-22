const etanol = 3.9;
const gasoline = 5.2;
const gasType = gasoline;
const kmPerLiter = 12;
const distance = 880;

let totalCost = distance / kmPerLiter;

if (gasType === etanol) {
  totalCost = (distance / kmPerLiter) * etanol;
} else {
  totalCost = (distance / kmPerLiter) * gasoline;
}

console.log(`O custo total da viagem é de R$${totalCost.toFixed(2)}`);
