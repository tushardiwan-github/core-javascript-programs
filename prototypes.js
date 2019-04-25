// const food  = {
//         init :  function(type){
//             this.type = type;
//         },
//         eat : function(){
//             console.log('you ate '+ this.type);
//         }
// }

//food.init('waffel');
//food.eat();

//const carrot = new Object(food); //creating an empty object and it assigns food as a fallback option for new objects

// const waffel = new Object(food);

// food.eat = function() {
//     console.log('YOU ATE TOTALLY A NEW FOOD CALLED AS ' + this.type.toUpperCase());
// }

// carrot.init('carrot');
// carrot.eat();



// waffel.init('waffel');
// waffel.eat();


//You have created a constructor function and it invokes on 'new' keyword.
//Function created and used as a JS OBJECT called as >>> Functional Class Pattern

function Bear(type){
    this.type= type;
}

Bear.prototype.growl = function(){
    console.log('The ' + this.type +' bear says grrr..');
}

var polar = new Bear('polar');

var grizzly = new Bear('grizzly');

console.log(polar.growl());
console.log(grizzly.growl());


//Prototype based class creation (Widely used.....)>>

function User(name,age){
    this.name = name;
    this.age = age;
}

User.prototype.getAddress = function(){
    let address = 'Pune'
    return address;
}

User.prototype.sayHi = function(){
    console.log('Person name is ' +this.name+ ' & age is ' +this.age+ ' and lives ' + this.getAddress());
}


const user = new User('Tushar' , 30);

user.sayHi();



















