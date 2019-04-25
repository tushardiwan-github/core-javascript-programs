const numbers = [1,2,3,44,67,78];
const numbers2 = new Array(23,45,56,67,78);
const fruit = ['Apple','Banana','Pear','Orange'];
const mixed = [12, 'hello', {a:2,b:5}, new Date()];

let val;
//Get the length of the array
//val = numbers.length;

// Is array 
//val = Array.isArray(numbers);

//Get single value
//val = numbers[2];

//Insert into array
//numbers[3] = 100;

//MUTATING ARRAYS : -

//Add to the end
numbers.push(500);

//Add on front
numbers.unshift(400);

//Take from the end
numbers.pop();

//Take from the front
numbers.shift();
//Splice values
numbers.splice(0,2);
//Reverse Arrays
numbers.reverse();
//Cpncatenate Arrays
let newArr = numbers.concat(numbers2);
//Sorting Arrays
fruit.sort();

//Sorting Numbers using compare callback function


val = numbers.length;
console.log(fruit);
console.log(newArr);
console.log(val);