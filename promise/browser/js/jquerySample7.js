
var delaySuccess1 = function() {
	console.log('wait 1000ms!');
	var d = new $.Deferred;
	setTimeout(function(){
		d.resolve("1000ms done");
	}, 1000);
	return d.promise();
};

var delaySuccess2 = function() {
	console.log('wait 2000ms!');
	var d = new $.Deferred;
	setTimeout(function(){
		d.resolve("2000ms done");
	}, 2000);
	return d.promise();
};

var successFunc = function(msg) {
	console.log("Success : " + msg);
	return "";
};

var errorFunc = function(msg) {
	console.log("Error : " + msg);
};

console.log(".then()は、ただの関数でもpromiseの値は順次変わるが、.done()は前のpromiseの結果が得られるらしい。");

delaySuccess1().then(successFunc, errorFunc).then(successFunc, errorFunc);

delaySuccess2().done(successFunc).done(successFunc);


