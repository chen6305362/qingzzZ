$(function(){
    $(".peijianhidden").parent().hover(function (){
        $(this).children().last().css("opacity","1")
    },function (){
        $(this).children().last().css("opacity","0")
    })
})



