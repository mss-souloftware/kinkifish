import React from "react";
import Image from "next/image";
import { LuSearch } from 'react-icons/lu'
import { BiMenu } from 'react-icons/bi'

const Header = ({ menuItems, logoImgs, noteImgs }) => {
  return (
    <header>
      <nav className="bg-white relative w-full z-20 top-0 left-0 border-b border-gray-100 dark:border-gray-600">
        <Image src={logoImgs} className="absolute top-7 hidden md:block animatePulse" width={220} height={220} />
        <ul className="navigation max-w-[95vw] flex flex-col flex-wrap justify-between items-center relative mx-auto py-5 animatePulse">
          <div className="flex justify-end items-center w-full">

            <div className="flex justify-between items-center w-full xl:w-7/12 lg:w-3/5 md:w-2/3">
              <a className="logo mb-4" href="#">
                {/* <h3 className="font-bold text-2xl">LOGO</h3> */}
                <Image src={noteImgs} className="max-h-[81px] 2xl:ml-28 xl:ml-0" width={220} height={60} />
              </a>
              <div className="mysearchbar flex justify-center items-center text-sm border-b border-gray-400 font-light">
                <LuSearch className="mr-2" />
                <input type="text" placeholder="Search for an item..." className="outline-none text-gray-700" />
              </div>
            </div>


          </div>
          <input type="checkbox" id="check" />

          <span className="menu xl:w-2/3 lg:w-2/5 md:w-2/5 justify-between flex [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-bold [&>li>a]:text-sm uppercase text-gray-900 mt-2">
            {menuItems.map((menu, index) => (
              <li>
                <button href={menu.url} className="font-bold relative overflow-hidden pb-2 btnHome border-black tracking-wider leading-none uppercase">
                  <span class="absolute inset-x-0 h-[0.15rem] bottom-0 bg-black"></span>
                  {menu.label}
                </button>
              </li>
            ))}

            <label htmlFor="check" className="close-menu">
              X
            </label>
          </span>

          <label htmlFor="check" className="open-menu">
            <BiMenu />
          </label>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
