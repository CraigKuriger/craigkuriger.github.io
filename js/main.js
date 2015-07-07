$(document).ready(function() {

	$("#top-logo").hide().show("slow");

    $('.images').mouseenter(function() {
        $(this).animate({
            height: '+=10px'
        });
    });

    $('.images').mouseleave(function() {
        $(this).animate({
            height: '-=10px'
        }); 
    });

}); //End of doc ready