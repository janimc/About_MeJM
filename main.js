
	//Get username and welcome to site
	var userName = prompt('Welcome to my site, what is your name?');
	 
	alert('Welcome to my site ' + userName + '!');
	console.log('The user is ' + userName);
	 
	//Ask if Johannes likes to play Soccer
	var playing = prompt('Does Johannes like to Play Soccer?')
	var playingUpper = playing.toUpperCase();
	if (playingUpper === 'YES' || playingUpper === 'Y'){
	  alert('That is correct.');
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
	}else{
	  alert('your answer should be? Yes or No please.');
	}
	console.log('Do they think I studied Cyber Security? ' + study);
	 
	//Ask if they know about Eritrea
	var eritrea = prompt('which continent is eritrea from?');
	var eritreaUpper = eritrea.toUpperCase();
	if (eritrea === 'AFRICA' || eritreaUpper === 'AFRICA!'){
	  alert('Oh yeah! you answered right! east side of Africa');
	}else{
	  alert('You must be new to Africa!');
	}
