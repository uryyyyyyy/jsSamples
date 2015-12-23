
var delaySuccess = function() {
	console.log('wait 1000ms!');
	var d = new $.Deferred;
	setTimeout(function(){
		console.log('1000ms done!');
		d.resolve("1000ms done");
	}, 1000);
	return d.promise();
};

var delaySuccess2 = function() {
	console.log('wait 3000ms!');
	var d = new $.Deferred;
	setTimeout(function(){
		console.log('3000ms done!');
		d.resolve("3000ms done");
	}, 3000);
	return d.promise();
};

var successFunc = function() {
	console.log("Success : result array is ");
	console.log(arguments);
};


console.log("複数のpromise関数を連結する。");

$.when(delaySuccess2(), delaySuccess(), delaySuccess())
.done(successFunc);
