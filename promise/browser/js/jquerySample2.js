
var delayError = function() {
	console.log('wait 1000ms!');
	var d = new $.Deferred;
	setTimeout(function(){
		d.reject('1000ms done');
	}, 1000);
	return d.promise();
};

var successFunc = function(msg) {
	console.log("Success : " + msg);
};

var errorFunc = function(msg) {
	console.log("Error : " + msg);
};

var promise = delayError();
promise.done(successFunc);
promise.fail(errorFunc);

