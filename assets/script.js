$(document).ready(function() {

// Display the current day
const currentDateEl = moment().format('dddd, MMMM Do YYYY');
// Set the content of #currentDay
$('#currentDay').html(currentDateEl);
});