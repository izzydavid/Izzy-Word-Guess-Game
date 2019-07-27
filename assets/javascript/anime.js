$('#playButton').hide();
$('strong').hide();
$('#blanks').hide();
$('#animeTitle').hide();
$('#animeTitle2').hide();
$('#myBtn').hide();
$('#myBtn2').hide();
$('.btn').hide();
$('h1').hide();

$('#animePick').hide();
$('#playButton').delay(200).fadeIn('slow');


$("#playButton").on("click", function () {
	$('#myBtn').delay(200).fadeIn('slow');
	$('#myBtn2').delay(200).fadeIn('slow');
	$('#animePick').delay(200).fadeIn('slow');
	$('#playButton').remove();
	$('#video').animate({
		opacity: 0.9,

	})
});

$("#myBtn").on("click", function () {
	$('strong').delay(200).fadeIn('slow');
	$('#blanks').delay(200).fadeIn('slow');
	$('#animeTitle').delay(200).fadeIn('slow');
	$('#btn3').delay(200).fadeIn('slow');
	$('#myBtn').remove();
	$('#myBtn2').remove();
	$('#animePick').remove();
	$('#myBtn3').delay(200).fadeIn('slow');
	$('#myBtn4').delay(200).fadeIn('slow');
	$('#myBtn5').delay(200).fadeIn('slow');
	$('#myBtn6').delay(200).fadeIn('slow');

});

$("#myBtn2").on("click", function () {
	$('strong').delay(200).fadeIn('slow');
	$('#blanks').delay(200).fadeIn('slow');
	$('#animeTitle2').delay(200).fadeIn('slow');
	$('#btn3').delay(200).fadeIn('slow');
	$('#myBtn2').remove();
	$('#myBtn').remove();
	$('#animePick').remove();
	$('#myBtn3').delay(200).fadeIn('slow');
	$('#myBtn4').delay(200).fadeIn('slow');
	$('#myBtn5').delay(200).fadeIn('slow');
	$('#myBtn6').delay(200).fadeIn('slow');

});

var animeShows = ["death note", "monster", "rurouni kenshin", "pokemon", "trigun",
	"naruto", "cowboy bepop", "evangelion", "dragon ball z", "flcl"
];

var animeMovies = ["the wind rises", "grave of the fireflies", "my neighbor totoro", "princess mononoke", "ponya", "spirited away",
	"castle in the sky", "akira", "ghost in the shell", "howl moving castle", "samurai x"
];

var topics = ["cowboy bepop", "trigun", "my neighbor totoro", "death note"];

$("#myBtn3, #myBtn4, #myBtn5, #myBtn6").on("click", function intiialButtons() {
	// Grabbing and storing the data-anime property value from the button
	var anime = $(this).attr("data-name");

	// Constructing a queryURL using the anime name
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
		anime + "&api_key=Qxpp4x5d7fMc17qfyggEeDXHcJFmzIWO&rating=g&limit=10";

	// Performing an AJAX request with the queryURL
	$.ajax({
			url: queryURL,
			method: "GET"
		})
		// After data comes back from the request
		.then(function (response) {
				console.log(queryURL);
				console.log(response);


				//Start of For Loop for images and pushing the Gify images into the materialize framework/cards and establishing the two different states of the images "Still" and "Animated" when someone enters and leaves the element//
				for (var i = 0; i < 10; i++) {
					console.log(response.data[i].images.original.url);

					$('.g-scrolling-carousel').prepend(`
					<div class="card-panel"> 
						<img class="card-image materialboxed hoverable" src = '${response.data[i].images.original.url}'
						<div class="card-reveal"> 
						<span class="card-title activator grey-text text-darken-4" src = '${response.data[i].title}'><i class="material-icons right"></i></span>
						<div class="card-action"> <a href="${response.data[i].url}" target="_blank">Click Here</a>
						</div>
						</div>			
						</div>`)};			
			//End of For Loop for images and pushing the Gify images into the materialize framework/cards and establishing the two different states of the images "Still" and "Animated" when someone enters and leaves the element//

			//Start of MouseEnter and MouseLeave Enter Events
			$(".card").on('click', function () {
				$(this).attr("src", $(this).attr("animatedImage"));
			});

			//End of MouseEnter and MouseLeave Enter Events
			$('.materialboxed').materialbox();
			$('h1').scroll();
			$('.parallax').parallax();

		});
});