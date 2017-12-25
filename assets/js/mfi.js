/**
 * mfi.js contains all standard javascript libraries for this blog development.
 * Author: Muhammad Fathir Irhas
 * License: MIT
 * ------------------------------------------------------------------------------
 */



/**
 * @function dateTime 
 * @description Print current date and time
 * @author Muhammad Fathir Irhas
 * 
 */
function dateTime() {
    var today = new Date();
    var y = today.getFullYear();
    var m = today.getMonth() + 1;
    var d = today.getDate();
    var h = today.getHours();
    var mnt = today.getMinutes();
    var s = today.getSeconds();
    mnt = checkTime(mnt);
    s = checkTime(s);

    document.getElementById('txt').innerHTML = y + " / " + m + " / " + d + " - " + h + ":" + mnt + ":" + s;
    var t = setTimeout(dateTime,500);
}

function checkTime(i){
    if (i < 10) {i = "0" + i;} 
    return i;
}


/**
 * 
 * 
 */
jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);

        });
    });
});