document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems);
});
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems);
}),
  
  
  //The Start of the Hide of the elements to start sequence towards the user's choice of game//

  $("strong, #blanks, #animeTitle, #animeTitle2, #movieBtn, #showBtn, #gifyButtons, h1, #animePick, #playAgain, #animeSearch, iframe").hide();
  $(".carousel, #carouselRow").hide(100);
  $("#playButton")
    .delay(1000)
    .fadeIn("slow");

  //The End of the Hide of the elements to start sequence towards the user's choice of game//

  //The Start of the play button function that leads the user to pick Anime Shows or Anime Movies//

  $("#playButton").on("click", function() {
    $("#movieBtn").delay(200).fadeIn("slow");
    $("#showBtn").delay(200).fadeIn("slow");
    $("#animePick").delay(200).fadeIn("slow");
    $("#playButton").remove();
    $("#animeSearch").delay(200).fadeIn(2000)
    $("#video").animate({
      opacity: 0.8
    });
  });

//The End of the play button function that leads the user to pick Anime Shows or Anime Movies//

  //The Start of the Movie button function//

$("#movieBtn").on("click", function () {
    $("strong, #blanks, #animeTitle").delay(200).fadeIn("slow");
      $("#showBtn, #animePick, #movieBtn").remove();
      $("iframe").show(5000).delay(0).hide(100);   
      $(".carousel, #gifyButtons, #carouselRow, #animeSearch").delay(500).fadeIn("slow");
      M.AutoInit();
    // Initialize the game when the page loads.
    animeGuessGame.setupGame();
  });

  //The End of the Movie button function//

//The Start of the Show button function//

  $("#showBtn").on("click", function() {
    $("strong, #blanks, #animeTitle2").delay(200).fadeIn("slow");
    $("#showBtn, #animePick, #movieBtn").remove();
    $("iframe").show(5000).delay(0).hide(100);   
    $(".carousel, #gifyButtons, #carouselRow, #animeSearch").delay(500).fadeIn("slow");
      M.AutoInit();
     // Initialize the game when the page loads.
     animeGuessGame.setupGame();
  });

//The End of the Show button function//


//The Start of the Play Again Function named Complete Row//

  $("#playAgain").on("click",function () { 
    $(".carousel, #gifyButtons, #playAgain, #animeSearch").hide(500)
    gameStart(); 
  });
  
//The End of the Play Again Function named Complete Row//

function gameStart() {
  $('#carouselRow, iframe').delay(35000).fadeIn("slow");
  
}

  var topics = ["cowboy bepop", "trigun", "my neighbor totoro", "death note"];

  function showButtons() {
    $(".animeButton, #gifyButtons").empty();
    topics.forEach(function (anime, i) {
      var a = $("<a>");
      a.addClass("waves-effect waves-light btn");
      a.addClass("animeButton").text(topics[i]).attr("data-name", topics[i]);
      var i = $("<i>");
      i.addClass("material-icons center"); 
      $("#gifyButtons").append(a, i);
    }); 
  }

  
  function addGifButtons() {
    $("#addGify").on("click", function () {
    event.preventDefault(); 
    var newAnime = $("#gif_input").val().trim(); 
    if (newAnime === "") {
      return false; 
    } else {
      topics.push(newAnime); 
      showButtons();
      }
    });
  }

  //Start of the Gify Buttons Function that will fade in the Play Again button that is ID'd as complete and/or completeRow//
  $("#gifyButtons").on("click", ".animeButton", function winGame() {
    $("#playAgain").delay(5000).fadeIn("slow");
    //Grabbing the data name values from the gify buttons and storing the data-name property value from the button and storing as the anime variable.
    var anime = $(this).attr("data-name"); 
    //Constructing a queryURL using the anime name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + anime + "&api_key=Qxpp4x5d7fMc17qfyggEeDXHcJFmzIWO&limit=10&rating=pg-13"; 
    //Performing an AJAX request with the queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })
        //After data comes back from the request
      .then(function(response) {
        console.log(queryURL);
        console.log(response); 
        //Start of For Loop for images and pushing the Gify images into the Materialize framework/cards and establishing the two different states of the Images "Still" and "Animated" when someone enters and leaves the element//
        for (var i = 0; i < 10; i++) {
          console.log(response.data[i].images.original.url);
          $(".carousel").prepend(`
          <div class="carousel-item"> 
          <img class="card-image hoverable" src='${response.data[i].images.fixed_height_still.url} 
          'data-still='${response.data[i].images.fixed_height_still.url}
          'data-animate='${response.data[i].images.fixed_height.url}
          'data-state='still'>
          <div class="card-action"> <a href="${response.data[i].url}" target="_blank">Click Here</a>
          </div>
          </div>`);
          M.AutoInit();
        }
  
          $(".card-image").hover(function () {
          //The attr jQuery method allows us to get or set the value of any attribute on our HTML element
          var state = $(this).attr("data-state");
          //If the clicked image's state is still, update its src attribute to what its data-animate value is. Then, set the image's data-state to animate. Else set src to the data-still value
          if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
          } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
          }
        });
        //End of For Loop for images and pushing the Gify images into the materialize framework/cards and establishing the two different states of the images "Still" and "Animated" when someone enters and leaves the element//
      });
  });
  

