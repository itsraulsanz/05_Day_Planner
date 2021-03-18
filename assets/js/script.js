// Displaying the day
var reformatDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(reformatDate);
var hour = moment().hours();

// Print activity

var activityTime = "#activityHour";
var activityInput = "#activity";

// Save time and activity
$(".saveBtn").click(function() {
    var activity = $(this).siblings('.description').val();
    var timeActivity = $(this).parent().attr('id');
    console.log(activity)
    console.log(timeActivity)
    localStorage.setItem(timeActivity, activity)
    //alert('saved');
});

$('#9 .description').val(localStorage.getItem('9'));