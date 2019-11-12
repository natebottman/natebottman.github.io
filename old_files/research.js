$(function () {
    $('dd').hide();
    $('dt').css("cursor", "pointer")
           .click(function (event) {
               if (event.target.tagName !== "A") {
                   $(this).next().slideToggle();
               }
           })
           .mouseover(function (event) {
               if (event.target.tagName !== "A" ){
                   $(this).addClass("hovered");
               } else {
                   $(this).removeClass("hovered");
               }
           })
           .mouseleave(function (event) {
               $(this).removeClass("hovered");
           });
    });
