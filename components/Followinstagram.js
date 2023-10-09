import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

const Followinstagram = () => {
    return (
        <div className="mt-12">
            <div>
                <p className="uppercase text-3xl font-bold text-center">Follow on instagram</p>
                <p className="lowercase text-2xl text-gray-500 underline text-center">@ <b className="font-semibold">kinki.fish</b></p>
            </div>
            <div className="flex items-center justify-center w-full h-full py-8">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={4} step={1} infinite={true} isPlaying={true} interval={1500}>
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
                                        <div className="flex flex-shrink-0 flex-col relative w-full sm:w-auto h-[30rem]">
                                            <img src="../assets/images/4e576dd11b8334279a71b6277c519845.png" alt="black chair and white table" className="relative w-full h-1/3" />
                                            <img src="../assets/images/9f0b00454a50829a47df41851af19088.png" alt="black chair and white table" className="relative w-full h-2/3 pt-6" />
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto h-[30rem]">
                                        <img src="../assets/images/a47a502eb48a5bd7f847b8d505674c8d.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                        <div className="flex flex-shrink-0 flex-col relative w-full sm:w-auto h-[30rem]">
                                        <img src="../assets/images/b8da0e08575e39ebd25e06185779e37f.png" alt="black chair and white table" className="relative w-full h-1/3" />
                                        <img src="../assets/images/7e9550d935a6a7600f493e538f5e6244.png" alt="black chair and white table" className="relative w-full h-2/3 pt-5" />
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto h-[30rem]">
                                        <img src="../assets/images/8dccdb2940266e1645e2ea84ad204977.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                    <div className="flex flex-shrink-0 flex-col relative w-full sm:w-auto h-[30rem]">
                                        <img src="../assets/images/e54ff471a014dc6019d9b0e1304166c4.png" alt="black chair and white table" className="relative w-full h-3/5 object-cover pb-5" />
                                        <img src="../assets/images/7dafff635d5ae1360f868bbfcd2777d0.png" alt="black chair and white table" className="relative w-full h-2/5 object-cover" />
                                    </div>
                                    </Slide>
                                    <Slide index={5}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto h-[30rem]">
                                        <img src="../assets/images/a7d0ab848c5397e505e8de4ba1c1be18.png" alt="black chair and white table" className="relative w-full object-cover" />
                                    </div>
                                    </Slide>
                                    <Slide index={6}>
                                    <div className="flex flex-shrink-0 flex-col relative w-full sm:w-auto h-[30rem]">
                                        <img src="../assets/images/4e576dd11b8334279a71b6277c519845.png" alt="black chair and white table" className="relative w-full h-1/3" />
                                        <img src="../assets/images/9f0b00454a50829a47df41851af19088.png" alt="black chair and white table" className="relative w-full h-2/3 pt-6" />
                                    </div>
                                    </Slide>
                                    <Slide index={7}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto h-[30rem]">
                                        <img src="../assets/images/a47a502eb48a5bd7f847b8d505674c8d.png" alt="black chair and white table" className="relative w-full object-cover" />
                                    </div>
                                    </Slide>
                                    <Slide index={8}>
                                    <div className="flex flex-shrink-0 flex-col relative w-full sm:w-auto h-[30rem]">
                                        <img src="../assets/images/b8da0e08575e39ebd25e06185779e37f.png" alt="black chair and white table" className="relative w-full h-1/3" />
                                        <img src="../assets/images/7e9550d935a6a7600f493e538f5e6244.png" alt="black chair and white table" className="relative w-full h-2/3 pt-5" />
                                    </div>
                                    </Slide>
                                    <Slide index={9}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto h-[30rem]">
                                        <img src="../assets/images/8dccdb2940266e1645e2ea84ad204977.png" alt="black chair and white table" className="relative w-full object-cover" />
                                    </div>
                                    </Slide>
                                    <Slide index={10}>
                                    <div className="flex flex-shrink-0 flex-col relative w-full sm:w-auto h-[30rem]">
                                        <img src="../assets/images/e54ff471a014dc6019d9b0e1304166c4.png" alt="black chair and white table" className="relative w-full h-3/5 object-cover pb-5" />
                                        <img src="../assets/images/7dafff635d5ae1360f868bbfcd2777d0.png" alt="black chair and white table" className="relative w-full h-2/5 object-cover" />
                                    </div>
                                    </Slide>
                                    <Slide index={11}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto h-[30rem]">
                                        <img src="../assets/images/a7d0ab848c5397e505e8de4ba1c1be18.png" alt="black chair and white table" className="relative w-full object-cover" />
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
                                        <div className="flex flex-shrink-0 flex-col relative w-full sm:w-auto h-[30rem]">
                                            <img src="../assets/images/4e576dd11b8334279a71b6277c519845.png" alt="black chair and white table" className="relative w-full h-1/3" />
                                            <img src="../assets/images/9f0b00454a50829a47df41851af19088.png" alt="black chair and white table" className="relative w-full h-2/3 pt-6" />
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto h-[30rem]">
                                        <img src="../assets/images/a47a502eb48a5bd7f847b8d505674c8d.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                        <div className="flex flex-shrink-0 flex-col relative w-full sm:w-auto h-[30rem]">
                                        <img src="../assets/images/b8da0e08575e39ebd25e06185779e37f.png" alt="black chair and white table" className="relative w-full h-1/3" />
                                        <img src="../assets/images/7e9550d935a6a7600f493e538f5e6244.png" alt="black chair and white table" className="relative w-full h-2/3 pt-5" />
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto h-[30rem]">
                                        <img src="../assets/images/8dccdb2940266e1645e2ea84ad204977.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                        <div className="flex flex-shrink-0 flex-col relative w-full sm:w-auto h-[30rem]">
                                        <img src="../assets/images/e54ff471a014dc6019d9b0e1304166c4.png" alt="black chair and white table" className="relative w-full h-3/5 object-cover pb-5" />
                                        <img src="../assets/images/7dafff635d5ae1360f868bbfcd2777d0.png" alt="black chair and white table" className="relative w-full h-2/5 object-cover" />
                                    </div>
                                    </Slide>
                                    <Slide index={5}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto h-[30rem]">
                                        <img src="../assets/images/a7d0ab848c5397e505e8de4ba1c1be18.png" alt="black chair and white table" className="relative w-full object-cover" />
                                    </div>
                                    </Slide>
                                    <Slide index={6}>
                                    <div className="flex flex-shrink-0 flex-col relative w-full sm:w-auto h-[30rem]">
                                        <img src="../assets/images/4e576dd11b8334279a71b6277c519845.png" alt="black chair and white table" className="relative w-full h-1/3" />
                                        <img src="../assets/images/9f0b00454a50829a47df41851af19088.png" alt="black chair and white table" className="relative w-full h-2/3 pt-6" />
                                    </div>
                                    </Slide>
                                    <Slide index={7}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto h-[30rem]">
                                        <img src="../assets/images/a47a502eb48a5bd7f847b8d505674c8d.png" alt="black chair and white table" className="relative w-full object-cover" />
                                    </div>
                                    </Slide>
                                    <Slide index={8}>
                                    <div className="flex flex-shrink-0 flex-col relative w-full sm:w-auto h-[30rem]">
                                        <img src="../assets/images/b8da0e08575e39ebd25e06185779e37f.png" alt="black chair and white table" className="relative w-full h-1/3" />
                                        <img src="../assets/images/7e9550d935a6a7600f493e538f5e6244.png" alt="black chair and white table" className="relative w-full h-2/3 pt-5" />
                                    </div>
                                    </Slide>
                                    <Slide index={9}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={10}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={11}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
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
                                        <div className="flex flex-shrink-0 flex-col relative w-full sm:w-auto h-[30rem]">
                                            <img src="../assets/images/4e576dd11b8334279a71b6277c519845.png" alt="black chair and white table" className="relative w-full h-1/3" />
                                            <img src="../assets/images/9f0b00454a50829a47df41851af19088.png" alt="black chair and white table" className="relative w-full h-2/3 pt-6" />
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto h-[30rem]">
                                        <img src="../assets/images/a47a502eb48a5bd7f847b8d505674c8d.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                        <div className="flex flex-shrink-0 flex-col relative w-full sm:w-auto h-[30rem]">
                                        <img src="../assets/images/b8da0e08575e39ebd25e06185779e37f.png" alt="black chair and white table" className="relative w-full h-1/3" />
                                        <img src="../assets/images/7e9550d935a6a7600f493e538f5e6244.png" alt="black chair and white table" className="relative w-full h-2/3 pt-5" />
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto h-[30rem]">
                                        <img src="../assets/images/8dccdb2940266e1645e2ea84ad204977.png" alt="black chair and white table" className="relative w-full object-cover" />
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                        <div className="flex flex-shrink-0 flex-col relative w-full sm:w-auto h-[30rem]">
                                        <img src="../assets/images/e54ff471a014dc6019d9b0e1304166c4.png" alt="black chair and white table" className="relative w-full h-3/5 object-cover pb-5" />
                                        <img src="../assets/images/7dafff635d5ae1360f868bbfcd2777d0.png" alt="black chair and white table" className="relative w-full h-2/5 object-cover" />
                                    </div>
                                    </Slide>
                                    <Slide index={5}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto h-[30rem]">
                                        <img src="../assets/images/a7d0ab848c5397e505e8de4ba1c1be18.png" alt="black chair and white table" className="relative w-full object-cover" />
                                    </div>
                                    </Slide>
                                    <Slide index={6}>
                                    <div className="flex flex-shrink-0 flex-col relative w-full sm:w-auto h-[30rem]">
                                        <img src="../assets/images/4e576dd11b8334279a71b6277c519845.png" alt="black chair and white table" className="relative w-full h-1/3" />
                                        <img src="../assets/images/9f0b00454a50829a47df41851af19088.png" alt="black chair and white table" className="relative w-full h-2/3 pt-6" />
                                    </div>
                                    </Slide>
                                    <Slide index={7}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto h-[30rem]">
                                        <img src="../assets/images/a47a502eb48a5bd7f847b8d505674c8d.png" alt="black chair and white table" className="relative w-full object-cover" />
                                    </div>
                                    </Slide>
                                    <Slide index={8}>
                                    <div className="flex flex-shrink-0 flex-col relative w-full sm:w-auto h-[30rem]">
                                        <img src="../assets/images/b8da0e08575e39ebd25e06185779e37f.png" alt="black chair and white table" className="relative w-full h-1/3" />
                                        <img src="../assets/images/7e9550d935a6a7600f493e538f5e6244.png" alt="black chair and white table" className="relative w-full h-2/3 pt-5" />
                                    </div>
                                    </Slide>
                                    <Slide index={9}>
                                        <div className="flex flex-shrink-0 flex-col relative w-full sm:w-auto h-[30rem]">
                                        <img src="../assets/images/b8da0e08575e39ebd25e06185779e37f.png" alt="black chair and white table" className="relative w-full h-1/3" />
                                        <img src="../assets/images/7e9550d935a6a7600f493e538f5e6244.png" alt="black chair and white table" className="relative w-full h-2/3 pt-5" />
                                        </div>
                                    </Slide>
                                    <Slide index={10}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto h-[30rem]">
                                        <img src="../assets/images/a47a502eb48a5bd7f847b8d505674c8d.png" alt="black chair and white table" className="relative w-full object-cover" />
                                    </div>
                                    </Slide>
                                    <Slide index={11}>
                                    <div className="flex flex-shrink-0 flex-col relative w-full sm:w-auto h-[30rem]">
                                        <img src="../assets/images/4e576dd11b8334279a71b6277c519845.png" alt="black chair and white table" className="relative w-full h-1/3" />
                                        <img src="../assets/images/9f0b00454a50829a47df41851af19088.png" alt="black chair and white table" className="relative w-full h-2/3 pt-6" />
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
    );
}
export default Followinstagram