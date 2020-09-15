/ //Empty array for letters guessed wrong

// let LettersGuessedWrong = [];
// //empty array for incorrect guessses
// let wrongLettersGuessed = [];
// //empty string to hold the answer and looping
// let pickedWord = "";
// //ease of use for split/join later. Splitting answer into individual substrings
// let lettersInPickedWord = [];
// //holds correctly guessed letters and empty blanks (_)
// let answersArray = [];

// // variables to keep track of game
// let numberOfBlanks = 0;
// let numberOfGuesses = 10;
// let wins = 0;
// let losses = 0;

// //FUNCTIONS

// function initializeRound() {
// 	//picking random answer from array, splitting the answer into an array and counting the length of the array to determine # of blanks
// 	pickedWord = Anime[Math.floor(Math.random() * Anime.length)];

// 	lettersInPickedWord = pickedWord.split("");

// 	numberOfBlanks = lettersInPickedWord.length;

// 	//reset variables/arrays for each game

// 	numberOfGuesses = 10;
// 	wrongLettersGuessed = [];
// 	answersArray = [];

// 	//fills up answers array with blanks
// 	for (i = 0; i < numberOfBlanks; i++) {
// 		answersArray.push("_");
// 	}

// 	//manipulating DOM elements on page
// 	document.getElementById("guessesAmount").innerHTML = numberOfGuesses;
// 	document.getElementById("wrong-guesses").innerHTML = wrongLettersGuessed.join(" ");
// 	document.getElementById("word").innerHTML = answersArray.join(" ");
// }

// function checkGuesses(guess) {
// 	//trying something else
// 	let letterIsPresent = null;
// 	//loops through to see if guess is present
// 	for (i = 0; i < numberOfBlanks; i++) {
// 		if (pickedWord[i] === guess) {
// 			letterIsPresent = true;
// 		}
// 	}
// 	//if guess is present, loops through and replaces _ with the letter anytime it appears. If wrong and not already guessed, lose a guess and add to wrong letters array
// 	if (letterIsPresent) {
// 		for (a = 0; a < numberOfBlanks; a++) {
// 			if (pickedWord[a] === guess) {
// 				answersArray[a] = guess;
// 			}
// 		}
// 	} else if (wrongLettersGuessed.indexOf(guess) === -1) {
// 		wrongLettersGuessed.push(guess);
// 		numberOfGuesses--;
// 	}
// }

// //play sound upon winning or losing a round
// function playSound(sound) {
// 	var audio = new Audio("sounds/" + sound + ".mp3");
// 	audio.play();
// }

// //runs after each player guess
// function afterGuess() {
// 	//update HTML
// 	document.getElementById("guessesAmount").innerHTML = numberOfGuesses;
// 	document.getElementById("letters").innerHTML = wrongLettersGuessed.join(" ");
// 	document.getElementById("word").innerHTML = answersArray.join(" ");

// 	// converts back to string and check if answer matches or if player loses. Updates HTML and variables accordingly. Initializes new round at the end.
// 	if (lettersInPickedWord.join() === answersArray.join()) {
// 		playSound("correct");
// 		wins++;
// 		document.getElementById("wins").innerHTML = "Wins: " + wins;
// 		document.getElementById("startGame").innerHTML = "You Got it!";
// 		document
// 			.querySelector("img#winningDog")
// 			.setAttribute("src", "images/" + pickedWord + ".png");
// 		initializeRound();
// 	} else if (numberOfGuesses == 0) {
// 		playSound("wrong");
// 		losses++;
// 		document.getElementById("losses").innerHTML = "Losses: " + losses;
// 		document.getElementById("startGame").innerHTML = "Better Luck Next Time!";
// 		initializeRound();
// 	}
// }

// //RUNNING THE GAME (Note to self: if there is too much code in this section - add more functions)
// initializeRound();

// //check for player key clicks that are letters and then runs appropriate functions
// document.addEventListener("keydown", function (event) {
// 	let key = event.key.toLowerCase();
// 	let isLetter = key >= "a" && key <= "z";
// 	if (key.length !== 1) {
// 		console.log(key);
// 	} else if (isLetter) {
// 		checkGuesses(key);
// 		afterGuess();
// 	}
// });

// //jshint esversion:6

//   // Variables that set the initial state of our wordGuess game.
// wordInPlay: null,
// lettersOfTheWord: [],
// matchedLetters: [],
// guessedLetters: [],
// guessesLeft: 0,
// totalGuesses: 0,
// userInput: [],
// wins: 0,

