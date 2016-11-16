/**
 * Created by jhonjairoscalablepath on 11/15/16.
 */
$(document).ready(function(){
    $('#clock').countdown('2016/11/20 02:00:00')
    .on('update.countdown', function(event) {
        updateCounter(event.strftime('%D'), event.strftime('%H'), event.strftime('%M'), event.strftime('%S'));
    }).on('finish.countdown', function(event) {
        $(this).html('This offer has expired!').parent().addClass('disabled');
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
