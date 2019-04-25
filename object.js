// //In a web page, global variables belong to the window object.
// //Variable Lifetime
// //Global variables live as long as your application (your window / your web page) lives.

// //Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.


// var test = new Object();

// test.name = 'testObjectName';
// test.sirName = 'testObjectSirname';
// test.demo = function(){
// 	console.log('Hello World');
// }

// test.demo();

// //console.log(test);

// //to assign proto value to an object
// test.__proto__.name = 'Rutuja';

// console.log(test.name);

// //to delete object property
// delete(test.name);

// console.log(test.name);

// console.log(JSON.stringify(test));


// const person = {
//     firstName : 'Steve',
//     lastName : 'Smith',
//     age : 34,
//     email : 'steve.smith@aol.com',
//     hobbies : ['music','sports'],
//     address : {
//         city :'Pune',
//         state:'maharashtra'
//     },
//     getBirthYear : function(){
//         return 1989;
//     }
// }

// let val;
// val = person;

// val = person.firstName;

// val = person.lastName;

// val = person.age;

// val = person.email;

// val = person.hobbies;

// val = person.address.state;

// val = person.getBirthYear();

// console.log(val);

// let id;

// if(typeof id !== 'undefined'){
//     console.log(`Id is ${id}`)
// }
// else{
//     console.log(`Id is not present`);
// }


const todo = {
    add : function(){
        console.log('todo add ....');
    },
    edit : function(id){
        console.log(`todo edit ${id}`);
    }
}

todo.delete = function(){
    console.log('todo delete...');
}


todo.add();
todo.edit(22);
todo.delete();