/*

bind()
The official docs say: The bind() method creates a new function that, 
when called, has its this keyword set to the provided value. 

(It actually talks about even more stuff, but we’ll leave that for another time :) )

*/

//create a new object

var obj1 = {
    firstName : 'Pika',
    lastName : 'Chu',
    getFullname : function(){
        var fullName = this.firstName + '  ' + this.lastName;
        return fullName;
    } 
};

//create new function which will consume function from outside object

var obj2 = function(){
    console.log('Hi There I called you .....' + this.getFullname());
}

//bind the reference of this of obj1 with obj2
var obj3 = obj2.bind(obj1); //reference of 'this' has been bind with this function now!!!


// 'logName' is a function now, important here

obj3();