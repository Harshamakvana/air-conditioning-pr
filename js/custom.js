$(document).ready(function() {
    //Menu Js
    $('.menu_toggle_btn').click(function() {
        $('.in_header_wrapper').toggleClass('open_menu');
        $('html').toggleClass('cm-overflow');
    });
});