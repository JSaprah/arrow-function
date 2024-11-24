//No spread operator
// Both values remain same
let arr = [1,2,3];
let arr2 = arr;

arr2.push(4);

console.log("arr1:", arr);
console.log("arr2:", arr2);

//Copying an array

let arr3 = [4,5,6];
let arr4 = [...arr3];

arr4.push(7);

console.log("arr3:", arr3);
console.log("arr4:", arr4);

//Copying an object

let obj = {a:1, b:2, c:3};
let obj2 = {...obj, d:4};
let obj3 = {...obj, b:5};

obj2 = {...obj2, e:7};

console.log("object 1:", obj);
console.log("object 2:",obj2);
console.log("object 3:",obj3);

//Copying part of array/ object

let arr5 = [...arr, {...obj}, ...arr4, "x","y","z"];
console.log("arr5:", arr5);