 $(document).ready(function() {


// This code pulls up the 8 poses based on the difficulty selection
$(".beginner-card").hide();
$(".intermediate-card").hide();
$(".advanced-card").hide();

   $(".beginner").click(function() {
      $(".intermediate-card").hide();
      $(".advanced-card").hide();
      $(".beginner-card").fadeIn(750);
   });

   $(".intermediate").click(function() {
      $(".beginner-card").hide();
      $(".advanced-card").hide();
      $(".intermediate-card").fadeIn(750);
   });

   $(".advanced").click(function() {
      $(".beginner-card").hide();
      $(".intermediate-card").hide();
      $(".advanced-card").fadeIn(750);
   });
 });













// All of this code is to pull data from Wolfram API:


 // let url = 'http://g-wolframaplha.herokuapp.com/v2/query?appid=LU5VY9-W54XP5TG4W&input=Inverted+Seal+Pose';
 //
 //   $(".buttons").click(function() {
 //     console.log("clicked it");
 //
 //
 //
 //
 //     $.ajax({
 //       url: url,
 //       success: function(result) {
 //         console.log(result);
 //       }
 //     });
 //   });

 // Pulls Wolfram Simple Data as image and makes it appear on the screen

 // $.ajax({
 //    url : url,
 // }).always(function(){
 //    $(".image").attr("src", url);
 //
 //
 // });
