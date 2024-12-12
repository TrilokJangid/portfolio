import React from "react";
import bike from "../../public/bike.png";
import ai from "../../public/aiImage.png";
import ecommerce from "../../public/ecommerce.jpg";
import shop from "../../public/shop.jpg";
import another from "../../public/another.jpg";
function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: bike,
      name: "Electric bike Web",
      link: "https://github.com/TrilokJangid/Electric-bike-web",
    },
    {
      id: 2,
      logo: ai,
      name: "Ai Image Generator",
      link: "https://github.com/TrilokJangid/AI_IMAGE_GENERATOR_MERN-master",
    },
    {
      id: 3,
      logo: ecommerce,
      name: "Ecoomerce WebApp",
      link: "https://github.com/TrilokJangid/ecommerce-app-2023-main",
    },
    {
      id: 4,
      logo: shop,
      name: "Shopfy Ecommerce",
      link: "https://github.com/TrilokJangid/shopfy",
    },
    {
      id: 4,
      logo: another,
      name: "Upcoming Projects",
      link: "",
    },

  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, link }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="ml-16 w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="ml-8 px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="ml-12 px-6 py-4 space-x-3 justify-around">

                <a href={link}>
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                    Source code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
