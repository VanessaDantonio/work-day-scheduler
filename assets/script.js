$(document).ready(function() {

// Display the current day
const currentDateEl = moment().format('dddd, MMMM Do YYYY');
// Set the content of #currentDay
$('#currentDay').html(currentDateEl);

renderText();

// Set colors for time-blocks for past, present and future
function timeColor() {
    let currentTime = moment().hour();

    $('.time-block').each(function () {
        var blockTime = parseInt($(this).attr('id').split('hour-')[1]);

        // Condition to set blockTime colors
        if (currentTime > blockTime) {
            $(this).addClass('past');
        }
        else if (currentTime === blockTime) {
            $(this).addClass('present');
        }
        else {
            $(this).addClass('future');
        }
    });
};

timeColor();

// Save user event input and the referenced time-block to local storage
$('.saveBtn').click(function (event) {
    event.preventDefault();
    let eventInput = $(this).siblings('.description').val();
    let eventHour = $(this).parent().attr('id');
    localStorage.setItem(eventHour, eventInput);
});

// Loads events from local storage
function renderText() {
    $('#hour-8 .description').val(localStorage.getItem('hour-8'));
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
};
})