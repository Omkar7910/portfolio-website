import "./intro.scss";
import Typewriter from "typewriter-effect";

export default function Intro() {
  const downloadCV = () => {
    // Replace the URL with the actual path to your CV file
    window.location.href = "assets/resume.pdf";
  };

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
          <div className="buttons">
            <button onClick={downloadCV}>Download CV</button>
            <button onClick={() => (window.location.href = "#contact")}>
              Contact Info
            </button>
          </div>
          <div className="socials">
            <a href="https://www.linkedin.com/in/omkar-patil-75793022a" target="_blank" rel="noopener noreferrer">
              <img src="assets/linkedin.png" alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/Omkar7910"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="assets/github.png" alt="GitHub" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
