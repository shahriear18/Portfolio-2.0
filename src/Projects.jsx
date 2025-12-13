import React, { useState } from "react";
import { CiStar } from "react-icons/ci";

// Product Sets
const featured = [
  {
    img: "E -Comerce.png",
    name: "Local Store",
    description:
      "Local Store  is a fully functional e-commerce site with a user-friendly interface and product management, built with modern technologies.",
  },
  {
    img: "Chatting-app .png",
    name: "Chatting App",
    description:
      "A fully functional social media chatting application with an intuitive, user-friendly interface, built modern and scalable web technologies.",
  },
  {
    img: "Flipcart.png",
    name: "Flipcart",
    description:
      "Flipcart is a fully functional e-commerce website built using HTML, CSS & minimal JavaScript, featuring a clean, user-friendly interface.",
  },
  {
    img: "Programing-studio.png",
    name: "Programing Studio",
    description: "A Programming Hero clone website built using HTML, CSS & JavaScript, featuring rich animations and a smooth, interactive user experience.",
  },
];

const newArrivals = [
  { img: "Mistrum.png", name: "Mistrum", description : "Mistrum: a fully functional React website, sleek and responsive, delivering a flawless experience on any device" },
  { img: "Religion.png", name: " Religion", description : "Religion: a fully functional website built with pure HTML & CSS, fully responsive across all devices."},
  { img: "Soul.png", name: "Soul Project", description : "Soul: a fully functional website built with pure HTML & CSS, fully responsive on all devices asexiestence." },
  { img: "Old-Portfolio.png", name: "Old Portfolio", description : "It's my old backup portfolio, built with pure HTML, CSS, and JS, packed with animations, to make it visually striking and interactive" },
];

const topRated = [
  { img: "/p1.png", name: "Top 3", description : "" },
  { img: "/p2.png", name: "Top B", review: 18, prise: 1100, discount: 1400 },
  { img: "/p3.png", name: "Top C", review: 22, prise: 1300, discount: 1600 },
  { img: "/p4.png", name: "Top D", review: 19, prise: 1000, discount: 1300 },
];

const bestSeller = [
  { img: "/p5.png", name: "Best 4", review: 30, prise: 1500, discount: 1800 },
  { img: "/p6.png", name: "Best B", review: 25, prise: 1400, discount: 1700 },
  { img: "/p7.png", name: "Best C", review: 28, prise: 1350, discount: 1600 },
  { img: "/p8.png", name: "Best D", review: 26, prise: 1450, discount: 1800 },
];

// Tabs
const tabs = [
  { id: "featured", label: "Favourite" },
  { id: "new", label: "Landing Pages" },
  { id: "best", label: "Functionality" },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("featured");

  // Section switch logic
  const getSectionProducts = () => {
    switch (activeTab) {
      case "featured":
        return featured;
      case "new":
        return newArrivals;
      case "best":
        return bestSeller;
      default:
        return featured;
    }
  };

  return (
    <div className="container text-[35px] text-center edusa  mt-[200px]">
      <i>
        My <span className="text-[#81ff92]">Recent</span> Projects
      </i>

      <div className="mt-[50px]">
        {/* Tabs */}
        <ul className="flex justify-center gap-5 lg:gap-10 text-[13px] lg:text-[20px] font-[500]">
          {tabs.map((tab) => (
            <i
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`cursor-pointer relative transition-all  px-[15px] rounded-t-[10px] py-2 pb-2
                ${
                  activeTab === tab.id
                    ? "text-[#000000] after:w-full bg-[#63f16a]"
                    : "after:w-0"
                }`}
            >
              {tab.label}
            </i>
          ))}
        </ul>

        {/* SECTION BOXES (4 items) */}
        <div className="lg:grid grid-cols-4 gap-8 mt-[40px]">
          {getSectionProducts().map((item, i) => (
            <div
              key={i}
              className="  overflow-hidden w-[250px] mx-auto bg-[#4fff5d]  rounded-[10px] px-[15px] relative project-cart"
            >
              <i className=" text-[black] text-[20px] underline">{item.name}</i>
              <div className=" rounded-t-[10px] h-[220px] bg-[#302a2a] overflow-hidden">
                <img src={item.img} alt="" />
              </div>
              <p className="text-[12px] py-[10px] text-[black] font-[700]">
                <i>{item.description}</i>
              </p>
              <div className="flex justify-center items-center live-link h-[370px] w-[250px] mx-auto bg-[#ffffff1c] absolute backdrop-blur-[1px] ml-[-15px]  rounded-[10px]">
                <button className="shadow-[0_4px_10px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.7)] scale-[0.9] hover:scale-[1] transition-all cursor-pointer px-[20px] py-[7px] font-[600] rounded-[5px] bg-[white] text-[black] text-[15px]">
                  <i>live site</i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
