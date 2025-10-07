import React from "react";
import { useState } from "react";
import "./index.css";



const Header = () => {
    const [responce, setnav] = useState([]);

  function apearnav() {
    setnav("block");
  }
  function closenav() {
    setnav("none");
  }

  return (
    <header>
      <div className="container">
        <i className="fa-solid fa-bars" onClick={apearnav}></i>
        <nav>
          <a className="logo" href="">Shahriear!</a>
          <ul style={{ display: responce }}>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Project</a></li>
            <li><a href="">Skills</a></li>
            <li><a href=""></a>Contact</li>
            <i className="fa-solid fa-xmark" onClick={closenav}></i>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
