import React from "react";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";
import { PiCodeBold } from "react-icons/pi";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";

const Skills = () => {
  return (
    <div id="Skills">
      <div className="container edusa">
            <h2 className ="lg:text-[30px] text-[25px] text-center pb-[50px]">My <span className="text-[#6f00ff]">Skills</span> and <span className="text-[#6f00ff]">Educations</span></h2>
        <div className="h-[60px] flex justify-between items-center">
          <i className="fa-brands fa-html5 text-[#ff5100] lg:text-[40px] text-[20px] lg:html"></i>
          <i className="fa-brands fa-css3 text-[#003cff] lg:text-[40px] text-[20px] css"></i>
          <i className="fa-brands fa-square-js text-[#fffb00] lg:text-[40px] text-[20px] js"></i>
          <i className="fa-brands fa-react text-[#00eeff] lg:text-[40px] text-[20px]"></i>
          <div className=" lg:text-[40px] text-[20px] bg-amber-50 text-[black] rounded-full">
            <RiNextjsFill />
          </div>
          <div className=" lg:text-[40px] tailwind text-[20px] text-[#00ccff]">
            <RiTailwindCssFill />
          </div>
          <i className="fa-brands fa-bootstrap text-[#6f00ff] lg:text-[40px] text-[20px]"></i>
          <div>
            <img className="w-[40px] lg-w-[90px]" src=".png" alt="" />
          </div>
          <i className="fa-brands fa-github text-[#ffffff] lg:text-[40px] text-[20px]"></i>
        </div>
        <div className="lg:flex">
          <div className=" lg:h-[600px] w-[100%]  lg:w-[400px] mt-[20px] lg:mt-[100px] grid justify-center  lg:block ">
            <div className="h-[70px] w-[100%]  lg:block  grid justify-center">
              <i className="fa-brands fa-html5 text-[#ff5100] text-[20px]"></i>
              <p className="html-p">Html</p>
              <div className="h-[7px] w-[300px] bg-[#000808] rounded-[10px]">
                <div className="h-[7px] w-[1px] bg-[#ff5100] rounded-[10px] html-slider"></div>
            </div>              
            </div>
            <div className="h-[70px] w-[400px] lg:block  grid justify-center">
              <i className="fa-brands fa-css3 text-[#003cff] text-[20px]"></i>
              <p className="html-p">Css</p>
              <div className="h-[7px] w-[300px] bg-[#000808] rounded-[10px]">
                <div className="h-[7px] w-[1px] bg-[#0066ff] rounded-[10px] css-slider"></div>
              </div>
            </div>
            <div className="h-[70px] w-[400px] lg:block   grid justify-center">
              <i className="fa-brands fa-square-js text-[#fffb00] text-[20px]"></i>
              <p className="html-p">Java Script</p>
              <div className="h-[7px] w-[300px] bg-[#000808] rounded-[10px]">
                <div className="h-[7px] w-[1px] bg-[#eeff00] rounded-[10px] js-slider"></div>
              </div>
            </div>
            <div className="h-[70px] w-[400px] lg:block   grid justify-center">
              <i className="fa-brands fa-react text-[#00eeff] text-[20px]"></i>
              <p className="html-p">React</p>
              <div className="h-[7px] w-[300px] bg-[#000808] rounded-[10px]">
                <div className="h-[7px] w-[1px] bg-[#00ffff] rounded-[10px] react-slider"></div>
              </div>
            </div>
            <div className="h-[70px] w-[400px] lg:block   grid justify-center">
              <div className="text-[20px] text-[#00ccff]">
                <RiTailwindCssFill />
              </div>
              <p className="html-p">Tailwind</p>
              <div className="h-[7px] w-[300px] bg-[#000808] rounded-[10px]">
                <div className="h-[7px] w-[1px] bg-[#0099ff] rounded-[10px] Tailwind-slider"></div>
              </div>
            </div>
            <div className="h-[70px] w-[400px] lg:block   grid justify-center">
              <i className="fa-brands fa-bootstrap text-[#6f00ff] text-[20px]"></i>
              <p className="html-p">Bootstrap</p>
              <div className="h-[7px] w-[300px] bg-[#000808] rounded-[10px]">
                <div className="h-[7px] w-[1px] bg-[#7700ff] rounded-[10px] Bootstrap-slider"></div>
              </div>
            </div>
            <div className="h-[70px] w-[400px] lg:block   grid justify-center">
              <div>
                <img className="w-[30px]" src=".png" alt="" />
              </div>
              <p className="html-p">Figma</p>
              <div className="h-[7px] w-[300px] bg-[#000808] rounded-[10px]">
                <div className="h-[7px] w-[1px] bg-[#1eff00] rounded-[10px] Figma-slider"></div>
              </div>
            </div>
            <div className="h-[70px] w-[400px] lg:block   grid justify-center">
              <i className="fa-brands fa-github text-[#ffffff] text-[20px]"></i>
              <p className="html-p">Git Hub</p>
              <div className="h-[7px] w-[300px] bg-[#000808] rounded-[10px]">
                <div className="h-[7px] w-[1px] bg-[#e4f3bc] rounded-[10px] Git-slider"></div>
              </div>
            </div>
          </div>
          <div className=" mt-[100px] w-full lg:flex ">
            <div className="mt-[100px] hidden h-[300px] w-[5px] lg:grid items-center">
              <div className="w-[250px] flex items-center gap-[10px] before:h-[60px] before:w-[3px] before:bg-[red] after:h-[7px] after:w-[7px] after:bg-[red] after:rounded-[20px] after:mt-[75px] after:absolute after:ml-[-2px]">
                <HiAdjustmentsVertical />
                <p>Website Design</p>
              </div>
              <div className="w-[250px] flex items-center gap-[10px] before:h-[60px] before:w-[3px] before:bg-[red] after:h-[7px] after:w-[7px] after:bg-[red] after:rounded-[20px] after:mt-[75px] after:absolute after:ml-[-2px]">
                <FaLaptopCode />
                <p>Website Development</p>
              </div>
              <div className="w-[250px] flex items-center gap-[10px] before:h-[60px] before:w-[3px] before:bg-[red] after:h-[7px] after:w-[7px] after:bg-[red] after:rounded-[20px] after:mt-[75px] after:absolute after:ml-[-2px]">
                <PiCodeBold />
                <p>App Developement</p>
              </div>
              <div className="w-[250px] flex items-center gap-[10px] before:h-[60px] before:w-[3px] before:bg-[red]">
                <FaCloudDownloadAlt />
                <p> Website Hosting</p>
              </div>
            </div>
            <div>
              <h2 className=" lg:hidden text-[25px] text-center">Eductaion <span className="text-[#6f00ff]">& </span>Study's</h2>
              <div className=" lg:ml-[350px] lg:gap-[20px] mt-[30px] grid justify-center ">
                <div className=" mb-[-15px] rounded-[10px] scale-[0.8] hover:scale-[0.9] transition-all h-[130px] w-[400px] bg-[#58575a3b] backdrop-blur-[10px]">
                  <div className = " flex gap-4 items-center">
                    <div className = "  mt-[10px] ml-[10px] bg-[#ffffff] h-[30px] w-[30px] flex justify-center items-center rounded-full">
                    <RiGraduationCapFill size={20} className = "text-[black]" />
                  </div>
                  <h2 className = " text-[20px]">Higher Secondary Certificate (HSC)</h2>
                  </div>
                  <h3 className = "ml-[55px] text-[16px] text-[#c5d47f]">Manda Mohanogor College ( 2023-2024 )</h3>
                  <div className = "ml-[55px] mt-[10px] text-[14px]">
                    <h2>- Completed HSC from the Science group.</h2>
                    <h2>- Focused on ICT and English Literature.</h2>
                  </div>
                </div>
                <div className="mb-[-15px] rounded-[10px] scale-[0.8] hover:scale-[0.9] transition-all h-[150px] w-[400px] bg-[#5a57573b] backdrop-blur-[10px]">
                  <div className = " flex items-center gap-4">
                    <div className = "  mt-[10px] ml-[10px] bg-[#ffffff] h-[30px] w-[30px] flex justify-center items-center rounded-full">
                    <RiGraduationCapFill size={20} className = "text-[black]" />
                  </div>
                  <h2 className = " text-[20px]">Diploma DEGREE from - creative it</h2>
                  </div>
                  <h3 className = "ml-[55px] text-[16px] text-[#c5d47f]">Creative it institute (2024-2025)</h3>
                  <div className = "ml-[55px] mt-[10px] text-[14px]">
                    <h2>Diploma graduate from Creative IT Institute, achieving excellence and distinction in web development with top honors</h2>
                  </div>
                </div>
                <div className=" rounded-[10px] scale-[0.8] hover:scale-[0.9] transition-all h-[150px] w-[400px] bg-[#5a57573b] backdrop-blur-[10px]">
                  <div className = " flex items-center gap-4">
                    <div className = "  mt-[10px] ml-[10px] bg-[#ffffff] h-[30px] w-[30px] flex justify-center items-center rounded-full">
                    <RiGraduationCapFill size={20} className = "text-[black]" />
                  </div>
                  <h2 className = " text-[20px]">Front-End DEVELOPER</h2>
                  </div>
                  <h3 className = "ml-[55px] text-[16px] text-[#c5d47f]">Work at fiver as freelancer (2024-2026)</h3>
                  <div className = "ml-[55px] mt-[10px] text-[14px]">
                    <h2>Fiverr front-end dev: Customized web solutions for diverse clients worldwide, honing versatility and client rapport</h2>
                    </div>
                </div>
              </div>
              <div className=" justify-around flex lg:gap-[50px] lg:ml-[380px] mt-[10px] lg:justify-center items-center">
                <div className="h-[100px] w-[100px]">
                  <p className=" gap-[10px] font-[600] text-[30px] flex">
                    10 <span className="text-[#ff3300] font-[700]">+</span>{" "}
                  </p>{" "}
                  <p className="text-[15px] font-[600]">Compleated Project</p>
                </div>
                <div className="h-[100px] w-[100px]">
                  <p className=" gap-[10px] font-[600] text-[30px] flex">
                    97 <span className="text-[#ff3300] font-[700]">%</span>
                  </p>
                  <p className="text-[15px] font-[600]">
                    Of Client Satisfaction
                  </p>
                </div>
                <div className="h-[100px] w-[100px]">
                  <p className=" gap-[10px] font-[600] text-[30px] flex">
                    1.5 <span className="text-[#ff3300] font-[700]">+</span>
                  </p>
                  <p className="text-[15px] font-[600]">Year Of experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
