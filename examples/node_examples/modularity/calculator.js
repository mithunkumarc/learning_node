var calculator = {
    add(x,y){
        return x + y;
    },
    subtract(x,y){
        return x - y;
    },
    multiply(x,y){
        return x * y;
    },
    divide(x,y){
        return x/y;
    },
}

//default vlaue of module exports is {}

module.exports = calculator;

// compile this file before importing
// node calculator.js