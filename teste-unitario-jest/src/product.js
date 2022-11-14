module.exports = {
  calcTaxs(baseTax, comeplementTax) {
    if (comeplementTax < baseTax) {
      return baseTax;
    }
    return baseTax + comeplementTax;
  },
};
