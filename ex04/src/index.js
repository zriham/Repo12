// Only change code below this line
function sumFibonacci(num){
    var previousNumber = 0;
    var currentNumber = 1;
    var number = 0;
    while(currentNumber <= num){
        if (num === 1) {
            number = 1;            
        }
        else if (currentNumber % 2 !== 0) {           
            number += currentNumber;     
        }
        currentNumber += previousNumber;
        previousNumber = currentNumber - previousNumber;
    }
    return number;
}
// Only change code above this line
console.log(sumFibonacci(1)); // Change this line
console.log(sumFibonacci(10)); // Change this line
console.log(sumFibonacci(20)); // Change this line
console.log(sumFibonacci(4)); // Change this line
console.log(sumFibonacci(-5)); // Change this line
module.exports = sumFibonacci;