
var delaySuccess1 = function(msg) {
	console.log('wait 1000ms! msg :' + msg);
	var d = new $.Deferred;
	setTimeout(function(){
		d.resolve("1000ms done");
	}, 1000);
	return d.promise();
};

var delaySuccess2 = function(msg) {
	console.log('wait 3000ms! msg :' + msg);
	var d = new $.Deferred;
	setTimeout(function(){
		d.resolve("3000ms done");
	}, 3000);
	return d.promise();
};

console.log(".then()は、promiseを返す関数ではpromiseの値は順次変わるが、.doneは前のpromiseの結果が得られるらしい。");

delaySuccess1().then(delaySuccess1).then(delaySuccess1);

delaySuccess2().done(delaySuccess2).done(delaySuccess2);


