import React from "react";

const Project = () => {
  return (
    <div id="project">
      <div className="container">
        <h2 className="ph2">My Recent Projects</h2>
        <div className="project-wraper">
          <div className="project1">
            <video src="p1-video.mp4" loop muted playsInline></video>
          </div>
          <div className="project2">
            <img src="Project3.PNG" alt="" />
          </div>
          <div className="project3">
            <img src="project6.png" alt="" />
          </div>
          <div className="project4">
            <img src="project7.png" alt="" />
          </div>
          <div className="project5">
            <img src="Project2.PNG" alt="" />
          </div>
          <div className="project6">
            <img src="project4.PNG" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
