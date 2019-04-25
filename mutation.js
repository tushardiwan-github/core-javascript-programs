function mutation(originalarray){
    originalarray[0]= 'new value';
    return originalarray;
}

var array = ['old value','another value'];

console.log ('The old araay is ' + JSON.stringify(array));
console.log ('The new muataion araay is  ' + JSON.stringify(mutation(array)));