import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [projectUrls] = useState({
    1: "https://flix2go.netlify.app",
    2: "https://thedailyglobe.netlify.app",
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/globe.png",
      title: "Flix2Go",
      desc: "A responsive React web app with dynamic movie displays, real-time API, and seamless navigation.",
      img: "https://github.com/user-attachments/assets/79717fb1-214d-4c10-97bc-4fdbaa4ce52d?auto=format&format=webp&q=50&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "DailyGlobe",
      desc: "Developed a React app fetching stories from Hacker News API, with real-time search, and managed state using Context API and useReducer.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2
                    onClick={() => window.open(projectUrls[d.id], "_blank")}
                    style={{ cursor: "pointer" }}
                  >
                    {d.title}
                  </h2>
                  <p>{d.desc}</p>
                  <span
                    onClick={() => window.open(projectUrls[d.id], "_blank")}
                    style={{ cursor: "pointer" }}
                  >
                    Live Link -
                  </span>
                </div>
              </div>
              <div className="right">
                <img
                  onClick={() => window.open(projectUrls[d.id], "_blank")}
                  style={{ cursor: "pointer" }}
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
