//Example 1

function foo(x) {
  var tmp = 3;

  return function (y) {
    console.log(x + y + (++tmp)); // will also log 16
  }
}

var bar = foo(2); // bar is now a closure.

bar(10);



// Example 2
function princess() {

    var adventures = [1,2,3,4,5];
    
    function princeCharming() { /* ... */ }
    
    var unicorn = { /* ... */ },
            dragons = [ /* ... */ ],
            squirrel = "Hello!";
    
        /* ... */
        
        
        return {
         story: function() {
                console.log('Inside Closure Function...');
                return adventures[adventures.length - 1];
            }
        };
    }
    
    var littleGirl = princess();
    
    littleGirl.story();


//Example 3 of closure, to print the value from 1 to 5
function Counter() {
    var counter = 0;
	return function IncreaseCounter(){
        return counter += 1;
    }
}
    
var counter = Counter();

for(i = 0; i<5; i++){
	console.log(counter());
}


//Example 4

function sayHello(name) {
    var text = 'Hello ' + name;
    var say = function() { console.log(text); }
    say();
  }
  sayHello('Joe');

  //using IIFE
  (function sayHello(name) {
    var text = 'Hello ' + name;
    var say = function() { console.log(text); }
    say();
  })('Joe');