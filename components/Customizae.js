import React from 'react'
// import videoCustom from '../public/assets/passone1.mp4';

const Customizae = ({customizeTitle, customizeVideo, customizeBanner}) => {
  return (
    <div className="mt-11 overflow-hidden">
        <div>
            <p className="uppercase text-3xl font-bold text-center pb-6 animatePulse">{customizeTitle}</p>
        </div>
        <div className='bg-cover bg-center bg-fixed w-full xl:h-[55rem] lg:h-[45rem] h-[30rem] relative overflow-hidden'>
            {/* <div className='bg-black w-full h-full opacity-30 bg-bgVideoPlayImg bg-no-repeat'>
            </div> */}
            <video controls class="w-full h-full relative opacity-50 object-fill" src={customizeVideo}></video>
        </div>
        <div className="bg-customizeAddVideoImg bg-cover bg-center w-[100%] h-[34rem]"></div>
    </div>
  )
}

export default Customizae