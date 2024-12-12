import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import docker from "../../public/docker.png";
import javascript from "../../public/javascript.png";
import node from "../../public/node.png";
import express from "../../public/express.png";
import mongodb from "../../public/mongodb.jpg";
import reactjs from "../../public/reactjs.png";
function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
      link: "https://www.w3schools.com/html/"
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
      link: "https://www.w3schools.com/css/",
    },
    {
      id: 3,
      logo: node,
      name: "Node",
      link: "https://nodejs.org/en",
    },
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
      link: "https://www.javascript.com/",
    },
    {
      id: 5,
      logo: express,
      name: "Express Js",
      link: "https://expressjs.com/",

    },
    {
      id: 6,
      logo: mongodb,
      name: "MongoDB",
      link: "https://www.mongodb.com/",

    },
    {
      id: 7,
      logo: docker,
      name: "Docker",
      link: "https://www.docker.com/",
    },
    {
      id: 8,
      logo: reactjs,
      name: "React",
      link: "https://react.dev/",
    }

  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p className="  ">
          I've more than 3 years of experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name, link }) => (
            <a href={link} target="_blank">
              <div
                className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
                key={id}
              >
                <img src={logo} className="w-[150px] rounded-full" alt="" />
                <div>
                  <div className="">{name}</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
