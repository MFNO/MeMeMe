import "./App.css";
import LI from "./LI.png";
import GH from "./GH.png";

function App() {
  return (
    <>
      <div className="grid row">
        <div className="grid column">
          <h1>Socials</h1>
          <div className="grid row">
            <a href="https://www.linkedin.com/in/manufourneau/">
              <img height={85} width={85} src={LI}></img>
            </a>
            <a href="https://github.com/MFNO/">
              <img height={85} width={85} src={GH}></img>
            </a>
          </div>
        </div>
      </div>
      <div className="grid row">
        <div className="grid column">
          <h1>Projects</h1>
          <a href="https://dhipbrbcoutdm.cloudfront.net">Chore Mate</a>
          <a href="https://cruxroute.com/">Crux test Route</a>
        </div>
      </div>
    </>
  );
}

export default App;
