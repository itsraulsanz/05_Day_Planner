// Displaying the day
var reformatDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(reformatDate);
var hour = moment().hours();

// Save time and activity
$(".saveBtn").click(function () {
  var activity = $(this).siblings(".description").val();
  var timeActivity = $(this).parent().attr("id");
  localStorage.setItem(timeActivity, activity);
});

// Changing the style depending of the time
$(".time-block").each(function () {
  //Need to get the id for that time-block you are looking at in each instance
  var timeActivityBlock = $(this).attr("id");
  console.log(timeActivityBlock);

  //var hour = now.getHours();
  var currentHour = moment().format("HH");
  console.log(currentHour);
  $(this).switchClass("time-block", "past");

  //Then use an if statement to check this against the 'hour' variables

  //IF its less then add a class or past
  if (timeActivityBlock < currentHour) {
    console.log("PAST");
    $(this).switchClass("time-block", "past");

    //if its equal add a class of present
  }
  if (timeActivityBlock === currentHour) {
    console.log("PRESENT");
    $(this).switchClass("time-block", "present");

    //if its future add a class of future
  }
  if (timeActivityBlock > currentHour) {
    console.log("FUTURE");
    $(this).switchClass("time-block", "future");
  }
});

$("#09 .description").val(localStorage.getItem("09"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
$("#18 .description").val(localStorage.getItem("18"));
$("#19 .description").val(localStorage.getItem("17"));
$("#20 .description").val(localStorage.getItem("18"));
