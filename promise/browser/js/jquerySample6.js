
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

console.log(".then()の中にただの関数を渡した場合、その前のpromiseの状態を引き継ぐ。そのため、resolveしたらsuccessFuncが二回、rejectしたらErrorFuncが二回呼ばれる");

delaySuccess().then(successFunc, errorFunc).then(successFunc, errorFunc);

delayError().then(successFunc, errorFunc).then(successFunc, errorFunc);

