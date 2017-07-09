$(document).ready(function(){
  var user = {};

    $("#submitButton").on("click", function(event){
      event.preventDefault();

      user.firstName = $("#firstName").val();
      user.lastName = $("#lastName").val();
      user.emailAddress = $("#emailAddress").val();
      user.company = $("#company").val();
      user.title = $("#title").val();
      user.country = $("#country").val();
      user.state = $("#state").val();
      user.additionalComments = $("#additionalComments").val();

      clearUserInfo();
      displayUserInfo(user);

      document.getElementById("myForm").reset();
    });//closes submitButton.on('click')

    var displayUserInfo = function(user){
      $("#formDisplay").prepend("<th>You Entered:</th>");

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

    var clearUserInfo = function(){
      $("th").remove();
      $("tr").remove();
      $("#clearForm").remove();
    };

    $("#formDisplay").on('click', '#clearData', function(){
      $("#formDisplay").empty();
      // displayUserInfo(user);
    });

  });

  // $('#taskList').on('click', '.deleteButton', function(){
  //     var idOfTaskToDelete = $(this).parent().parent().data().id;
  //     console.log(idOfTaskToDelete);
  //     swal({
  //       title: 'Are you sure you want to delete?',
  //       text: "Do you really want to delete this task?",
  //       type: 'warning',
  //       showCancelButton: true,
  //       confirmButtonText: 'Yes, delete it!'
  //     }).then(function() {
  //       swal(
  //         'Deleted!',
  //         'Your task has been deleted.',
  //         'success'
  //       )
  //       deleteTask(idOfTaskToDelete);
  //       $('#taskList').empty();
  //       getTaskData();
  //     })
  //
  //   });
