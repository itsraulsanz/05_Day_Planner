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
    localStorage.setItem(timeActivity, activity)
 
});

$('#9 .description').val(localStorage.getItem('9'));
$('#10 .description').val(localStorage.getItem('10'));
$('#11 .description').val(localStorage.getItem('11'));
$('#12 .description').val(localStorage.getItem('12'));
$('#13 .description').val(localStorage.getItem('13'));
$('#14 .description').val(localStorage.getItem('14'));
$('#15 .description').val(localStorage.getItem('15'));
$('#16 .description').val(localStorage.getItem('16'));
$('#17 .description').val(localStorage.getItem('17'));
$('#18 .description').val(localStorage.getItem('18'));