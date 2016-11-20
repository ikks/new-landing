/**
 * Created by jhonjairoscalablepath on 11/15/16.
 */
$(document).ready(function(){
    $('#clock').countdown('2016/11/20 02:00:00')
    .on('update.countdown', function(event) {
        updateCounter(event.strftime('%D'), event.strftime('%H'), event.strftime('%M'), event.strftime('%S'));
    }).on('finish.countdown', function(event) {
        hideCountDownAndCityContainer();
    });

    /**
     * Update DOM elements with meaning time
     * @param {String} days, Ie '24'
     * @param {String} hours, Ie '12'
     * @param {String} minutes, Ie '59'
     * @param {String} seconds, Ie '48'
    */
    function updateCounter(days, hours, minutes, seconds){
      $('#days').html(days);
      $('#hours').html(hours);
      $('#minutes').html(minutes);
      $('#seconds').html(seconds);
    };

});

/**
 * Hide counter, city/event and main logo text DOM elements
*/
function hideCountDownAndCityContainer(){
    $('#clock').fadeOut(400, setCounterTextAndShow);
    $('#city-event-date-container').fadeOut();
    $('#main-logo-text').fadeOut();


}

/**
 * Set ticket url and show elements
*/
function setCounterTextAndShow(){
    $('#clockdiv').html('Tickets available now!!!');
    $('#main-logo-text').html('Coding the future');
    $('#city-event-date-container').addClass('blue-container-ticket');
    $('#tickets-link').prop("href", "https://pyconcolombia.eventbrite.com");


    $('#clock').fadeIn();
    $('#city-event-date-container').fadeIn();
    $('#main-logo-text').fadeIn();
}
