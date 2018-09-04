const addGood = function (num1, num2) {
  const sum = num1 + num2;
  return sum;
}

render( addGood(4, 3) );


const num1 = 4; 
const addBad = function (num2) {
  const sum = num1 + num2;
  return sum;
}

render( addBad(3) );