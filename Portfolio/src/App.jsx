import "./index.css";
import Header from "./Header";
import Baner from "./Baner";
import About from "./About";
import Project from "./Project";
import Skills from "./Skills";

function App() {
  return (
    <>
      <div className="main">
        <Header />
        <Baner />
        <About />
        <Project />
        <Skills/>
      </div>
    </>
  );
}

export default App;
