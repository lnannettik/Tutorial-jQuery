// CHECK OK JS
console.log('Javascript viaggia');
console.log('');


/*

1) Gestire le classi con addClass(), removeClass() e toggleClass();
2) Utilizzare css() per leggere o modificare le proprietà di un elemento;
3) Spiegazione delle dimensioni in Jquery;

*/


$(document).ready(function() {

    $("#add").click(function(){

        $("#primo").addClass("red");

    });

    $("#remove").click(function(){

        $("#secondo").removeClass("red");

    });

    $("#toggle").click(function(){

        $("#terzo").toggleClass("red");

    });

    
    $("#read").click(function(){

        console.log($("#secondo").css("color"));

    });

    $("#clicca").click(function(){

        $(".dimensioni").width("200px").height("200px");

    });








    




});
