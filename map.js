/**
 * The main methods are:

#1. new Map() – creates the map.
#2. map.set(key, value) – stores the value by the key.
#3. map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
#4. map.has(key) – returns true if the key exists, false otherwise.
#5. map.delete(key) – removes the value by the key.
#6. map.clear() – clears the map
#7. map.size – returns the current element count.

Iteration over Map
For looping over a map, there are 3 methods:

map.keys() – returns an iterable for keys,
map.values() – returns an iterable for values,
map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
 
*/

let map = new Map();
let john = {
    name : 'Tushar'
}


//chaining in map
map.set(john, 'str1')  // a string key
    .set(1, 'num1')     // a numeric key
    .set(true, 'bool1'); // a boolean key


//console.log(map.get(true));    
//map.delete(true);    
//let isKeyExist = map.has(john);
//console.log(isKeyExist);
//map.clear();
//let size = map.size;
//console.log(size);
console.log(map);



let entries = new Map([
    ['cucumber',100],
    ['Onion',200],
    ['Cabbage',300]
]);

for(let entry of entries){
    console.log(entry);
}

//console.log(entries);    