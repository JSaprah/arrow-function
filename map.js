// Using for loop
let nums = [1,2,3,4,5];
let results = [];

for (let num of nums){
    results.push(num*2)
}
console.log("For loop: ",results)

//Using map()
const multiplyTwo = function(num){
    return num * 2;
}
const mapResults = nums.map(multiplyTwo);
console.log("map result:",mapResults);

//Using map simplified
const simplified = nums.map (function(num){return num*2})
console.log("simplified:", simplified);

//Simplify using arrow operator
const arrow = nums.map (num => num * 2);
console.log("arrow",arrow);