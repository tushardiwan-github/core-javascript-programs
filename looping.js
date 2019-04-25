//ITERATING THROUGH LOOP NORMAL SCENARIOS
// for(let i =0; i<10; i++){
//     console.log(i);
// }

//ITERATING THROUGH ARRAYS
const cars = ['Tata','Hyundai','Toyota','Honda'];

// for(let i =0; i<cars.length; i++){
//     console.log(cars[i]);
// }


//USING FOR-EACH loop - NEAT AND CLEAN

// cars.forEach(function(current,index,array){
//     console.log(`${index} : ${current}`);
//     console.log(array);
// })

//MAP ITERATING with array of objects at a time only one

const person = 
    [
        {id: 1 , name : 'steve'},
        {id: 2 , name : 'rob'},
        {id: 3 , name : 'jack'}
    ];

const names = person.map(function(curr){
    return curr.name;
 }); 

 console.log('The names are ' +names);

// FOR - IN for ITERATING THROUGH PROPERTIES OF OBJECT

// const person = {
//     firstName : 'Steve',
//     lastName : 'Smith',
//     emailId : 'steve.smith@yahoo.com'
// }

// for(curr in person){
//     console.log(`${curr} : ${person[curr]}`);
// }

