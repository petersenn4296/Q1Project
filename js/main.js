 $(document).ready(function() {
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
// let url = 'http://g-wolframaplha.herokuapp.com/v2/query?appid=LU5VY9-W54XP5TG4W&input=Inverted+Seal+Pose';
//
//   $("#show-pose").click(function() {
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
// });


//
// $.ajax({
//    url : url,
// }).always(function(){
//    $(".image").attr("src", url);
//
//
// });
 });
