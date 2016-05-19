$(document).ready(function() {
    function randomColor() {
        return '#' + Math.random().toString(16).slice(2, 8);
    };

    $('body').css('background-color', randomColor());
    $('button').css('background-color', randomColor());

    $('button').on('click', function() {
        $('body').css('background-color', randomColor());
        $('button').css('background-color', randomColor());
    });

})
