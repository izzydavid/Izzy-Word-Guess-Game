$('#playButton').hide(); 
$('strong').hide();
$('#blanks').hide();
$('#animeTitle').hide();
$('#myBtn').hide(); 
$('#myBtn2').hide(); 
$('#animePick').hide(); 
$('#playButton').delay(200).fadeIn('slow'); 


$("#playButton").on("click", function () {
	$('#myBtn').delay(200).fadeIn('slow');
	$('#myBtn2').delay(200).fadeIn('slow'); 
	$('#animePick').delay(200).fadeIn('slow'); 
	$('#playButton').remove(); 
  });

  $("#myBtn").on("click", function () {
	$('strong').delay(200).fadeIn('slow');
	$('#blanks').delay(200).fadeIn('slow'); 
	$('#animeTitle').delay(200).fadeIn('slow'); 
	$('#myBtn').remove(); 
	$('#myBtn2').remove(); 
	$('#animePick').remove(); 

  });

  $("#myBtn2").on("click", function () {
	$('strong').delay(200).fadeIn('slow');
	$('#blanks').delay(200).fadeIn('slow'); 
	$('#animeTitle').delay(200).fadeIn('slow'); 
	$('#myBtn2').remove(); 
	$('#myBtn').remove(); 
	$('#animePick').remove(); 


  });