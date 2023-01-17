// CHECK OK JS
console.log('Javascript viaggia');
console.log('');


$(document).ready(function(){

    // $("#mostra").click(function () {
    //     // $("h4").fadeIn(1000);
    //     $("h4").fadeTo(1000, 0.5)
    // });

    // $("#nascondi").click(function () {
    //     $("h4").fadeOut(1000);
    // });

    // $("#toggle").click(function () {
    //     $("h4").toggle(1000);
    // });


    // $("#mostra").click(function () {
    //     $("h4").slideDown(1000)
    // });

    // $("#nascondi").click(function () {
    //     $("h4").slideUp(1000);
    // });

    // $("#toggle").click(function () {
    //     $("h4").slideToggle(1000);
    // });


    
    // ---------- Parte 2 ----------- //

    $(".pt2 h4").click(function () {
        $(".pt2 p").slideToggle(1000);
    });



});
