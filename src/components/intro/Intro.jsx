import "./intro.scss";
import Typewriter from "typewriter-effect";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man2.png" alt="Person" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Omkar Patil</h1>
          <h3>
            <span>
              <Typewriter
                options={{
                  strings: [
                    "Frontend Developer",
                    "Tech Enthusiast",
                    "Fitness Enthusiast",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  pauseFor: 1500,
                }}
              />
            </span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="toggle-down" />
        </a>
      </div>
    </div>
  );
}
