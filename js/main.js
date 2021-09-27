var x = document.getElementById("myAudio");
function timer(){
    var sec = 160 ;
    var timer = setInterval(function(){
        document.getElementById('safeTimerDisplay').innerHTML='seconds: ' + sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}
/*date*/
const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
const dateObj = new Date();
const month = monthNames[dateObj.getMonth()];
const day = String(dateObj.getDate()).padStart(2, '0');
const year = dateObj.getFullYear();
const output = month  + '\n'+ day  + ',' + year;

document.querySelector('.date').textContent = output;
/**** */


$('.groub-buttons button').on('click', function() {
    'use strict';
    x.play();
    $('.groub-buttons button').removeClass("ac");
    $(this).addClass('ac')
})
var buttons = $('.groub-buttons button'),
    groub = $('.groub-buttons'),
    input = document.getElementById("input");
$(".sub").on('click', function() {
    x.play();
    if(buttons.hasClass("ac")){
    }else{
        groub.addClass('animate');
    }
    if(input.value === ""){
        console.log("k")
        $(".input").css('animation', 'animate .5s')
    }else{
        if(buttons.hasClass("ac")){
            $('.main-content').fadeOut(100);
            $('.loading ').fadeIn(100);


            const InputData = input.value,
                buttonData = $(".ac").text();
            $(".device h6").text(buttonData);
            $(".user h6").text(InputData);
            console.log(InputData)
            setTimeout(function () {

                $('.main-content').fadeIn(100);
                $('.container-1 ').fadeOut(100);
                $('.container-2 ').fadeIn(1000);
                $('.loading ').fadeOut(100);
            }, 5000)
        }
    }
})


$('.chose-1 .cont-chose').on('click', function() {
    x.play();
    'use strict';
    $('chose-1 .cont-chose').removeClass("x");
    $(this).addClass('x');
    const naumberUs = $('.x h6').text();
    console.log(naumberUs)
    $('.chose-1').hide(500)
    $('.chose-2').show(1000)
    $('.us').text(naumberUs);
})
$('.chose-2 .cont-chose').on('click', function() {
    'use strict';
    x.play();
    $('chose-1 .cont-chose').removeClass("ag");
    $(this).addClass('ag');
    const naumberAg = $('.ag h6').text();
    console.log(naumberAg)
    $('.chose-2').hide(500);
    end();
    $(".loading-end").addClass('d-flex');
    $('.loading-end .box-final').animate({
        top: 0
    })
    $('.ag').text(naumberAg);
})
function power() {
    x.play();
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
}
$('.two').fadeOut(-110);
$('.three').fadeOut(-100);
$('.end').fadeOut(-100);
function end() {
        
    setTimeout(function() {
        $('.one').fadeOut();
    }, 2000)
    setTimeout(function() {
        $('.two').fadeIn(100);
        power();
    }, 2400)
    setTimeout(function() {
        $('.two').fadeOut(-100);
        $('.three').fadeIn(100);
        power();
    }, 8000)
    setTimeout(function() {
        $('.three').fadeOut(-100);
        $('.end').fadeIn(100);
    }, 12500)
    setTimeout(function() {
        timer();
        $('.box-final ').fadeOut(-100);
        $('.window-end').fadeIn(100);
    }, 17000)
} 
