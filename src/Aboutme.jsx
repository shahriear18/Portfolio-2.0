import React from "react";

const Aboutme = () => {
  return (
    <div className=" container">
      <div className=" lg:h-[600px] text-[white] mb-[50px] lg:mb-[0px]">
        <p className="edusa text-[40px] text-center mb-[20px] lg:mb-[100px]">About <span className=" text-[#8181ff]">me</span></p>
        <div className="  lg:flex justify-center gap-30">
          <div className="mb-[30px] lg:mb-[0px] flex justify-center items-center overflow-hidden h-[330px] w-[100%]  lg:w-[250px] rounded-[20px]">
            <img className=" rounded-[20px] h-full max-w-[330px] mt-[px]" src="main-img.jpg" alt="" />
          </div>
          <div>
            <h2 className="text-center lg:text-left text-[25px] edusa underline mb-[20px]">
              Personal Information
            </h2>
            <div className=" lg:flex gap-20">
              <ul className=" edusa text-[18px] grid gap-4">
                <li className=" text-center">
                  Full Name :{" "}
                  <span className=" text-[#8181ff]">Shahriear Al AMin</span>
                </li>
                <li className="lg:text-left text-center">
                  Nickname : <span className=" text-[#8181ff]">Rion</span>
                </li>
                <li className=" text-center lg:text-left">
                  Age : <span className=" text-[#8181ff]">21</span>
                </li>
                <li className=" text-center lg:text-left">
                  Phone : <span className=" text-[#8181ff]">01788869780</span>
                </li>
              </ul>
              <div>
                <ul className="mt-[15px] edusa text-[18px] grid gap-4 lg:mt-[-4px]">
                  <li className="lg:text-left text-center">
                    Adress :{" "}
                    <span className="lg:text-left text-[#8181ff]">Naogaon , Rajshahi</span>
                  </li>
                  <li className=" text-center lg:text-left">
                    Nationality :{" "}
                    <span className=" text-[#8181ff]">Bangladeshi</span>
                  </li>
                  <li className=" text-center">
                    Language :{" "}
                    <span className=" text-[#8181ff]">
                      Bangla (Native) , English
                    </span>
                  </li>
                  <li className=" text-center lg:text-left">
                    Email :{" "}
                    <span className=" text-[#8181ff] hover:underline cursor-pointer">krion8201@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="w-full lg:w-[600px] mt-[40px] text-center lg:text-left">
              I am <span  className=" text-[#8181ff]">Shahriear Al Amin</span> . Front-end Developer focused on crafting clean &
              user-friendly experiences , i am passionate about building
              excellent <span className=" text-[#8181ff]">software</span>  that improves the loves of those around me.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
