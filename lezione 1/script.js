// CHECK OK JS
console.log('Javascript viaggia');
console.log('');


$(document).ready(function(){

    // nascondi tutti i tag p
    // $("p").hide();


    // nascondi l'elemento che ha data-val='ciao'
    // $("[data-val='ciao']").hide();

    // nascondi gli elementi tr pari nel tag tbody 
    $("tbody tr:even").hide();

});
