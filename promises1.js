let cleanRoom = function(){
    return new Promise(function(resolve,reject){
        resolve('The room is cleaned ....')
    });
};

let removeGarbage = function(p){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(p +'....and you have removed the garbage also');
        },1000);
       
    }); 
};

let winIceCream = function(p){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(p +'....So you have won the icecream..Yay!!!');
        },1000);
    });
};

console.log('Promises execution startred ........');

//Handling Promises Here
cleanRoom().then(function(result){
    console.log("result 1  >>> "+ result);
    return removeGarbage(result);
}).then(function(result){
    console.log("result 2  >>> "+ result);
    return winIceCream(result);
}).then(function(result){
    console.log("result 3  >>> " +result);
})





/*
Promise.race([cleanRoom(),removeGarbage(),winIceCream()]).then(function(){
    console.log('One of the promises finished.....')
});

Promise.all([cleanRoom(),removeGarbage(),winIceCream()]).then(function(){
    console.log('All of the promises finished.....')
});
*/