import React, { useState } from "react";
import SmileIcon from "../assets/smile-icon.svg";
import githubIcon from "../assets/github-icon.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";
import home from "../assets/home.svg";

export default function Landing() {
  // Custom Theme
  const commonButtonStyle =
    "inline-block bg-transparent rounded-lg p-auto text-white font-bold text-sm hover:opacity-90 dark:focus:ring-blue m-2";

  const btnImg = "inline-block m-auto flex justify-end";

  // Hover Effect
  const [textShadow, setTextShadow] = useState("none");

  const handleMouseMove = (e) => {
    const rXP =
      e.pageX - e.currentTarget.offsetLeft - e.currentTarget.offsetWidth / 2;
    const rYP =
      e.pageY - e.currentTarget.offsetTop - e.currentTarget.offsetHeight / 2;

    setTextShadow(
      `${rYP / 10}px ${rXP / 80}px #CAC6E0, ${rYP / 10}px ${
        rXP / 60
      }px #ffb703, ${rXP / 70}px ${rYP / 12}px #219ebc`
    );
  };

  return (
    <div className="flex flex-col items-center justify-evenly h-screen gap-3">
      <div className="text-center m-1">
        <h1
          className="text-9xl font-bold text-white"
          id="nameHeader"
          onMouseMove={handleMouseMove}
          style={{ textShadow: textShadow }}
        >
          Nhi Hoang
        </h1>
        <h2 className="text-3xl font-medium text-darkblue">
          Fullstack MERN Developer
        </h2>
      </div>

      {/* Dino */}
      <div>
        <div className="heart"></div>
      </div>

      {/* Directory */}
      <div className="text-center">
        <h3 className="text-xl font-medium mb-1 text-darkblue">Directory</h3>
        <a href="/home" className={`${commonButtonStyle}`}>
          <img src={home} alt="home link" width="20" className={`${btnImg}`} />
          Home
        </a>
        <a href="https://www.linkedin.com/" className={`${commonButtonStyle}`}>
          <img
            src={linkedinIcon}
            alt="LinkedIn link"
            width="15"
            className={`${btnImg}`}
          />
          LinkedIn
        </a>
        <a
          href="https://github.com/eviehoang/"
          className={`${commonButtonStyle}`}
        >
          <img
            src={githubIcon}
            alt="GitHub link"
            width="17"
            className={`${btnImg}`}
          />
          GitHub
        </a>
      </div>
    </div>
  );
}
