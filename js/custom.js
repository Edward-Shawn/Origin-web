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
    

    var windowWidth = $(window).width();


    

    if(windowWidth <= 1000){
        
        $(".menu .search i").click(function(){
            $(".search").addClass("active");
            $(".logo").addClass("add");
        })

        $(document).click(function(e){
            if($(e.target).closest(".search").length != 0){
                return false;
            }else if(!$(".search").val()){
                $(".search").removeClass("active");
                $(".logo").removeClass("add");
            }
        })

    }else{
        return false;
    }


    $(window).resize(function(){

    

        $(".search").removeClass("active");
        $(".logo").removeClass("add");
        var windowWidth = $(window).width();
        if(windowWidth < 1000){
           
            $(".menu .search i").click(function(){
                $(".logo").addClass("add");
                $(".search").addClass("active");
            })
        }else{
            $(".menu-btn").removeClass("on");
            $(".logo").css('left','0');
            $(".logo").removeClass("add");
            $(".logo").removeAttr("style");
            $(".mobile").removeClass("on");
            return false;
           
            
        }
        
    })
    
   


});