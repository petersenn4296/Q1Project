function openTab(event, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = $(".tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = $(".tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  event.currentTarget.className += " active";
}



$(document).ready(function() {

function date2() {
  var fullDate = new Date();
  var twoDigitMonth = fullDate.getMonth()+"";if(twoDigitMonth.length==1)	twoDigitMonth="0" +twoDigitMonth;
  var twoDigitDate = fullDate.getDate()+"";if(twoDigitDate.length==1)	twoDigitDate="0" +twoDigitDate;
  var currentDate = twoDigitDate + "/" + twoDigitMonth + "/" + fullDate.getFullYear();console.log(currentDate);
}



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
  button.click(function() {
    myModal.style.display = "block";
  });
  close.click(function() {
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
    if (un.val() !== storedName || pw.val() !== storedPw) {
      alert('Incorrect credentials');
    } else {
      alert('You are logged in.');
    }
  })

  // Pose Modal
  var modal2 = $('#poseModal');
  var button2 = $('.poses');
  var close = $('.close');
  let positon = 0;

  button2.click(function() {
    poseModal.style.display = "block";
    position = $(this).attr("id") - 1;
    console.log(position);
  });


  close.click(function() {
    poseModal.style.display = "none";
    hiddenAdd.style.display = "none";
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
    'http://g-wolframaplha.herokuapp.com/v1/simple?appid=LU5VY9-W54XP5TG4W&input=Extended+Triangle+Pose'
  ];

  // Beginner poses //
  $("#get-info").click(function() {
    console.log(url[position]);
    hiddenAdd2.style.display = "block";
    $(".wolf").hide();
    $.ajax({
      url: (url[position]),
      success: function(result) {
        $(".wolf").show();
        $(".wolf").attr("src", (url[position]));
      }
    });
  });

  $("#add-progress").click(function() {
    hiddenAdd.style.display = "block";
    lotusicon.style.display = "none";
    progressbox.style.display = "block";
    $(".date1").text(date2());
    $(".ass").css('z-index', 999)
    $(".bot").prepend(($(".ass")[position]));
    // console.log($("#A"));
    //document.body.super.main.progressbox.append($(this).ass[position]);
  });
    $("#defaultOpen").click();
});
