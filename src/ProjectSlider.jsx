import Slider from "react-slick";
import "./index.css";

function ProjectSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container">
      <div id="project">
        <div className="container">
          <h2 className="ph2">My Recent Projects</h2>
          <Slider {...settings}>
          <div className="h-[300px] w-[600px]  flex items-center justify-center">
            <div className="project1">
              <video src="p1-video.mp4" autoPlay loop muted playsInline></video>
            </div>
          </div>
          <div className="h-[300px] w-[600px]  flex items-center justify-center">
            <div className="project2 ">
              <img src="Project3.PNG" alt="" />
            </div>
          </div>

          <div className="h-[300px] w-[600px]  flex items-center justify-center">
            <div className="project3">
              <img src="project6.png" alt="" />
            </div>
          </div>

          <div className="h-[300px] w-[600px]  flex items-center justify-center">
            <div className="project4">
              <img src="project7.png" alt="" />
            </div>
          </div>

          <div className="h-[300px] w-[600px]  flex items-center justify-center">
            <div className="project5">
              <img src="Project2.PNG" alt="" />
            </div>
          </div>

          <div className="h-[300px] w-[600px]  flex items-center justify-center">
            <div className="project6">
              <img src="project4.PNG" alt="" />
            </div>
          </div>            
          </Slider>

        </div>
      </div>
    </div>
  );
}

export default ProjectSlider;
