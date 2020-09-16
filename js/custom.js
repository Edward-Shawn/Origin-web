$(document).ready(function(){

    $(".menu-btn").click(function(){
        if($(".menu-btn").hasClass("on") == false){
            $(this).addClass("on");
            $(".mobile").addClass("on");
            $(".logo").css('left','200%');
            $(".menu .search").css('right','-1000px');
        }else{
            $(this).removeClass("on");
            $(".mobile").removeClass("on");
            $(".logo").css('left','50%');
            $(".menu .search").css('right','30px');
        }

    });
    

    

    

    $(".menu .search i").click(function(){
        $(".search").addClass("active");
        $(".menu .logo").css('margin-top','-60px');
    })
   
    
    $(document).click(function(e){
        if($(e.target).closest(".search").length != 0){
            return false;
        }else if(!$(".search").val()){
            $(".search").removeClass("active");
            $(".menu .logo").css('margin-top','0');
        }
    });


});