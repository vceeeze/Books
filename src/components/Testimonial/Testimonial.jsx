import React from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const testimonialData = [
    {
      id: 1,
      name: "Victor",
      text: "As the narrative unfolds, readers are drawn into a tapestry of vivid landscapes, each chapter revealing a new layer of mystery.",
      img: "https://picsum.photos/101/101",
    },
    {
      id: 1,
      name: "Victor Eze",
      text: "Embark on an enchanting journey through the pages of  a spellbinding tale that seamlessly weaves together the threads of love.",
      img: "https://picsum.photos/102/102",
    },
    {
      id: 1,
      name: "Chibuike Ezeirunne",
      text: "Get ready to lose yourself in a world where every word is a brushstroke painting a vivid canvas of emotions",
      img: "https://picsum.photos/103/103",
    },
  ];

  // slider config
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="by-10">
      <div className="container">
        {/* header*/}
        <div
          data-aos="slide-up"
          className="text-center mb-20 max-w-[400px] mx-auto"
        >
          <p
            className="text-sm bg-clip-text text-transparent
            bg-gradient-to-r from-primary to-secondary"
          >
            Best Books
          </p>
          <h1 className="text-3xl font-bold">Testiimonial</h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            labore ab fugiat.
          </p>
        </div>
        {/*card section*/}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {testimonialData.map((data) => (
              <div className="my-6">
                <div
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl 
                    dark:bg-gray-800 bg-primary/10 relative  "
                >
                  <div>
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20 object-cover"
                    />
                  </div>
                  <div>
                    <div>
                      <p className="text-gray-500 text-sm">{data.text}</p>
                      <h1
                        className="text-xl font-bold text-black/80 
                                dark:text-white"
                      >
                        {data.name}
                      </h1>
                    </div>
                  </div>

                  <p
                    className="absolute top-0 right-0 font-serif
                    text-9xl text-black/20"
                  >
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
