// Displaying the day
var reformatDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(reformatDate);


// Print activity
var activityInput = $('#activity');

// var printActivity = function ()