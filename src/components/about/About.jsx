import React from "react";
import "./about.scss";

export default function About() {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img src="./assets/myimagenew.jpeg" alt="" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src="./assets/education.png" alt="" className="icon" />
              <h3>Education</h3>
              <p>
                B.C.A Bachelors Degree
                <br />
                M.C.A Masters Degree
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Hello there, I am Omkar Patil an enthusiastic frontend developer,
              I have a deep passion for crafting visually appealing,
              user-friendly web interfaces. My focus has been on mastering the
              essentials of frontend development, especially using ReactJS,
              where I continuously explore new ways to enhance the user
              experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
