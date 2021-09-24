// Only change code below this line
function rangeOfNumbers(startN, endN) {
    if (endN < startN){
        return "The starting number will always be less than or equal to the ending number";
      
    }else if (startN - endN === 0){
        return [startN];
    }else{      
      var numbers = rangeOfNumbers(startN, endN-1);
      numbers.push(endN);
      return numbers;

    }
}  
// Only change code above this line
console.log(rangeOfNumbers(1, 7)); //  Change this line
console.log(rangeOfNumbers(3, 10)); //  Change this line
console.log(rangeOfNumbers(5, 5)); //  Change this line
console.log(rangeOfNumbers(7, 5)); //  Change this line
module.exports = rangeOfNumbers;