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
// Opens and closes the log in modal
var modal = $('#myModal');
var button = $('#butt');
var close = $('.close');
button.click(function () {
  myModal.style.display = "block";
});
close.click(function () {
  myModal.style.display = "none";
});


// Stores username and password to local storage


var un = $(".username");
var pw = $(".password");
// Stores UN and PW on click of register
$(".register").click(function store() {
    localStorage.setItem('username', un.val());
    localStorage.setItem('password', pw.val());
    if (pw.val().length >= 6) {
      alert("You have created an account");
    } else alert("Password must be 6 characters");

})
// Checks UN and PW on click of login
$(".login").click(function check() {
  console.log("Clicked");
    // stored data from the register-form
    var storedName = localStorage.getItem('username');
    var storedPw = localStorage.getItem('password');

    // check if stored data from register-form is equal to data from login form
    if(un.val() !== storedName || pw.val() !== storedPw) {
        alert('Incorrect credentials');
    }else {
        alert('You are logged in.');
    }
})

// Pose Modal
var modal2 = $('#poseModal');
var button2 = $('.poses');
var close = $('.close');
let positon = 0;

button2.click(function () {
  poseModal.style.display = "block";
  position = $(this).attr("id")-1;
});
close.click(function () {
  poseModal.style.display = "none";
});



let url = ['http://g-wolframaplha.herokuapp.com/v1/simple?appid=LU5VY9-W54XP5TG4W&input=Extended+Triangle+Pose',
'http://g-wolframaplha.herokuapp.com/v1/simple?appid=LU5VY9-W54XP5TG4W&input=Cow+Pose',
'http://g-wolframaplha.herokuapp.com/v1/simple?appid=LU5VY9-W54XP5TG4W&input=Childs+Pose',
'http://g-wolframaplha.herokuapp.com/v1/simple?appid=LU5VY9-W54XP5TG4W&input=Diamond+Pose',
'http://g-wolframaplha.herokuapp.com/v1/simple?appid=LU5VY9-W54XP5TG4W&input=Fire+Hydrant+Pose',
'http://g-wolframaplha.herokuapp.com/v1/simple?appid=LU5VY9-W54XP5TG4W&input=Cobra+Pose',
'http://g-wolframaplha.herokuapp.com/v1/simple?appid=LU5VY9-W54XP5TG4W&input=Side+Plank+Pose',
'http://g-wolframaplha.herokuapp.com/v1/simple?appid=LU5VY9-W54XP5TG4W&input=Locust+A+Pose',

'http://g-wolframaplha.herokuapp.com/v1/simple?appid=LU5VY9-W54XP5TG4W&input=Anantas+Pose',
'http://g-wolframaplha.herokuapp.com/v1/simple?appid=LU5VY9-W54XP5TG4W&input=Bird+of+Paradise+Pose',
'http://g-wolframaplha.herokuapp.com/v1/simple?appid=LU5VY9-W54XP5TG4W&input=Full+Bridge+Pose',
'http://g-wolframaplha.herokuapp.com/v1/simple?appid=LU5VY9-W54XP5TG4W&input=Fish+Pose',
'http://g-wolframaplha.herokuapp.com/v1/simple?appid=LU5VY9-W54XP5TG4W&input=Extended+Triangle+Pose',
'http://g-wolframaplha.herokuapp.com/v1/simple?appid=LU5VY9-W54XP5TG4W&input=Extended+Triangle+Pose',
'http://g-wolframaplha.herokuapp.com/v1/simple?appid=LU5VY9-W54XP5TG4W&input=Extended+Triangle+Pose',
'http://g-wolframaplha.herokuapp.com/v1/simple?appid=LU5VY9-W54XP5TG4W&input=Extended+Triangle+Pose',

'http://g-wolframaplha.herokuapp.com/v1/simple?appid=LU5VY9-W54XP5TG4W&input=Extended+Triangle+Pose',
'http://g-wolframaplha.herokuapp.com/v1/simple?appid=LU5VY9-W54XP5TG4W&input=Extended+Triangle+Pose',
'http://g-wolframaplha.herokuapp.com/v1/simple?appid=LU5VY9-W54XP5TG4W&input=Extended+Triangle+Pose',
'http://g-wolframaplha.herokuapp.com/v1/simple?appid=LU5VY9-W54XP5TG4W&input=Extended+Triangle+Pose',
'http://g-wolframaplha.herokuapp.com/v1/simple?appid=LU5VY9-W54XP5TG4W&input=Extended+Triangle+Pose',
'http://g-wolframaplha.herokuapp.com/v1/simple?appid=LU5VY9-W54XP5TG4W&input=Extended+Triangle+Pose',
'http://g-wolframaplha.herokuapp.com/v1/simple?appid=LU5VY9-W54XP5TG4W&input=Extended+Triangle+Pose',
'http://g-wolframaplha.herokuapp.com/v1/simple?appid=LU5VY9-W54XP5TG4W&input=Extended+Triangle+Pose'];

// Beginner poses //
$("#get-info").click(function() {
    console.log(url[position]);
    $(".wolf").hide();
    $.ajax({
       url: (url[position]),
       success: function(result) {
         console.log(result);
         $(".wolf").show();
         $(".wolf").attr("src", (url[position]));
       }
     });

   });
 });
///////////////////////////////////////////////////////////////////











// All of this code is to pull data from Wolfram API:




//let url = 'http://g-wolframaplha.herokuapp.com/v2/query?appid=LU5VY9-W54XP5TG4W&input=Extended+Triangle+Pose&format=image';

 //



  // $.ajax({
  //    url : url,
  // }).always(function(){
  //    $(".wolf").attr("src", url);
  //    console.log(url);
  // });


 // Pulls Wolfram Simple Data as image and makes it appear on the screen