// $("#letters-guessed").keyup(function (e) {
// 	userInput++; 
// 	var newLetterGuessed = "The Letter you Guessed is " + userInput + " and it was printed"
// 	$.console.log(newLetterGuessed, "html"); 
// 	$.console.log(e); 
// }).keydown(function (e) { 
// 	if (e.which == 13) {
// 		e.preventDefault(); 
// 	}
// });



// he setupGame method is called when the page first loads.
	//   setupGame: function () {
	//     $("strong, #blanks, #animeTitle2")
	//       .delay(200)
	//       .fadeIn("slow");
	//     $("#showBtn, #animePick, #movieBtn").remove();
	//     $(".carousel, #carouselRow")
	//       .delay(500)
	//       .fadeIn("slow");
	//     // Here we pick a random word.
	//     var objKeys = Object.keys(this.animeShows);
	//     this.wordInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];

	//     // Split the chosen word up into its individual letters.
	//     this.lettersOfTheWord = this.wordInPlay.split("");
	//     // Builds the representation of the word we are trying to guess and displays it on the page.
	//     // At the start it will be all underscores since we haven't guessed any letters ("_ _ _ _").
	//     this.rebuildWordView();
	//     // This function sets the number of guesses the user gets, and renders it to the HTML.
	//     this.processUpdateTotalGuesses();
	//   },

	//   // This function is run whenever the user guesses a letter..
	//     updatePage: function(letter) {
	//     // If the user has no guesses left, restart the game.
	//     if (this.guessesLeft === 0) {
	//       this.restartGame();
	//     }
	//     // Otherwise...
	//     else {
	//       // Check for and handle incorrect guesses.
	//       this.updateGuesses(letter);

	//       // Check for and handle correct guesses.
	//       this.updateMatchedLetters(letter);

	//       // Rebuild the view of the word. Guessed letters are revealed, non-guessed letters have a "_".
	//       this.rebuildWordView();

	//       // If the user wins, restart the game.
	//       if (this.updateWins() === true) {
	//         this.restartGame();
	//       }
	//     }

	//   },

	//   // This function governs what happens when the user makes an incorrect guess (that they haven't guessed before).
	//   updateGuesses: function(letter) {
	//     // If the letter is not in the guessedLetters array, and the letter is not in the lettersOfTheWord array..
	//     if ((this.guessedLetters.indexOf(letter) === -1) && (this.lettersOfTheWord.indexOf(letter) === -1)) {

	//       // Add the letter to the guessedLetters array.
	//       this.guessedLetters.push(letter);

	//       // Decrease guesses by one.
	//       this.guessesLeft--;

	//       // Update guesses remaining and guesses letters on the page.
	//       document.querySelector("#guesses-left").innerHTML = this.guessesLeft;
	//       document.querySelector("#letters-guessed").innerHTML = this.guessedLetters.join(", ");
	//     }
	//   },

	//   // This function sets the initial guesses the user gets.
	//   processUpdateTotalGuesses: function() {
	//     // The user will get more guesses the longer the word is.
	//     this.totalGuesses = this.lettersOfTheWord.length + 5;
	//     this.guessesLeft = this.totalGuesses;

	//     // Render the guesses left to the page.//
	//     document.querySelector("#guesses-left").innerHTML = this.guessesLeft; 
	//   },

	//   // This function governs what happens if the user makes a successful guess.
	//   updateMatchedLetters: function(letter) {
	//     // Loop through the letters of the "solution".
	//     for (var i = 0; i < this.lettersOfTheWord.length; i++) {
	//       // If the guessed letter is in the solution, and we haven't guessed it already..
	//       if ((letter === this.lettersOfTheWord[i]) && (this.matchedLetters.indexOf(letter) === -1)) {
	//         // Push the newly guessed letter into the matchedLetters array.
	//         this.matchedLetters.push(letter);
	//       }
	//     }
	//   },

	//   // This function builds the display of the word that is currently being guessed.
	//   // For example, if we are trying to guess "blondie", it might display "bl_ndi_".
	//   rebuildWordView: function() {
	//     // We start with an empty string.
	//     var wordView = "";

	//     // Loop through the letters of the word we are trying to guess..
	//     for (var i = 0; i < this.lettersOfTheWord.length; i++) {
	//       // If the current letter has been guessed, display that letter.
	//       if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) !== -1) {
	//         wordView += this.lettersOfTheWord[i];
	//       }
	//       // If it hasn't been guessed, display a "_" instead.
	//       else {
	//         wordView += "&nbsp;_&nbsp;";
	//       }
	//     }

	//     // Update the page with the new string we built.
	//   document.querySelector("#scoreboard").innerHTML = wordView;
	//   },

	//   // Function that "restarts" the game by resetting all of the variables.
	//   restartGame: function() {
	//     document.querySelector("#letters-guessed").innerHTML = "";
	//     this.wordInPlay = null;
	//     this.lettersOfTheWord = [];
	//     this.matchedLetters = [];
	//     this.guessedLetters = [];
	//     this.guessesLeft = null;
	//     this.totalGuesses = 0;
	//     this.letterGuessed = null;
	//     this.setupGame();
	//     this.rebuildWordView();
	//   },

	//   // Function that checks to see if the user has won.
	//   updateWins: function() {
	//     var win;

	//     // this won't work for words with double or triple letters
	//     // var lettersOfTheWordClone = this.lettersOfTheWord.slice(); //clones the array
	//     // this.matchedLetters.sort().join('') == lettersOfTheWordClone.sort().join('')

	//     // If you haven't correctly guessed a letter in the word yet, we set win to false.
	//     if (this.matchedLetters.length === 0) {
	//       win = false;
	//     }
	//     // Otherwise, we set win to true.
	//     else {
	//       win = true;
	//     }
	//     // If a letter appears in the lettersOfTheWord array, but not in the matchedLetters array, set win to false.
	//     // In English, if you haven't yet guessed all the letters in the word, you don't win yet.
	//     for (var i = 0; i < this.lettersOfTheWord.length; i++) {
	//       if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) === -1) {
	//         win = false;
	//       }
	//     }

	//     // If win is true...
	//     if (win) {
	//       $("iframe").show(40000).delay(0).hide(100);   
	//       $("#carouselRow").show(40000).delay(0).hide(100);   

	//       // Increment wins.
	//       this.wins = this.wins + 1;

	//       // Update wins on the page.
	//       document.querySelector("#win-counter").innerHTML = this.wins;

	//       // Update the video title and band on the page.
	//       document.querySelector("#carouselRow").innerHTML = this.animeShows[this.wordInPlay].video +
	//       " By " + this.wordInPlay;


	//       // Update the image of the band on the page.
	//       document.querySelector("#carouselRow").innerHTML =
	//         "<iframe autoplay class = 'frameborder=0 allow=accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture allowfullscreen' src='" +
	//         this.animeShows[this.wordInPlay].video + "'>";

	//       // Play an video track of the Anime Show.
	//       var video = new Video(this.animeShows[this.wordInPlay].preview);
	//       video.play();

	//       // return true, which will trigger the restart of our game in the updatePage function.
	//       return true;
	//     }
	//     // If win is false, return false to the updatePage function. The game goes on!
	//     return false;
	//   }
	// };



	// // When a key is pressed..
	// document.onkeyup = function(event) {
	//   // Check if the key pressed is a letter.
	//   if (event.keyCode >= 49 && event.keyCode <= 90) {
	//     // Capture pressed key and make it lowercase.
	//     animeGuessGame.letterGuessed = event.key.toLowerCase();
	//     // Pass the guessed letter into our updatePage function to run the game logic.
	//     animeGuessGame.updatePage(animeGuessGame.letterGuessed);
	//   }

	// };


	// var animate = function () {
	//     var drawMe = lives ;
	//     drawArray[drawMe]();
	//   }

	// canvas =  function(){

	//     myStickman = document.getElementById("stickman");
	//     context = myStickman.getContext('2d');
	//     context.beginPath();
	//     context.strokeStyle = "#fff";
	//     context.lineWidth = 2;
	//   };

	//     head = function(){
	//       myStickman = document.getElementById("stickman");
	//       context = myStickman.getContext('2d');
	//       context.beginPath();
	//       context.arc(60, 25, 10, 0, Math.PI*2, true);
	//       context.stroke();
	//     }

	//   draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {

	//     context.moveTo($pathFromx, $pathFromy);
	//     context.lineTo($pathTox, $pathToy);
	//     context.stroke(); 
	// }

	//    frame1 = function() {
	//      draw (0, 150, 150, 150);
	//    };

	//    frame2 = function() {
	//      draw (10, 0, 10, 600);
	//    };

	//    frame3 = function() {
	//      draw (0, 5, 70, 5);
	//    };

	//    frame4 = function() {
	//      draw (60, 5, 60, 15);
	//    };

	//    torso = function() {
	//      draw (60, 36, 60, 70);
	//    };

	//    rightArm = function() {
	//      draw (60, 46, 100, 50);
	//    };

	//    leftArm = function() {
	//      draw (60, 46, 20, 50);
	//    };

	//    rightLeg = function() {
	//      draw (60, 70, 100, 100);
	//    };

	//    leftLeg = function() {
	//      draw (60, 70, 20, 100);
	//    };

	// //drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]