import React, { useState, useEffect, useRef } from "react";
import Collab from "../../assets/Api/collabapi";

const OurCollaboration = () => {
  const [scrollDir, setScrollDir] = useState("left");
  const containerRef = useRef(null);
  const urlEndpoint = "https://ik.imagekit.io/nx2mu5rdoc";

  const handleWheel = (e) => {
    if (e.deltaY > 0) setScrollDir("left");
    else setScrollDir("right");
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("wheel", handleWheel);
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="w-full bg-[#07020D] py-10">
      <h1 className="text-4xl font-bold text-center text-[#F1E9DB] mb-8">
        Our Collaborations
      </h1>

      <div
        ref={containerRef}
        className="flex w-full justify-center overflow-hidden"
      >
        <div
          className={`flex flex-row gap-10 py-4 animate-scroll-${scrollDir}`}
        >
          {Collab.map((currElem, index) => {
            const { name, id, image, alt, link, discription } = currElem;
            return (
              <a
              key={id || index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              title={discription}
              className="transition-transform hover:scale-105 duration-300"
              >
              <fieldset className="border rounded p-2 border-gray-300">
                <legend className="text-xs text-gray-400 px-2">{name}</legend>
                <img
                src={`${urlEndpoint}/StarFace/${name}`}
                alt={`${alt}${name}`}
                className="h-20 sm:h-24 md:h-28 lg:h-32 object-contain"
                />
              </fieldset>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurCollaboration;
