import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import Header from "./src/Header";

const Contact = () => {
  return (
    <>
      <div className=" container edusa">
        <h1 className=" mt-[30px] text-[35px] text-center">
          Contact <span className=" text-[#6a6ae9]">Me</span>
        </h1>
        <h2 className="mt-[10px] text-center">
          Lets <span className=" text-[#6a6ae9]">Build</span> Something{" "}
          <span className=" text-[#6a6ae9]">amazing</span> Together{" "}
          <span className="text-[#43d843]">drop a Message !</span>
        </h2>
        <div className="pb-20 flex justify-around mt-[50px]">
          <div className=" h-[300px]">
            <h2 className=" text-[23px] mb-[20px] mt-[20px]">
              My <span>contact's</span>
            </h2>
            <ul className=" grid gap-3 mt-[0px] mb-[20px]">
              <li className=" flex items-center">
                <IoIosMail className="mr-[10px] text-[#ff9900b6]" />
                Mail :-{" "}
                <i className=" hover:underline text-[14px] text-[#5c5ce4] ml-[5px]">
                  <a href=""> Krion8201@gmail.com</a>
                </i>
              </li>
              <li className=" flex items-center">
                <FaWhatsapp className="mr-[10px] text-[#00ff00]" /> Whats App :-{" "}
                <i className="hover:underline text-[14px] text-[#5c5ce4] ml-[5px]">
                  <a href="">01788869780</a>
                </i>
              </li>
              <li className=" flex items-center">
                <FaPhoneAlt className="mr-[10px] text-[#0026ff]" /> Phone :-{" "}
                <i className="hover:underline text-[14px] text-[#5c5ce4] ml-[5px]">
                  <a href="">01788869780</a>
                </i>
              </li>
              <li className=" flex items-center">
                <FaLocationDot className="mr-[10px] text-[#48ff00]" /> Permanent
                Adress : -{" "}
                <i className=" text-[14px] text-[#5c5ce4] ml-[5px]">
                  Manda,Naogaon,Rajshahi
                </i>
              </li>
              <li className=" flex items-center">
                <FaMagnifyingGlassLocation className="mr-[10px] text-[red]" />{" "}
                Present adress :-{" "}
                <i className=" text-[14px] text-[#5c5ce4] ml-[5px]">
                  Mirpur,Dhaka,Bangladesh
                </i>
              </li>
            </ul>
            <div className=" contact ml-[-50px] ">
              <ul className=" flex items-center">
                <li>
                  <a href="">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <form>
              <div className=" underline">
                <input
                  type="text"
                  placeholder="Your Name"
                  class="w-full mb-3 p-3 border-b-[1px] border-[#5e5c5c] focus:ring-0 outline-none"
                />
              </div>
              <p></p>
              <input
                type="email"
                placeholder="Your Email"
                class="w-full mb-3 p-3 border-b-[1px] border-[#5e5c5c] focus:ring-0 outline-none"
              />

              <textarea
                placeholder="Your Message..."
                class="w-full mb-3 p-3 border-b-[1px] border-[#5e5c5c] h-[100px]  focus:ring-0 outline-none"
                rows="6"
              ></textarea>

              <div className=" text-center">
                <button class="px-30 py-2 bg-[#6a6ae9] text-white rounded-lg">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className=" py-5 text-center edusa">
      <p>  2024-2025 All Right reserved</p>
      <p>Made by Shahriear <span className="text-[red]">❤</span></p>        
      </div>

    </>
  );
};

export default Contact;
