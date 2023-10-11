import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const NewTshirts = ({ heroTitle, productSlides }) => {
  return (
    <div className="mt-11">
      <div>
        <p className="uppercase text-3xl font-bold text-center animatePulse">{heroTitle}</p>
      </div>
      <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 animatePulse">
        {/* Carousel code here */}
        {/* Use the productSlides data to populate the slider */}
        <CarouselProvider
          className="lg:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={productSlides.length} // Set the total number of slides based on productSlides length
          visibleSlides={5}
          step={1}
          infinite={true}
          isPlaying={true}
          interval={1500}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                {productSlides.map((slide, index) => (
                  <Slide index={index} key={slide.productImage.id}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      {/* Use slide.productImage data for the image source */}
                      <img src={slide.productImage.link} alt={slide.productImage.altText} className="relative w-full object-cover" />
                    </div>
                  </Slide>
                ))}
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>
        {/* Rest of the code */}
      </div>
    </div>
  );
};

export default NewTshirts;
