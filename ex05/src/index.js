// Only change code below this line
function myPetsFunction(pets) {    
    return myPetsArray[pets].name;
}
var myPetsArray = [
{
animalType: "Dog" ,
name: "Pujdo"
},
{
animalType: "Cat" ,
name: "Maca"

},
{
animalType: "Bird" ,
name: "Tweety"
     
}
];

// Only change code above this line

console.log(myPetsFunction([1])); // Change this line
module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;
