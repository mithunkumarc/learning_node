// exporting object (accumulator)

function accumulatorFactory(defaultResult){
    var result = defaultResult;
    var accumulator = {
        add(x){
            result += x;
        },
        subtract(x){
            result -= x;
        },
        multiply(x){
            result *= x;
        },
        divide(x){
            result /= x;
        },
        getResult(){
            //returning result
            return result;
        }
    };
    return accumulator;
}
module.exports = accumulatorFactory;
