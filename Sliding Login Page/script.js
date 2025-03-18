$(document).ready(function(){
    
    $("#right-to-left").click(function(){
        $("#slide").animate({marginLeft:"0",});
        $(".top").animate({marginLeft:"100%",});
    });

    $("#left-to-right").click(function(){
        $("#slide").animate({marginLeft:"50%",});
        $(".top").animate({marginLeft:"0",});
    });

});