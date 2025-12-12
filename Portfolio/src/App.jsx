import "./index.css";
import Header from "./Header";
import Baner from "./Baner";
import About from "./About";
import Project from "./Project";
import Skills from "./Skills";
import Aboutme from "./Aboutme";
import Projects from "./Projects";

function App() {
  return (
    <>
      <div className="main">
        <Header />
        <Baner />
        <Aboutme/>
        <Projects/>
        <Skills/>
      </div>
    </>
  );
}

export default App;
