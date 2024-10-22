//jshint esversion:6
$(document).ready(function (e) {
	$('.carousel').carousel({
		noWrap: true, 
		onCycleTo: null, 
	});
	e.preventDefault(e); 
	M.AutoInit();
});


setTimeout(function () {
	$("#introVideo")[0].play(); 
	$("#introVideo").fadeIn('slow');
// note the [0] to access the native element
}, 40000); // 10 seconds = 10000 ms

//The Start of the Hide of the elements to start sequence towards the user's choice of game//
$("strong, span, #blanks, #animeTitle, #animeTitle2, #introVideo, #playButton").hide(); 
$("#gifyButtons, h1, #animePick").hide(); 
$("#playAgain, #animeSearch, #inputRow").hide(); 
$(".carousel").hide(); 
	$("#playButton")
		.delay(500) 
		.fadeIn("slow");
//The End of the Hide of the elements to start sequence towards the user's choice of game//

//The Start of the play button function that leads the user to pick Anime Shows or Anime Movies//
$("#playButton").on("click", function () {
	$("#animePick").delay(200).fadeIn("slow");
	$("#playButton").remove();
	$("#video").animate({
		opacity: 0.8
	});
}); 
//The End of the play button function that leads the user to pick Anime Shows or Anime Movies//

//The Start of the Movie button function//
$("#movieBtn").on("click", function () {
	$("strong, #blanks, #animeTitle").delay(200).fadeIn("slow");
	$("#showBtn, #movieBtn, #animePick").remove();
	$(".carousel, span, #inputRow").delay(500).fadeIn("slow");
	// Initialize the game when the page loads.
	gameStart(); 
	showButtons();
	M.AutoInit();
});
//The End of the Movie button function//

//The Start of the Show button function//
$("#showBtn").on("click", function () {
	$("strong, #blanks, #animeTitle2").delay(200).fadeIn("slow");
	$("#showBtn, #movieBtn, #animePick").remove();
	$(".carousel, span, #inputRow").delay(500).fadeIn("slow");
	// Initialize the game when the page loads.
	gameStart(); 
	showButtons();
	M.AutoInit();
});
//The End of the Show button function//

function gameStart() {
	$('#hangman, #gifyButtons, #animeSearch').delay(500).fadeIn("slow");
}

// //The Start of the Play Again Function named Complete Row//
// $("#playAgain").on("click", function () {
// 	$(".carousel, #gifyButtons, #playAgain, #animeSearch").hide(500);
// 	gameStart();
// });
// //The End of the Play Again Function named Complete Row//

function showButtons() {
	$("#gifyButtons, .carousel").empty(); 
	topics.forEach(function (anime, index) {
		var buttons = $("<a>");
		buttons.addClass('waves-effect waves-light btn');
		buttons.addClass('material-icons { font-size: 12px}');
		buttons.addClass('animeButton').text(topics[index]).attr("data-anime", topics[index]);
		$("#gifyButtons").append(buttons);
		console.log(index);
		console.log(anime);
	});
}

function addGifyButtons() {
	$("#addGify").on("click", function (e, anime, index) {
		e.preventDefault();
		$("#gifyButtons").empty();
		var newAnime = $("#gifyInput").val().trim();
		if (newAnime === "") {
			return false;
		} else {
			topics.push(newAnime);
			showButtons();	
		}
	});
}

fetch('https://api.giphy.com/v1/gifs/search?q=')
	.then(function (response) {
		return response.json();
}); 

var topics = ["cowboy bepop", "trigun", "my neighbor totoro", "death note", "Akira"];

	//Start of the Gify Buttons Function that will fade in the Play Again button that is ID'd as complete and/or completeRow/
$("#gifyButtons").on("click", ".animeButton", function winGame() {
		$(".carousel").empty(); 
		//Grabbing the data name values from the gify buttons and storing the data-anime property value from the button and storing as the anime variable.
		var anime = $(this).attr("data-anime");
		//Constructing a queryURL using the anime name
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + anime + "&api_key=Qxpp4x5d7fMc17qfyggEeDXHcJFmzIWO&limit=5&rating=pg-13";
		$.ajax({
			url: queryURL,
			method: "GET"
		}).then(function (response) {
		console.log(queryURL);
		console.log(response);
		//Start of For Loop for images and pushing the Gify images into the Materialize framework/cards and establishing the two different states of the Images "Still" and "Animated" when someone enters and leaves the element//
		for (var i = 0; i < 5; i++) {
		console.log(response);
		console.log(response.data[i].images.original.url);	
		$(".carousel").prepend(`
     	<div class="carousel-item"> 
		<img class="card card-image hoverable" src='${response.data[i].images.fixed_height_still.url}', 
		data-still='${response.data[i].images.fixed_height_still.url}'
		data-animate='${response.data[i].images.fixed_height.url}'
		data-state='still'>
		<div class="card-action"> <a href='${response.data[i].url}'target="_blank">Download Gify!</a> </div>
		</div>`);
		M.AutoInit();
	}
		$("img").hover(function hoverImage () {
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

addGifyButtons(); 
winGame();
showButtons();
hoverImage();