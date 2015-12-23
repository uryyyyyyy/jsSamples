var jsonPromise = new Promise(function(resolve, reject) {
  // JSON形式ではないデータを JSON.parse に渡しているので、
  // 例外が throw され、Promise は reject されます。
  resolve(JSON.parse("This ain't JSON"));
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

jsonPromise.then(func1).catch(func2);

