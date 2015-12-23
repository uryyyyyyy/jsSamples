
var delaySuccess = function(msg) {
	console.log('wait 1000ms! msg :' + msg);
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


console.log("errorになっても次の「promiseを返す関数」が成功なら処理は継続される");

delayError().then(delaySuccess, delaySuccess).then(delaySuccess);

