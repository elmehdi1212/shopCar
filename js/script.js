$(document).ready(function(){
      /* loading page*/
      $(window).on('load',function(){
        $('.loading').fadeOut(1000,function(){
            $('body').css('overflow','auto');
            $('body,html').animate({
                scrollTop:0
            },0);
        })
    })
   
    $(function(){
        $('.header').height($(window).height());

        $(window).resize(function(){
            $('.header').height($(window).height());

        })


        
    })

    $('.venobox').venobox();

    /* color for navigation  */ 
    $(window).scroll(function(){
        if($(window).scrollTop() >= 100){
            $('nav').css({
                "background-color" : "#040a27",
                'padding': '7px 0'
            })
        }
        else{
            $('nav').css({
                'background-color':'transparent',
                'padding':'15px 0'
            })

        }
    })

    if($(window).scrollTop() >=100){
        $('nav').css({
            "background-color" : "#040a27",
            'padding':'7px,0'
        })
    }
    else{
        $('nav').css({
            'background-color':'transparent',
            'padding':'15px 0'
        })
    }


    $(".testimonials .btns .btn").on('click',function(e){ 
        $(this).addClass('active').siblings().removeClass('active')

        e.preventDefault()


        $("#" + $(this).data("click")).siblings().fadeOut(200,function(){

        $("#" + $(this).data("click")).siblings().removeClass("active");

        })

        $("#" + $(this).data("click")).delay(200).fadeIn(200,function(){
            $("#" + $(this).data("click")).addClass("active");
        }) 
    });


    $('.owl-carousel').owlCarousel({
        loop:true,
        dots:true,
        center:true,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    $('.faq .content .info i').on("click",function(){
        $(this).parent().parent().find('p').slideToggle(300);
        if($(this).hasClass('fas fa-plus-circle')){
            $(this).attr('class','fas fa-minus-circle'); 
            $(this).css('color','#f82324');  
            $(this).siblings().css('color','#f82324');    
        }
        else{
            $(this).attr('class','fas fa-plus-circle');
            $(this).css('color','#000');
            $(this).siblings().css('color','#000');
        }
    })

    $(window).scroll(function(){
        if($(window).scrollTop()>=1000){
            $('.up').fadeIn(500);
        }
        else{
            $('.up').fadeOut(500);
        }
    })

    $('.up').on('click',function(){
        $('html,body').animate({
            scrollTop:0

        
        },1000)
    })
    /*smoot scroll */
    $('nav .list a').on('click',function(){
        $('html,body').animate({
            scrollTop:$('#'+ $(this).data('scroll')).offset().top-100
        },1000)
    })

  

    /*AOS*/
    $(function(){
        AOS.init();
        window.addEventListener('load',AOS.refresh);
    
    })
    
});