// for single item
/*$(document).ready(function(){
$('.my_class').slick({

  });
});*/

// For Multiple item
$(document).ready(function(){
  $('.my_class').slick({
    accessibility: true,
    dots: true,
    infinite: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    // autoplay:true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
     
    ]
    });
  });