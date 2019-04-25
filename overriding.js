//Javascript function overriding

function Animal() {};

function Dog() {};

Animal.prototype.sleep = function(){
    console.log('Animal is sleeping...');
}

Animal.prototype.eat = function(){
    console.log('Animal is eating...')
}

//very important line which copies all the 
//prototype properties of Animal to Dog prototype
Dog.prototype = new Animal();

//Now override animal eat fucntion
Dog.prototype.eat = function(){
    console.log('Dog is eating and Method Overriding is completed....');
}

var dog = new Dog();

dog.eat();
