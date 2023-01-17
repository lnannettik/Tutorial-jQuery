// CHECK OK JS
console.log('Javascript viaggia');
console.log('');

/*
1) stop (stoppaTutto, saltaAnimazione);
2) concatenazione;
3) callback();
*/


//-------------------- stop(stoppaTutto, saltaAnimazione)

$(document).ready(function() {

    // $('#start').click(function() {

    //     $(".quadrato").animate({

    //         left: '250px',
    //         width: '150px',
    //         height: '150px',
    //         // opacity: '0.5'
        
    //     }, 2000);
        
    //     $(".quadrato").animate({

    //         left: '500px',
    //         width: '300px',
    //         height: '300px',
    //         // opacity: '0.5'
    //     }, 2000);

    //     $(".quadrato").animate({

    //         left: '700px',
    //         width: '150px',
    //         height: '150px',
    //         // opacity: '0.5'
    //     }, 2000);

    //     $(".quadrato").animate({

    //         left: '0px',
    //         width: '300px',
    //         height: '300px',
    //         // opacity: '0.5'
    //     }, 2000);

    // });


    // $('#stop').click(function() {

    //     // stoppa la singola animazione stop(false, false)
    //     // $(".quadrato").stop();

    //     // stoppa tutte le animazioni - stop(true,false)
    //     // $(".quadrato").stop(true);

    //     // salta la transizione dell'animazione in essere e va direttamente all'inizio della successiva
    //     $(".quadrato").stop(false, true);

    // });


    //-------------------------- 2) Concatenazione ---------//

    // $('#start').click(function() {

    //     $(".quadrato").animate({
    //         left: '250px',
    //         width: '150px',
    //         height: '150px',
    //     }, 2000).animate({
    //         left: '500px',
    //         width: '300px',
    //         height: '300px',
    //     }, 2000).animate({
    //         left: '700px',
    //         width: '150px',
    //         height: '150px',
    //     }, 2000).animate({
    //         left: '0px',
    //         width: '300px',
    //         height: '300px',        
    //     }, 2000);

    // });
    
    //----------------------- con fadeOut()

    $('#start').click(function() {

        $(".quadrato").animate({
            left: '250px',
            width: '150px',
            height: '150px',
        }, 2000).animate({
            left: '500px',
            width: '300px',
            height: '300px',
        }, 2000).animate({
            left: '700px',
            width: '150px',
            height: '150px',
        }, 2000).fadeOut(1000)

    });

    //---------------- 3) Callback --------------//

    // $('#start').click(function() {

    //     $(".quadrato").animate({
    //         left: '250px',
    //         width: '150px',
    //         height: '150px',
    //     }, 2000).animate({
    //         left: '500px',
    //         width: '300px',
    //         height: '300px',
    //     }, 2000, function() {
    //         alert("ciao dalla funzione di callback");
    //     })

    // });















});
