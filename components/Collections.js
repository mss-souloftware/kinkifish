import React from 'react'

const Collections = ({ collectionsTitle, collectionCards }) => {
  return (
    <div className='mt-20'>
      <div>
        <p className="uppercase text-3xl font-bold text-center pb-0">{collectionsTitle}</p>
      </div>
      <div className="flex justify-center items-center">
        {/* <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ ---> */}
        <div className="container mx-auto py-12 2xl:px-0 w-full">
          <div className="flex flex-col jusitfy-center items-center space-y-10">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-4 md:gap-x-8 w-full">

              {collectionCards.map((card, index) => (

                <div index={index} key={card.cardBanner.id} className="relative group flex justify-center items-center h-[30rem] w-full my-3">
                  <div className='h-full w-full bg-black'>
                    <img className="object-center object-cover h-full w-full opacity-80" src={card.cardBanner.link} alt={card.title} />
                  </div>
                  <button className="bg-stone-800/70 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-20 z-10 absolute leading-none py-3 px-5 font-semibold text-3xl cursor-default hover:bg-black duration-200">{card.title}</button>
                  <a href={card.button.url} className='bottom-12 z-10 absolute uppercase text-white font-light border-b border-white cursor-pointer hover:text-black duration-200 hover:border-black'>{card.button.title}</a>

                </div>
              ))}

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Collections