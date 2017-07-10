$(document).ready(function(){
  var user = {}; // creates empty user object

  $("#myForm").on('click', '#submitButton', function(event){ // assigns values to each user object property name:value
    event.preventDefault();
    user.firstName = $("#firstName").val();
    user.lastName = $("#lastName").val();
    user.emailAddress = $("#emailAddress").val();
    user.company = $("#company").val();
    user.title = $("#title").val();
    user.country = $("#country").val();
    user.state = $("#state").val();
    user.additionalComments = $("#addComments").val();
    displayUserInfo(user); // appends info to DOM calling displayUserInfo(), passing in the user object
    document.getElementById("myForm").reset(); // resets the form on submit
  });

  var displayUserInfo = function(user){
    $("#myForm").append("<h4>Please see below to verify information</h4>"); // a message to direct user to scroll down to verify information is correct
    $("#formDisplay").prepend("<h3>You Entered:</h3>");
    $("#formDisplay").append("<tr><td>First Name:</td><td>"+user.firstName+"</td></tr>");
    $("#formDisplay").append("<tr><td>Last Name:</td><td>"+user.lastName+"</td></tr>");
    $("#formDisplay").append("<tr><td>Email Address:</td><td>"+user.emailAddress+"</td></tr>");
    $("#formDisplay").append("<tr><td>Company:</td><td>"+user.company+"</td></tr>");
    $("#formDisplay").append("<tr><td>Title:</td><td>"+user.title+"</td></tr>");
    $("#formDisplay").append("<tr><td>Country:</td><td>"+user.country+"</td></tr>");
    $("#formDisplay").append("<tr><td>State:</td><td>"+user.state+"</td></tr>");
    $("#formDisplay").append("<tr><td>Additional Comments:</td><td>"+user.additionalComments+"</td></tr>");
    $("#formDisplay").append("<button type='button' class='btn btn-danger' id='clearData'>Delete</button>");
    $("td").addClass("col-xs-6");
  };

  $("#formDisplay").on('click', '#clearData', function(){ // clears data from #formDisplay on click of #clearData button
    $("#formDisplay").empty();
  });
});
