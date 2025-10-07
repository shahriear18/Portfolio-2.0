import React from 'react'

const Baner = () => {
  return (
            <div id="baner">
          <div className="container">
            <div className="baner-wrap">
              <div className="baner-left">
                <h3 className="bl-1">It's Me Your's</h3>
                <h1 className="bl-2">Shahriear Al Amin</h1>
                <h3 className="bl-3">
                  A Mern Stack <span>Developer</span>
                </h3>
                <p className="bl-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
                  voluptatem quidem labore! Reiciendis animi dolorum debitis
                  tempora aperiam asperiores voluptatibus.
                </p>
                <ul>
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
                <div className="bl-button">
                  <button>Download Cv</button>
                  <button> Hire Me</button>
                </div>
              </div>
              <div className="baner-right">
                <div className="main-img">
                  <i class="fa-brands fa-html5 text-[#f55f02]"></i>
                  <i class="fa-brands fa-css3"></i>
                  <i class="fa-brands fa-square-js"></i>
                  <i class="fa-brands fa-react"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Baner