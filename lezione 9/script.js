// CHECK OK JS
console.log('Javascript viaggia');
console.log('');


/*

1) aggiungere contenuto ad un elemento, con append(), prepend(), after(), before();
2) rimuovere contenuto con remove() e empty();

*/


$(document).ready(function() {

    $("#aggiungi").click(function(){

        $("p").append(" <strong>Append</strong>");

        $("p").prepend(" <strong>Prepend</strong>");

        $("p").after("<strong>After</strong>");

        $("p").before("<strong>Before</strong>");

    });
    
    
    $("#rimuovi").click(function(){
        
        $("p").remove(".secondo");

    });

    $("#svuota").click(function(){
        
        $("div").empty();

    });


});
