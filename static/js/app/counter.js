/**
 * Created by jhonjairoscalablepath on 11/15/16.
 */
$(document).ready(function(){
    $('#clock').countdown('2016/12/15 12:00:00')
    .on('update.countdown', function(event) {
        var format = '%D Days %H:%M:%S';
        $(this).html(event.strftime(format));
    }).on('finish.countdown', function(event) {
        $(this).html('This offer has expired!').parent().addClass('disabled');
    });
});
