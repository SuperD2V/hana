export const sliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1.2,
  arrows: false,
  centerMode: false,
  responsive: [
    {
      breakpoint: 1441,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: false
      }
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false
      }
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        centerMode: false
      }
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1.4,
        slidesToScroll: 1,
        centerMode: false
      }
    }
  ]
};
