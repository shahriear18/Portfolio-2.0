import React, { useState } from "react";
import { CiStar } from "react-icons/ci";

// Product Sets
const featured = [
  { img: "/p1.png", name: "E commerce 1", review: 10, prise: 900, discount: 1200 },
  { img: "/p2.png", name: "E commerce 2", review: 8, prise: 850, discount: 1000 },
  { img: "/p3.png", name: "E commerce 3", review: 6, prise: 700, discount: 900 },
  { img: "/p4.png", name: "E commerce 4", review: 15, prise: 950, discount: 1300 },
];

const newArrivals = [
  { img: "/p5.png", name: "New 2", review: 5, prise: 500, discount: 700 },
  { img: "/p6.png", name: "New B", review: 7, prise: 650, discount: 800 },
  { img: "/p7.png", name: "New C", review: 4, prise: 450, discount: 600 },
  { img: "/p8.png", name: "New D", review: 9, prise: 850, discount: 1000 },
];

const topRated = [
  { img: "/p1.png", name: "Top 3", review: 20, prise: 1200, discount: 1500 },
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
  { id: "featured", label: "E Commerce" },
  { id: "new", label: "New Arrivals" },
  { id: "top", label: "Top Rated" },
  { id: "best", label: "Best Seller" },
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
      case "top":
        return topRated;
      case "best":
        return bestSeller;
      default:
        return featured;
    }
  };

  return (
    <div className="container text-[35px] text-center edusa">
      <i>
        My <span className="text-[#81ff92]">Recent</span> Projects
      </i>

      <div className="mt-[50px]">
        {/* Tabs */}
        <ul className="flex justify-center gap-10 text-[20px] font-[500]">
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
        <div className="grid grid-cols-4 gap-8 mt-[40px]">
          {getSectionProducts().map((item, i) => (
            <div key={i} className="  overflow-hidden w-[250px] mx-auto bg-[#4fff5d]  rounded-[10px] px-[15px] relative project-cart">
              <i className=" text-[black] text-[20px] underline">{item.name}</i>
              <div className=" rounded-t-[10px] h-[220px] bg-[#302a2a]"></div>
              <p className="text-[12px] py-[10px] text-[black] font-[700]"><i>Orebi is
                 a fully functional e-commerce site with a user-friendly interface and product
                  management, built with modern technologies.</i></p>
                  <div className="flex justify-center items-center live-link h-[370px] w-[250px] mx-auto bg-[#ffffff1c] absolute backdrop-blur-[1px] ml-[-15px]  rounded-[10px]">
                    <button className=" px-[20px] py-[7px] font-[600] rounded-[5px] bg-[white] text-[black] text-[15px]"><i>live site</i></button>
                  </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;
