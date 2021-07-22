$(function(){

 
    $("#rateYo").rateYo({
        rating: 5,
        readOnly: true,
        starWidth: "17px",
        spacing: "6px",
        ratedFill: "#FFCB45"
      });

    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-arrow-prew" type="button"><img src="./img/slider__btn-left.png"></button>',
        nextArrow: '<button class="slick-arrow-next" type="button"><img src="./img/slider__btn-right.png"></button>',
        // responsive: [
        //   {
        //     breakpoint: 1400,
        //     settings: {
        //       slidesToShow: 2,
        //       slidesToScroll: 2,
        //       infinite: true,
        //       dots: true,
        //     }
        //   },
        //   {
        //     breakpoint: 850,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1,
        //       infinite: true,
        //       dots: true,
        //     }
        //   }
        // ]
      });




    // $(document).ready(function() {    
    //     $("*").find("a[href='"+window.location.href+"']").each(function(){  // Ищем текущую ссылку     
    //         $(this).addClass("current_link");     // Добавляем текущей ссылке class - current_link
    //     })
    //     });

  

});