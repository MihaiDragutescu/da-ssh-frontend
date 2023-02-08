export const productsSliderSettings = {
  infinite: true,
  autoplaySpeed: 2000,
  autoplay: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

export const productImagesSettings = {
  infinite: false,
  autoplay: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  swipeToSlide: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        infinite: false,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        focusOnSelect: false,
        rows: 2,
        slidesToShow: 3,
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
      },
    },
  ],
};
