var calculator = require('./calculator');
var x = 100, y = 20;
console.log(calculator.add(x,y));
console.log(calculator.subtract(x,y));
console.log(calculator.multiply(x,y));
console.log(calculator.divide(x,y));

// compile calculator.js first
// node calculator.js 
// node test_calculator.js 
// output : 
// 120
// 80
// 2000
// 5
