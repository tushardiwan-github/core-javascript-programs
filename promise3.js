//promise constructor
var promise = new Promise(function(resolve,reject){
    return resolve(2);
})

promise.then(function(val){
    console.log(val);
    return val + 2;
}).then(function(val){
    console.log(val);
    return val;
}).then(function(val){
    console.log('Prmises closed now')
})