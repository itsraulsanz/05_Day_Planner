// Displaying the day
var update = function () {
  var reformatDate = moment().format("dddd, MMMM Do YYYY, HH:mm:ss a");
  $("#currentDay").text(reformatDate);
};
setInterval(update, 1000);

// Save time and activity
$(".saveBtn").click(function () {
  var activity = $(this).siblings(".description").val();
  var timeActivity = $(this).parent().attr("id");
  localStorage.setItem(timeActivity, activity);
});

// Changing the style depending of the time
$(".time-block").each(function () {

  var timeActivityBlock = $(this).attr("id");
  var currentHour = moment().format("HH");
  $(this).switchClass("time-block", "past");

  //If its less then add a class or past
  if (timeActivityBlock < currentHour) {
    // console.log("PAST");
    $(this).switchClass("time-block", "past");

    //if its equal add a class of present
  } if (timeActivityBlock === currentHour) {
    // console.log("PRESENT");
    $(this).switchClass("time-block", "present");

    //if its future add a class of future
  } if (timeActivityBlock > currentHour) {
    // console.log("FUTURE");
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
$("#19 .description").val(localStorage.getItem("19"));
$("#20 .description").val(localStorage.getItem("20"));
