$('#playButton').hide(); 
$('strong').hide()
$('#blanks').hide()
$('#animeTitle').hide()
$('#playButton').delay(26000).fadeIn('slow');


$("#playButton").on("click", function () {
	$('strong').delay(200).fadeIn('slow');
	$('#blanks').delay(200).fadeIn('slow'); 
	$("#animeTitle").delay(200).fadeIn('slow'); 
	$('#playButton').remove(); 
  });
