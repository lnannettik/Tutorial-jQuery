// CHECK OK JS
console.log('Javascript viaggia');
console.log('');


/*

1) Caricare il contenuto di un file dentro un elemento con load();
2) metodo GET e POST

PS: ATTIVARE LIVE SERVER DA VSC (IN BASSO!!!!!)

*/


$(document).ready(function() {

    $("#clicca").click(function(){

        // 1) Caricare il contenuto di un file dentro un elemento con load();

        // $("p").load("prova.html");

        // $.getJSON("prova.json", function(data){

        //     console.log(data);

        // });


        // LA SEGUENTE CHIAMATA è DA PROVARE CON PHP ATTIVO, VERSO IL MINUTO 5:00 INCOMINCIA A PARLARE DEL SUO CORSO PHP E COME FARE PER VEDERE IL RISULTATO

        // $.ajax({
        //     url: "prova.php",
        //     type: "post",
        //     data: $(this).serialize(),
        //     success: function(response){
        //         console.log(response);
        //     },
        //     error: function(jqXHR, textStatus, errorThrown){
        //         console.log(textStatus, errorThrown);
        //     }
        // })

        $.ajax({
            url: "prova.json",
            dataType: "json",
            type: "get",
            success: function(response){
                console.log(response);
            },
            error: function(jqXHR, textStatus, errorThrown){
                console.log(textStatus, errorThrown);
            }
        })

        // ARRIVATI AL MINUTO 6:00



    });

    




});
