import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = ({ menuItems, footerItems, noteImgs, footerCopyright, footerFacebook,
  footerInstagram,
  footerTikTok,
  footerTwitter,
  footerSnapchat }) => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      ></link>

      <footer className="w-full relative bg-blueGray-200 pt-8 pb-6">
        <div className="w-full flex justify-center py-12">

        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 pl-3">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 pr-4">
                  <span className="block uppercase text-blueGray-500 text-md font-bold mb-2">
                    Direct Links
                  </span>
                  <ul className="list-unstyled">
                    {menuItems.map((menu, index) => (
                      <li>
                        <a
                          className="text-gray-500 hover:text-gray-700 font-medium block pb-2 text-md uppercase"
                          href={menu.url}
                        >
                          {menu.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full lg:w-2/5 px-4">
                  <span className="block uppercase text-blueGray-500 text-md font-bold mb-2">
                    Customer Care
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-500 hover:text-gray-700 font-medium block pb-2 text-md uppercase"
                        href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                      >
                        Contact us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-500 hover:text-gray-700 font-medium block pb-2 text-md uppercase"
                        href="https://creative-tim.com/terms?ref=njs-profile"
                      >
                        Payment
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4">
              <h5 className="text-lg mt-0 mb-2 text-gray-900 font-bold">
                SOCIALS
              </h5>
              <div className="pb-6 lg:mb-0 mb-6">
                <Link href={footerFacebook}>
                  <button
                    className="bg-black text-white text-xl shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-4"
                    type="button"
                  >
                    <i className="fab fa-facebook-square"></i>
                  </button>
                </Link>
                <Link href={footerTwitter}>
                  <button
                    className="bg-black text-white text-xl shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-4"
                    type="button"
                  >
                    <i className="fab fa-twitter"></i>
                  </button>
                </Link>
                <Link href={footerInstagram}>
                  <button
                    className="bg-black text-white text-xl shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-4"
                    type="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </button>
                </Link>
                <Link href={footerTikTok}>
                  <button
                    className="bg-black text-white text-xl shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-4"
                    type="button"
                  >
                    <i className="fab fa-tiktok"></i>
                  </button>
                </Link>
                <Link href={footerSnapchat}>
                  <button
                    className="bg-black text-white text-xl shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-4"
                    type="button"
                  >
                    <i class="fab fa-snapchat"></i>
                  </button>
                </Link>
              </div>

              <div>
                <Image src={noteImgs} width={200} height={60} />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap text-left">
            <div className="w-full lg:w-6/12 px-4">
              <div className="py-7">
                <p className="text-[0.56rem] uppercase font-bold pb-2"></p>
              </div>
              <div className="w-full flex justify-between py-3 text-left lg:pl-4 lg:pr-4">
                {footerItems.map((footerItem, index) => (
                  <span className="text-xs text-gray-700 font-medium underline">
                    {footerItem.label}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="pt-3">
                <h5 className="text-md italic mt-0 text-gray-700 font-medium w-6">
                  WE ACCEPT
                </h5>
              </div>
              <div className="w-full flex py-3">
             
              {/* {footerPayments.map((payIcon, index) => (
                <span>
                  <img key={index}
                    src={payIcon.link}
                    className="w-16 mr-3"
                    alt={payIcon.title}
                  />
                </span>
                ))} */}
                
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-black" />
        <div className="w-full flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-950 font-bold py-1">
              {footerCopyright}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
