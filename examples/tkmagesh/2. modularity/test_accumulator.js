var accFactory = require('./accumulator');

var acc1 = accFactory(1000);
console.log(acc1.getResult());
acc1.add(500);
console.log(acc1.getResult());
acc1.subtract(500);
console.log(acc1.getResult());
acc1.multiply(500);
console.log(acc1.getResult());


var acc2 = accFactory(2000);
console.log(acc1.getResult());
acc2.divide(500);
console.log(acc2.getResult());