//  // Creating a giant wordGuessGame object that will house all of our logic and variables.
// var animeGuessGame = {
//   // Object of all words that can be chosen, along with info such as their picture and a song clip.
//   animeShows: {
//     CowboyBepop: {
//       video: "Cowboy Bepop",
//       preview: "https://animethemes.moe/video/CowboyBebop-OP1.webm"
//     },
//     DeathNote: {
//       video: "Death Note",
//       preview: "https://animethemes.moe/video/DeathNote-OP1.webm"
//     },
//     Monster: {
//       video: "Monster",
//       preview: "https://animethemes.moe/video/Monster-OP1.webm"
//     },
//     RurouniKenshin: {
//       video: "Rurouni Kenshin",
//       preview: "https://animethemes.moe/video/RorouniKenshin-OP1.webm"
//     },
//     Pokemon: {
//       video: "Pokemon",
//       preview: "https://animethemes.moe/video/Pokemon-OP1.webm"
//     },
//     Trigun: {
//       video: "Trigun",
//       preview: "https://animethemes.moe/video/Trigun-OP1.webm"
//     },
//     Naruto: {
//       video: "Naruto'",
//       preview: "https://animethemes.moe/video/Naruto-OP1.webm"
//     },
//     Evangelion: {
//       video: "Evangelion",
//       preview: "https://animethemes.moe/video/Evangelion-OP1.webm"
//     },
//     DragonBallZ: {
//       video: "Dragon Ball Z",
//       preview: "https://animethemes.moe/video/DragonBallZ-OP1.webm"
//     },
//     Flcl: {
//       video: "Flcl",
//       preview: "https://animethemes.moe/video/DragonBallZ-OP1.webm"
//     },
//   },


//   //Need to find site that holds clip of these movies//
//   // var animeMovies = 
//   //   "the wind rises",
//   //   "grave of the fireflies",
//   //   "my neighbor totoro",
//   //   "princess mononoke",
//   //   "ponya",
//   //   "spirited away",
//   //   "castle in the sky",
//   //   "akira",
//   //   "ghost in the shell",
//   //   "howl moving castle",
//   //   "samurai x"
//   // ;

//   // Variables that set the initial state of our wordGuess game.

//   wordInPlay: null,
//   lettersOfTheWord: [],
//   matchedLetters: [],
//   guessedLetters: [],
//   guessesLeft: 0,
//   totalGuesses: 0,
//   letterGuessed: null,
//   wins: 0,

//   // The setupGame method is called when the page first loads.
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

//   drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1];