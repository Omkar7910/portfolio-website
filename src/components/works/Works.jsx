import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [projectUrls, setProjectUrls] = useState({
    1: "https://flix2go.netlify.app",
    2: "https://newsglobeog.netlify.app",
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/globe.png",
      title: "Flix2Go",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://github.com/user-attachments/assets/79717fb1-214d-4c10-97bc-4fdbaa4ce52d?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "DailyGlobe",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
    // {
    //   id: "3",
    //   icon: "./assets/writing.png",
    //   title: "Branding",
    //   desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    //   img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    // },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
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
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span
                    onClick={() => window.open(projectUrls[d.id], "_blank")}
                    style={{ cursor: "pointer" }}
                  >
                    Visit here -
                  </span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
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
