
// A promise is a special JavaScript object that links the “producing code” and the “consuming code” together. In terms of our analogy: this is the “subscription list”. The “producing code” takes whatever time it needs to produce the promised result, and the “promise” makes that result available to all of the subscribed code when it’s ready.



let promiseToCleanRoom = new Promise(function(resolve,reject){

//producing code goes here -logic 
let isClean = false;

if(isClean){
    resolve('Clean');
}
else{
    reject('not clean');
}
})


//Consuming code , what action to do after promise is resolve/reject goes here

promiseToCleanRoom.then(function(fromResolve){
    document.body.innerHTML = `Promise is resolved, Room is ${fromResolve}`;
    //console.log('Promise is resolved, Room is  ' + fromResolve);
}).catch(function(fromReject){
    document.body.innerHTML = `Promise is rejected, Room is ${fromReject}`;
    //console.log('Promise is rejected , and the room is ' +fromReject);
})

