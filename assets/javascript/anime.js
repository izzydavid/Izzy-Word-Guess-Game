//Begining of the user choice of the game//
document.addEventListener("DOMContentLoaded", function() {
    var elems = document.querySelectorAll(".carousel");
    var instances = M.Carousel.init(elems);
});
  document.addEventListener("DOMContentLoaded", function() {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems);
}),
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".modal");
      var instances = M.Modal.init(elems);
}),

  $("#playButton, strong, #blanks, #animeTitle, #animeTitle2, #myBtn, #myBtn2, #gifyButtons, h1, #animePick, #completeRow, #modal1").hide();
  $(".carousel, #carouselRow").hide(100);
  $("#playButton")
    .delay(1000)
    .fadeIn("slow");
  $("#playButton").on("click", function() {
    $("#myBtn")
      .delay(200)
      .fadeIn("slow");
    $("#myBtn2")
      .delay(200)
      .fadeIn("slow");
    $("#animePick")
      .delay(200)
      .fadeIn("slow");
    $("#playButton").remove();
    $("#video").animate({
      opacity: 0.8
    });
  });
  $("#myBtn").on("click", function() {
    $("strong")
      .delay(200)
      .fadeIn("slow");
    $("#blanks")
      .delay(200)
      .fadeIn("slow");
    $("#animeTitle")
      .delay(200)
      .fadeIn("slow");
    $("#btn3")
      .delay(200)
      .fadeIn("slow");
    $("#myBtn").remove();
    $("#myBtn2").remove();
    $("#animePick").remove();
      $("iframe").show(500).delay(23000).hide(500);   
      $("#carouselRow")
      .delay(200)
      .fadeIn("slow");
    $(".carousel, #gifyButtons")
      .delay(25000)
      .fadeIn("slow");
  });
  $("#myBtn2").on("click", function() {
    $("strong")
      .delay(200)
      .fadeIn("slow");
    $("#blanks")
      .delay(200)
      .fadeIn("slow");
    $("#animeTitle2")
      .delay(200)
      .fadeIn("slow");
    $("#btn3")
      .delay(200)
      .fadeIn("slow");
    $("#myBtn2").remove();
    $("#myBtn").remove();
    $("#animePick").remove();
      $("iframe").show(500).delay(23000).hide(500);   
      $("#carouselRow")
      .delay(200)
      .fadeIn("slow");
    $(".carousel, #gifyButtons")
      .delay(25000)
      .fadeIn("slow");
      M.AutoInit();

  });
  
  //play sound upon winning or losing a round
  
  function playSound(sound) {
    var audio = new Audio("sounds/" + sound + ".mp3");
    audio.play();
  }
  var animeShows = [
    "death note",
    "monster",
    "rurouni kenshin",
    "pokemon",
    "trigun",
    "naruto",
    "cowboy bepop",
    "evangelion",
    "dragon ball z",
    "flcl"
  ];
  var animeMovies = [
    "the wind rises",
    "grave of the fireflies",
    "my neighbor totoro",
    "princess mononoke",
    "ponya",
    "spirited away",
    "castle in the sky",
    "akira",
    "ghost in the shell",
    "howl moving castle",
    "samurai x"
  ];
  var topics = ["cowboy bepop", "trigun", "my neighbor totoro", "death note"];
  $("#myBtn3, #myBtn4, #myBtn5, #myBtn6").on("click", function intiialButtons() {
    //Grabbing and storing the data-anime property value from the button
    var anime = $(this).attr("data-name"); 
    //Constructing a queryURL using the anime name
  
    var queryURL =
      "https://api.giphy.com/v1/gifs/search?q=" +
      anime +
      "&api_key=Qxpp4x5d7fMc17qfyggEeDXHcJFmzIWO&limit=36"; 
      //Performing an AJAX request with the queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    }) 
    //After data comes back from the request
      .then(function(response) {
        console.log(queryURL);
        console.log(response); 
        //Start of For Loop for images and pushing the Gify images into the
        //Materialize framework/cards and establishing the two different states of the
        //Images "Still" and "Animated" when someone enters and leaves the element//
  
        for (var i = 0; i < 36; i++) {
          console.log(response.data[i].images.original.url);
          $(".carousel").prepend(`
                          <div class="carousel-item"> 
                              <img class="card-image hoverable" src='${
                            response.data[i].images.fixed_height_still.url
                          }' data-still='${
            response.data[i].images.fixed_height_still.url
          }' data-animate='${
            response.data[i].images.fixed_height.url
          }' data-state='still'>
                              <div class="card-action"> <a href="${
                            response.data[i].url
                          }" target="_blank">Click Here</a>
                              </div>
                              </div>`);
          M.AutoInit();
        }
  
        $(".card-image").hover(function() {
          //The attr jQuery method allows us to get or set the value of any attribute on our HTML element
          var state = $(this).attr("data-state"); // If the clicked image's state is still, update its src attribute to what its data-animate value is.
          //Then, set the image's data-state to animate
          //Else set src to the data-still value
  
          if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
          } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
          }
        }); //End of For Loop for images and pushing the Gify images into the materialize framework/cards and establishing the two different states of the images "Still" and "Animated" when someone enters and leaves the element//
      });
  });
  