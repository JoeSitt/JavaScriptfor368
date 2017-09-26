

function flatten(m) {// source:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#Flatten_an_array_of_arrays
 flatten2 = arr => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten2(val) : val), []);
 return(flatten2(m));
}


main = function() {
	var m1=[[7,4]];
	var	m2=[[4,3],[2,2]];
	var m3=[3,2,[1,[2,5],9]];
	console.log("test 1 with array [[7,4]], flatten produces:");
	//console.log(m1);
	console.log((flatten(m1)));
	console.log("test 2 with array [[4,3],[2,2]], flatten produces:");
	//console.log(m2);
	console.log((flatten(m2)));
	console.log("test 3 with array [3,2,[1,[2,5],9]], flatten produces:")
	//console.log(m3);
	console.log((flatten(m3)));
	
}
