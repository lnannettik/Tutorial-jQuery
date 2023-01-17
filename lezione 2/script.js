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
    
    // $('div').mouseleave(function(){
    //     console.log('sei uscito dal div');
    //     $(this).css("background-color", "lightgrey");

    // })

    // $('input').focus(function(){
    //     console.log('ho clikkato nel campo');
        
    // })

    // $('input').blur(function(){
    //     console.log('sei uscito dal campo');
        
    // })

    // $('input').change(function(){
    //     console.log('ho cambiato il testo del campo');
        
    // })

    // $(document).keypress(function(){
    //     console.log('ho schiacciato un tasto della tastiera');
    // });

    // $('input').on({

    //     focus: function(){
    //         console.log('ho clikkato nel campo');
    //     },

    //     blur: function () {
    //         console.log('sei uscito dal campo');
    //     },

    //     change: function(){
    //         console.log('hai cambiato il testo nel campo');
    //     }

    // });

    // $('div').on({

    //     mouseenter: function(){
    //         console.log('sei entrato nel div');
    //         $(this).css("background-color", "black")
    //     },

    //     mouseleave: function(){
    //         console.log('sei uscito dal div');
    //         $(this).css("background-color", "lightgrey")
    //     }

    // });

    
    // Al click sul bottone cambi il bgc del div

    $('button').on({

        click: function (){
            console.log('fai la magia');
            $("div").css("background-color", "black")
        }

    });






});
