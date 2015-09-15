$(document).ready(function() {

    $('.carousel').carousel({
        interval: 20000
    })

	$("#top-logo").hide().show(1500);

    // $(document).scroll(function() {
    //     $(".code").attr("src", "img/GrumpyReading.jpg")
    // });

    // $(document).scrollstop(function() {
    //     alert("chode");
    //     $(".code").attr("src", "img/code.jpg")
    // });

    $(".code").mouseenter(function() {
        $(this).attr("src", "img/code2.jpg")
    });

    $(".code").mouseleave(function() {
        $(this).attr("src", "img/code1.jpg")
    });

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

    var $overlay = $('<div id="overlay"></div>');
    var $image = $('<img>');
    var $caption = $('<p></p>');

    $overlay.append($image);
    $overlay.append($caption);

    $("body").append($overlay);

    $("#gallery div a").click(function(event){
        event.preventDefault();
        var imageLocation = $(this).attr("href");

        $image.attr("src", imageLocation)

        $overlay.show();

        var captionText = $(this).children("img").attr("alt");
        $caption.text(captionText);

    });

    $overlay.click(function(){
        $overlay.hide();
    });

}); //End of doc ready
