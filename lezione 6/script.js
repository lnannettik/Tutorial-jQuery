// CHECK OK JS
console.log('Javascript viaggia');
console.log('');


$(document).ready(function() {

    $('button').click(function() {

        $(".quadrato").animate({

            left: '250px',
            width: '150px',
            height: '150px',
            // opacity: '0.5'
        
        }, 2000);
        
        $(".quadrato").animate({

            left: '500px',
            width: '300px',
            height: '300px',
            // opacity: '0.5'
        
        }, 2000);

        $(".quadrato").animate({

            left: '700px',
            width: '150px',
            height: '150px',
            // opacity: '0.5'
        
        }, 2000);

        $(".quadrato").animate({

            left: '0px',
            width: '150px',
            height: '150px',
            // opacity: '0.5'
        
        }, 2000);
        
        
    });

});
