// CHECK OK JS
console.log('Javascript viaggia');
console.log('');


$(document).ready(function(){

    // $('button').click(function(){
    //     console.log('sono stato clikkato');

    // })

    // $('div').mouseenter(function(){
    //     console.log('sei entrato nel div');
    //     $(this).css("background-color", "black");
        
    // })

    $("#mostra").click(function () {
        $("p").show();
    });

    $("#nascondi").click(function () {
        $("p").hide();
    });

    $("#toggle").click(function () {
        $("#p1").toggle(1000);
    });

    $("h4").click(function(){
        $("#p_accordion").toggle(1000)
    });
    
    
    $('#btn').click(function(){
        
        $(this).css("display", "none")
        window.print()
        
    })
    
});






