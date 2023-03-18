export const productsSliderSettings = {
  infinite: true,
  autoplaySpeed: 2000,
  autoplay: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  touchMove: false,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 4,
        touchMove: true,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        touchMove: true,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        touchMove: true,
      },
    },
  ],
};

export const productImagesSettings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  swipeToSlide: true,
  touchMove: false,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 3,
        touchMove: true,
      },
    },
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        focusOnSelect: false,
        rows: 2,
        slidesToShow: 3,
        touchMove: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        vertical: false,
        verticalSwiping: false,
        rows: 1,
        slidesToShow: 4,
        touchMove: true,
      },
    },
  ],
};
