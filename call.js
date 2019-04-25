 /* 
call(), apply()
The official docs for call() say: The call() method calls a function with a given 
this value and arguments provided individually.

What that means, is that we can call any function, and explicitly specify what this 
should reference within the calling function. Really similar to the bind() method! 
This can definitely save us from writing hacky code (even though we are all still hackerzzz).

The main differences between bind() and call() is that the call() method:

1.Accepts additional parameters as well

2.Executes the function it was called upon right away.

3.The call() method does not make a copy of the function it is being called on.
call() and apply() serve the exact same purpose. The only difference between 
how they work is that call() expects all parameters to be passed in individually,
whereas apply() expects an array of all of our parameters. 

*/

var obj1 = {
    firstName : 'Pika',
    lastName : 'Chu',
    getName : function(){
        var fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
};

var obj2 = function(snacks , hobby){
    console.log('My name is ' + this.getName() +' I love ' + snacks +' & My hobby is ' + hobby )
}

//call implementation
obj2.call(obj1,'Sushi','Algorithms');



//apply implementation
obj2.apply(obj1,['Sushi','Algorithms']);