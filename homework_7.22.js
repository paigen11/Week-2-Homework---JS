// #dateObject #math
// ## Friday-the-Thirteens
// Given a year as a number (ex: 2016), print the number of Friday-the-thirteens in that year. 
// Read about how to construct dates closely to get ideas on how to implement this: 
// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date> #date #loop #medium #math
// SUPER BONUS = How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
function find13(year){
	var years = year;
	var foundOne = 0;
	function testDate(year, month, day){
		var d = new Date(year, month, day);
		return d;
	}
	for(var i = 0; i < 12; i++){
		for(var j = 0; j < 28; j++){	
		if((testDate(years, i, j).getDay() === 5 )&& (j === 13)){
			foundOne++;}
			}
		}
	return foundOne;	
	}

console.log(find13(2016));

console.log("Total number of Friday-the-thirteens are " + counter + " in " + d.getFullYear());
// sum = 1
// -----------------------------------------------------------------------------------------------

var d = new Date();
var sum = 0;

for(var i = 1901; i <= 2000; i++){
	for(var j = 0; j <= 11; j++){
		d.setFullYear(i, j, 1);
		if(d.getDay() == 0){
			sum++;
		}
	}
}
console.log("There are " + sum + " Sundays that fell on the first Sunday of the month between 1901 and 2000.")
//sum = 171
// ----------------------------------------------------------------------------------

// ## Leetspeak
// Given a paragraph of text as a string, print the paragraph in leetspeak. To translate a string to leetspeak, 
// you need to replace/make the following character replacements (treat all input characters as uppercase):

// ```A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7
// ```
// Example: Leet => l337
// #string #loop #medium

// -------------------------------------------------------------------------------------

// ## Long-long Vowels
// Given a word as a string, print the result of extending any long vowels to the length of 5. Examples:
// ```Good => Goooood
// Cheese => Cheeeeese
// Man => Man
// Spoon => Spooooon
// ```
// #loop #string #medium

var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

var string = "Peter picked a peck of pickle peppers.";

function replaceVowels(){
for (var i = 0; i < string.length; i++){
	var chars = string.split();
	for(var j = 0; j < vowels.length; j++){
		if(chars[i] === vowels[j]){
			replace(i, [j,j,j,j]);
			}	
		}
		string.join();	
	}
	return string();
}
console.log(replaceVowels(string));	


// 	if(string.charAt[i] == "a" || string.charAt[i]  == "e" || string.charAt[i] == "i" || string.charAt[i] == "o" 
// 		|| string.charAt[i] == 'u' || string.charAt[i] == "y"){
// 		var addFour = string[i] + string[i] + string[i] + string[i];
// 		string.replace(i, addFour);
// 	}
// 	return string;
// }

// console.log(string;)

