var promise = new Promise(function(resolve){
    resolve(42);
});
promise.then(function(value){
    console.log('success : ' + value);
}).catch(function(error){
    console.error('error : ' + error);
});
