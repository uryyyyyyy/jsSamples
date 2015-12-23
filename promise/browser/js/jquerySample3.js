
var delaySuccess = function() {
	console.log('wait 1000ms!');
	var d = new $.Deferred;
	setTimeout(function(){
		d.resolve("1000ms done");
	}, 1000);
	return d.promise();
};

var delayError = function() {
	console.log('wait 2000ms!');
	var d = new $.Deferred;
	setTimeout(function(){
		d.reject('2000ms done');
	}, 2000);
	return d.promise();
};

var successFunc = function(msg) {
	console.log("Success : " + msg);
};

var errorFunc = function(msg) {
	console.log("Error : " + msg);
};

var promise = delaySuccess();
promise.then(successFunc, errorFunc);

var promise2 = delayError();
promise2.then(successFunc, errorFunc);


