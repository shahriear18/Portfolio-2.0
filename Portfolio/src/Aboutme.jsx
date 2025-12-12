import React from "react";

const Aboutme = () => {
  return (
    <div className=" container">
      <div className=" h-[600px] text-[white]">
        <p className="edusa text-[40px] text-center mb-[100px]">About <span className=" text-[#8181ff]">me</span></p>
        <div className="  flex justify-center gap-30">
          <div className=" overflow-hidden h-[330px] w-[250px] rounded-[20px]">
            <img className=" mt-[px]" src="main-img.jpg" alt="" />
          </div>
          <div>
            <h2 className=" text-[25px] edusa underline mb-[20px]">
              Personal Information
            </h2>
            <div className=" flex gap-20">
              <ul className=" edusa text-[18px] grid gap-4">
                <li>
                  Full Name :{" "}
                  <span className=" text-[#8181ff]">Shahriear Al AMin</span>
                </li>
                <li>
                  Nickname : <span className=" text-[#8181ff]">Rion</span>
                </li>
                <li>
                  Age : <span className=" text-[#8181ff]">21</span>
                </li>
                <li>
                  Phone : <span className=" text-[#8181ff]">01788869780</span>
                </li>
              </ul>
              <div>
                <ul className=" edusa text-[18px] grid gap-4 mt-[-4px]">
                  <li>
                    Adress :{" "}
                    <span className=" text-[#8181ff]">Naogaon , Rajshahi</span>
                  </li>
                  <li>
                    Nationality :{" "}
                    <span className=" text-[#8181ff]">Bangladeshi</span>
                  </li>
                  <li>
                    Language :{" "}
                    <span className=" text-[#8181ff]">
                      Bangla (Native) , English
                    </span>
                  </li>
                  <li>
                    Email :{" "}
                    <span className=" text-[#8181ff] hover:underline cursor-pointer">krion8201@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className=" w-[600px] mt-[40px]">
              I am <span  className=" text-[#8181ff]">Shahriear Al Amin</span> . Front-end Developer focused on crafting clean &
              user-friendly experiences , i am passionate about building
              excellent <span className=" text-[#8181ff]">software</span>  that improves the loves of those around me
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
