var promise = new Promise(function(resolve, reject){
	reject(42);
});

var func1 = function(value){
	console.log('func1 : ' + value);
};

var func2 = function(value){
	console.log('func2 : ' + value);
	//throw new Error("test");
	exit;
	//return
};

promise.then(func1, func2)
	.then(func1);
