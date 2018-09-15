
//function that takes a lower and higher bound and returns a random integer in that range
var randomNumber = function (low, high){
	var min = Math.ceil(low);
	var max = Math.floor(high);

	var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
	return randomNumber;
}

//Get username and welcome to site
var userName = prompt('Welcome to my site, what is your name?');

var correctGuesses = 0;

alert('Welcome to my site ' + userName + '!');
console.log('The user is ' + userName);
 
//Ask if Johannes likes to play Soccer
var playing = prompt('Does Johannes like to Play Soccer?')
var playingUpper = playing.toUpperCase();
if (playingUpper === 'YES' || playingUpper === 'Y'){
	alert('That is correct.');
	correctGuesses++;
}else if (playingUpper === 'NO' || playingUpper === 'N'){
	alert('Actually Johannes loves playing !');
}else{
	alert('I expected the answers yes or no.');
}
console.log('User answered ' + playing);
 
//ask if Johannes likes to hike
var hiking = prompt('Does johannes like hiking?')
var hikingUpper = hiking.toUpperCase();
if (hikingUpper === 'YES' || hikingUpper === 'Y'){
	alert('Absolutely! Johannes loves camping.');
	correctGuesses++;
}else if (hikingUpper === 'NO' || hikingUpper === 'N'){
	alert('Johannes actually loves slipping on top mountains.');
}else{
	alert('I expected the answers yes or no');
}
console.log('They answered ' + hiking + ' for camping');
 
//Ask if Johannes likes spicy food
var food = prompt('Does Johannes like spicy food?');
var foodUpper = food.toUpperCase();
if (foodUpper === 'YES' || foodUpper === 'Y'){
	alert('eventhough Johannes likes spicy food,He does not intertain it.');
}else if (foodUpper === 'NO' || foodUpper === 'N'){
	alert('Correct, he is a vegeterian.');
	correctGuesses++;
}else{
	alert('I expected the answers yes or no.');
}
console.log('They answered ' + food + ' for if I am a vegeterian.');
 
//Ask if Johannes can studied Cyber Secrutiy and hacking
var study = prompt('did Johannes study Cyber Secrutiy?');
var studyUpper = study.toUpperCase();
if (studyUpper === 'YES' || studyUpper === 'Y'){
	alert('Nice try!');
}else if (studyUpper ==='NO' || studyUpper === 'N'){
	alert('Johannes indeed studied Cybersecurity!');
	correctGuesses++;
}else{
	alert('your answer should be? Yes or No please.');
}
console.log('Do they think I studied Cyber Security? ' + study);
 
//Ask if they know about Eritrea
var eritrea = prompt('which continent is eritrea from?');
var eritreaUpper = eritrea.toUpperCase();
if (eritreaUpper === 'AFRICA' || eritreaUpper === 'AFRICA!'){
	alert('Oh yeah! you answered right! east side of Africa');
	correctGuesses++;
}else{
	alert('You must be new to Africa!');
}
console.log('continent: ' + eritrea);



//NUMBER GUESSING GAME
var randomNum = randomNumber(1,10);

var guessCounter = 4;
var guessedNumber;

do{
guessedNumber = prompt('Pick a number 1-10');
guessedNumber = parseInt(guessedNumber);

console.log(guessedNumber, randomNum, guessedNumber !== randomNum);
guessCounter--;

if(guessedNumber > randomNum){
	alert('Too high!');
}else if(guessedNumber < randomNum){
	alert('Too low!');
}
} while (guessedNumber !== randomNum && guessCounter > 0);

if(guessCounter === 0){
alert('You didn\'t get the correct answer, it was ' + randomNum);
} else {
alert('Nice job!');
correctGuesses++;
}