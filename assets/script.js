$(document).ready(function() {

// Display the current day
const currentDateEl = moment().format('dddd, MMMM Do YYYY');
// Set the content of #currentDay
$('#currentDay').html(currentDateEl);

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
});