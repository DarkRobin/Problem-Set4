//1
// var addNumbers = function(stringWithNum){
// 	console.log(stringWithNum);
// 	var crap = stringWithNum;
// 	console.log(crap);
// 	// var arrayed = _.compact(crap);
// 	// console.log(arrayed);
// 	var splitted = crap.split(' ');
// 	console.log(splitted);
// 	var parsed = parseInt(splitted) + parseInt(splitted[1]);
// 	console.log(parsed);
// };






// addNumbers('88Hello 3world');
// addNumbers('55Hello 3world');
// addNumbers('5Hello5 3world');



//2
var longestWord = function(string){
	var chopped = string.split(' ');
	var countedArray = [];
	var filtered = _.filter(chopped, function(num){
		var counted = num.length;
		var arrayed = countedArray.push(counted);
		return arrayed
	});
	var max = _.max(countedArray);
	var indexOfNumber = _.indexOf(countedArray, max);
	var longWord = filtered[indexOfNumber];
	return longWord
};

console.log(longestWord('Hello are you having a nice day?'));
console.log(longestWord('It is a wonderfully beautifull day this afternoon'));
console.log(longestWord('hi how are you'));