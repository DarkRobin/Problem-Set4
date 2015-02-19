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
	console.log(string);
	var chopped = string.split(' ');
	console.log('this is chopped: ', chopped);
	// var choppedAgain = chopped.length;
	// console.log('this is choppedAgain: ', choppedAgain);
	for (var i = 0; i < chopped.length; i++){
		console.log('started for loop: ', chopped[i]);
		var counted = chopped[i].length;
		console.log('counted: ', counted);
		if (Math.max(counted)){
			console.log('in if statment: ', chopped[i]);
			// return chopped[i],
		};

	};

};

longestWord('Hello are you having a nice day?')