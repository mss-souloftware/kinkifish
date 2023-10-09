import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const NewTshirts = ({ productSlides }) => {
  return (
    <div className="mt-11">
      <div>
        {/* <p className="uppercase text-3xl font-bold text-center animatePulse">{props}</p> */}
      </div>
      <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 animatePulse">
        {/* Carousel */}
        <CarouselProvider
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={productSlides.length} // Use the length of productSlides
          visibleSlides={5}
          step={1}
          infinite={true}
          isPlaying={true}
          interval={1500}
        >
          {/* ButtonBack */}
          <ButtonBack
            role="button"
            aria-label="slide backward"
            className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
            id="prev"
          >
            {/* Add your ButtonBack content here */}
          </ButtonBack>

          <div className="w-full relative flex items-center justify-center">
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                {/* Map over productSlides and create Slide components */}
                {productSlides.map((slide, index) => (
                  <Slide index={index} key={index}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={slide.productImage.uri}
                        alt={slide.productImage.altText}
                        className="relative w-full object-cover"
                      />
                    </div>
                  </Slide>
                ))}
              </Slider>
            </div>

            {/* ButtonNext */}
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              {/* Add your ButtonNext content here */}
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default NewTshirts;
