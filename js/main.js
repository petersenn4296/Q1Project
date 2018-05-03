$(document).ready(function() {


  //   var unique = require('uniq');
  // const WolframAlphaAPI = require('wolfram-alpha-api');
  // const waApi = WolframAlphaAPI('LU5VY9-W54XP5TG4W');
  // waApi.getFull('sin x').then(console.log).catch(console.error);
  // waApi.getFull('Inverted Seal Pose').then(console.log).catch(console.error);


  $("#show-pose").click(function() {
    console.log("clicked it");

    // $.get('https://api.wolframalpha.com/v1/simple?appid=LU5VY9-W54XP5TG4W&i=Inverted+Seal+Pose').then(function(result) {
    //   console.log("here she blows");
    // });
    $.ajax({
      url: `https://g-wolframaplha.herokuapp.com/?t=the+matrix&y=&plot=short&r=json`,
      success: function(result) {
        console.log(result);
      }
    });
  });
});
