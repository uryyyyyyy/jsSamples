
var delaySuccess = function() {
	console.log('wait 1000ms!');
	var d = new $.Deferred;
	setTimeout(function(){
		d.resolve("1000ms done");
	}, 1000);
	return d.promise();
};

var successFunc = function(msg) {
	console.log("Success : " + msg);
};

var errorFunc = function(msg) {
	console.log("Error : " + msg);
};

var p1 = delaySuccess();
var p2 = p1.done(successFunc);
var p3 = p2.done(successFunc);

console.log(".doneの度に違うpromiseオブジェクトが生成される。");

console.log("p1 === p2 : " + (p1 === p2));
console.log("p2 === p3 : " + (p2 === p3));
console.log("p3 === p1 : " + (p3 === p1));
