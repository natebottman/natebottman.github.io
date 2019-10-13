var usual_padding_top = false;

var adjust = function () {
    height = $('#header').height();
    if (height <= 195 && !usual_padding_top) {
        $('body').css("padding-top", "205px");
        usual_padding_top = true;
    }
    else {
        if (height > 195) {
            $('body').css("padding-top", (height + 12) + "px");
            usual_padding_top = false;
        }
    }
}

$(function () {
    $('#header').addClass("withjs");
    $('body').addClass("withjs")
        .removeClass("cf");

    usual_padding_top = true;
});


$(window).load(function () {
    adjust();
    $(window).resize(adjust);
});

