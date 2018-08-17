$(window).on('scroll', function(){
    if ($(window).scrollTop()){
        $('nav').addClass('black');
    }
    else{
        $('nav').removeClass('black');
    }
})

$(document).ready(function(){
    $(".menu h4").click(function(){
        $("nav ul").toggleClass("active")
    })
    $("nav ul li a").click(function(){
        $("nav ul").toggleClass("active")
    })


    // var baseUrl = document.location.pathname
    // $(".images img").click(function(){
    //     alert(baseUrl)
    //     location.replace(baseUrl)
    // })

})