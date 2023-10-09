import React from "react";
import Image from "next/image";
import logo from "../public/assets/images/b02c1f10b5a65fb8c8cc58ae1c0a7231.png"

const Footer = () => {
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
                    <li>
                      <a
                        className="text-gray-500 hover:text-gray-700 font-medium block pb-2 text-md uppercase"
                        href="https://www.creative-tim.com/presentation?ref=njs-profile"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-500 hover:text-gray-700 font-medium block pb-2 text-md uppercase"
                        href="https://blog.creative-tim.com?ref=njs-profile"
                      >
                        Shop
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-500 hover:text-gray-700 font-medium block pb-2 text-md uppercase"
                        href="https://www.github.com/creativetimofficial?ref=njs-profile"
                      >
                        Drops
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-500 hover:text-gray-700 font-medium block pb-2 text-md uppercase"
                        href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                      >
                        Cart
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-500 hover:text-gray-700 font-medium block pb-2 text-md uppercase"
                        href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                      >
                        Blog
                      </a>
                    </li>
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
                <button
                  className="bg-black text-white text-xl shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-4"
                  type="button"
                >
                  <i className="fab fa-facebook-square"></i>
                </button>
                <button
                  className="bg-black text-white text-xl shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-4"
                  type="button"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  className="bg-black text-white text-xl shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-4"
                  type="button"
                >
                  <i className="fab fa-instagram"></i>
                </button>
                <button
                  className="bg-black text-white text-xl shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-4"
                  type="button"
                >
                  <i className="fab fa-tiktok"></i>
                </button>
                <button
                  className="bg-black text-white text-xl shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-4"
                  type="button"
                >
                  <i class="fab fa-snapchat"></i>
                </button>
              </div>
              
              <div>
                <Image src={logo} height={60} />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap text-left">
            <div className="w-full lg:w-6/12 px-4">
              <div className="py-7">
                <p className="text-[0.56rem] uppercase font-bold pb-2"></p>
              </div>
              <div className="w-full flex justify-between py-3 text-left lg:pl-4 lg:pr-4">
                <span className="text-xs text-gray-700 font-medium underline">
                  Privacy Center
                </span>
                <span className="text-xs text-gray-700 font-medium underline">
                  Privacy & Cookie Policy
                </span>
                <span className="text-xs text-gray-700 font-medium underline">
                  Manage Cookies
                </span>
              </div>
              <div className="w-full flex justify-between py-3 text-left lg:pl-4 lg:pr-16">
                <span className="text-xs text-gray-700 font-medium underline ml-0">
                  Terms & Conditions
                </span>
                <span className="text-xs text-gray-700 font-medium underline">
                  Copyright Notice
                </span>
                <span className="text-xs text-gray-700 font-medium underline">
                  Imprint
                </span>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="pt-3">
              <h5 className="text-md italic mt-0 text-gray-700 font-medium w-6">
                WE ACCEPT
            </h5>
              </div>
              <div className="w-full flex py-3">
                <span>
                  <img
                    src="../assets/MasterCard.svg"
                    className="w-16 mr-3"
                    alt="mastercard"
                  />
                </span>
                <span>
                  <img
                    src="../assets/PayPal.svg"
                    className="w-16 mr-3"
                    alt="PayPal"
                  />
                </span>
                <span>
                  <img
                    src="../assets/eBay.svg"
                    className="w-16 mr-3"
                    alt="eBay"
                  />
                </span>
                <span>
                  <img
                    src="../assets/GooglePay.svg"
                    className="w-16 mr-3"
                    alt="GooglePay"
                  />
                </span>
                <span>
                  <img
                    src="../assets/monobank.svg"
                    className="w-16 mr-3"
                    alt="monobank"
                  />
                </span>
                <span>
                  <img
                    src="../assets/Discover.svg"
                    className="w-16 mr-3"
                    alt="Discover"
                  />
                </span>
                <span>
                  <img
                    src="../assets/WesternUnion.svg"
                    className="w-16 mr-3"
                    alt="WesternUnion"
                  />
                </span>
                <span>
                  <img
                    src="../assets/Payoneer.svg"
                    className="w-16 mr-3"
                    alt="Payoneer"
                  />
                </span>
              </div>
              <div className="w-full flex py-3">
                <span>
                  <img
                    src="../assets/ApplePay.svg"
                    className="w-16 mr-3"
                    alt="ApplePay"
                  />
                </span>
                <span>
                  <img
                    src="../assets/AmericanExpress.svg"
                    className="w-16 mr-3"
                    alt="AmericanExpress"
                  />
                </span>
                <span>
                  <img
                    src="../assets/Amazon.svg"
                    className="w-16 mr-3"
                    alt="Amazon"
                  />
                </span>
                <span>
                  <img
                    src="../assets/AliPay.svg"
                    className="w-16 mr-3"
                    alt="AliPay"
                  />
                </span>
                <span>
                  <img
                    src="../assets/BitPay.svg"
                    className="w-16 mr-3"
                    alt="BitPay"
                  />
                </span>
                <span>
                  <img
                    src="../assets/Bitcoin.svg"
                    className="w-16 mr-3"
                    alt="Bitcoin"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-black" />
        <div className="w-full flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-950 font-bold py-1">
              ©{" "}
              <span id="get-current-year">
                2023-2024 Kinki Fish All Rights Reserved
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
