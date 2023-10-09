import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const NewTshirts = ({props}) => {
   
    return (
        <div className="mt-11">
            <div>
                <p className="uppercase text-3xl font-bold text-center animatePulse">{props}</p>
            </div>
            <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 animatePulse">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={5} step={1} infinite={true} isPlaying={true} interval={1500}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                    <Slide index={0}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="../assets/images/1212ce490381edbb8c59b6db1235dd9d.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="../assets/images/cc5efc62cf17784e73aa31fb8f4b32cd.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="../assets/images/b18e74bf4a7655fef70d2dc5b4e92a12.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="../assets/images/ab59b429f6bf146244871c8bb1349397.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="../assets/images/1212ce490381edbb8c59b6db1235dd9d.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                    <Slide index={5}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="../assets/images/cc5efc62cf17784e73aa31fb8f4b32cd.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                    <Slide index={6}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="../assets/images/b18e74bf4a7655fef70d2dc5b4e92a12.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                    <Slide index={7}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="../assets/images/ab59b429f6bf146244871c8bb1349397.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                    <Slide index={8}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="../assets/images/1212ce490381edbb8c59b6db1235dd9d.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                    <Slide index={9}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="../assets/images/cc5efc62cf17784e73aa31fb8f4b32cd.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                    <Slide index={10}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="../assets/images/b18e74bf4a7655fef70d2dc5b4e92a12.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                    <Slide index={11}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="../assets/images/ab59b429f6bf146244871c8bb1349397.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for tablet and medium size devices */}
                <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={2} step={1} infinite={true} isPlaying={true} interval={1500}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                    <Slide index={0}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="../assets/images/1212ce490381edbb8c59b6db1235dd9d.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="../assets/images/cc5efc62cf17784e73aa31fb8f4b32cd.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="../assets/images/b18e74bf4a7655fef70d2dc5b4e92a12.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="../assets/images/ab59b429f6bf146244871c8bb1349397.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="../assets/images/1212ce490381edbb8c59b6db1235dd9d.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                    <Slide index={5}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="../assets/images/1212ce490381edbb8c59b6db1235dd9d.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                    <Slide index={6}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="../assets/images/1212ce490381edbb8c59b6db1235dd9d.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                    <Slide index={7}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="../assets/images/1212ce490381edbb8c59b6db1235dd9d.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                    <Slide index={8}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="../assets/images/1212ce490381edbb8c59b6db1235dd9d.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                    <Slide index={9}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="../assets/images/1212ce490381edbb8c59b6db1235dd9d.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                    <Slide index={10}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="../assets/images/1212ce490381edbb8c59b6db1235dd9d.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                    <Slide index={11}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="../assets/images/1212ce490381edbb8c59b6db1235dd9d.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for mobile and Small size Devices */}
                <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={1} step={1} infinite={true} isPlaying={true} interval={1500}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                    <Slide index={0}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="../assets/images/1212ce490381edbb8c59b6db1235dd9d.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="../assets/images/cc5efc62cf17784e73aa31fb8f4b32cd.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="../assets/images/b18e74bf4a7655fef70d2dc5b4e92a12.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="../assets/images/ab59b429f6bf146244871c8bb1349397.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="../assets/images/1212ce490381edbb8c59b6db1235dd9d.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                    <Slide index={5}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="../assets/images/1212ce490381edbb8c59b6db1235dd9d.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                    <Slide index={6}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="../assets/images/1212ce490381edbb8c59b6db1235dd9d.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                    <Slide index={7}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="../assets/images/1212ce490381edbb8c59b6db1235dd9d.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                    <Slide index={8}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="../assets/images/1212ce490381edbb8c59b6db1235dd9d.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                    <Slide index={9}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="../assets/images/1212ce490381edbb8c59b6db1235dd9d.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                    <Slide index={10}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="../assets/images/1212ce490381edbb8c59b6db1235dd9d.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                    <Slide index={11}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="../assets/images/1212ce490381edbb8c59b6db1235dd9d.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>
    )
}

export default NewTshirts