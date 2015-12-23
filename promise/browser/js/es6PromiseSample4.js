var promise = new Promise(function(resolve, reject){
	resolve(42);
});

var func1 = function(value){
	console.log('func1 : ' + value);
};

var func2 = function(value){
	console.log('func2 : ' + value);
	//throw new Error("test");
	//exit;
	//return
};

//then(func1, func2) = then(func1).catch(func2)
promise.then(func1).catch(func2)
	.then(func1);
