var jsonparse = new Promise(function(resolve,reject){
    resolve(JSON.parse([{
        "name" : "tushar"
    }]));
})

jsonparse.then(function(data){
    console.log('It Worked ..',data);
}).catch(function(err){
    console.log('It Failed ..',err);
})
