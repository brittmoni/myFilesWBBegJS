function calculateBill(billAmount, taxRate) {
  // console.log('Running Calculate Bill!');
  const total = billAmount * (1 + taxRate);
  return total;
}

const myTotal = calculateBill(100, 0.13);
const myTotal2 = calculateBill(200, 0.13);

// console.log(myTotal, myTotal2);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = 'silly goose') {
  return `HEY ${name.toUpperCase()}`;
}

// console.log(yell(doctorize('britt')));
// console.log(doctorize(yell('britt')));

// If you want a function to fall back to a default rate while supplying values to other parameters, you must use undefined for the variable that will fall back
