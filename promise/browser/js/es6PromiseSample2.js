var promise = new Promise(function(resolve, reject){
	reject(42);
});
promise.then(function(value){
	console.log('success : ' + value);
}).catch(function(error){
	console.error('error : ' + error);
});
