// CHECK OK JS
console.log('Javascript viaggia');
console.log('');


/*

1) prendere il contenuto di un elemento, con text(), html(), val();
2) prendere l'attributo di un elemento;
3) inserire il contenuto di elemento;
4) inserire valore ad un attributo;

*/


$(document).ready(function() {

    // text()
    console.log($("#primo").text());

    // html()
    console.log($("#primo").html());


    $("#start").click(function(){

        // val()
        console.log($("input").val());

        
        // 2) prendere l'attributo di un elemento 
        console.log($("a").attr("href"));


        // 3) inserire contenuto in un elemento - text()
        $("#secondo").text("Ti saluta sto cazzo");

        // 3) inserire contenuto in un elemento - html()
        $("#terzo").html("Ti saluta <strong>sto cazzo</strong>");

        // 3) inserire contenuto in un elemento - val()
        $("#input").val("Sto Cazzo");

    
        // 4) inserire un valore in un attributo
        $("a").attr("href", "https://facebook.com");

        

    });


});
