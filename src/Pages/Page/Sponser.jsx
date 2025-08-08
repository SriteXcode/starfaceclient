import React, { useState, useEffect, useRef } from "react";
import Sponsor from "../../assets/Api/sponsorapi"; // your sponsors array

const OurSponsors = () => {
  const [scrollDir, setScrollDir] = useState("scrollLeft");
  const containerRef = useRef(null);
  const urlEndpoint = "https://ik.imagekit.io/nx2mu5rdoc";

  const handleWheel = (e) => {
    setScrollDir(e.deltaY > 0 ? "scrollLeft" : "scrollRight");
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("wheel", handleWheel);
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="w-full bg-[#07020D] py-10">
      <h1 className="text-4xl font-bold text-center text-[#F1E9DB] mb-8">
        Our Sponsors
      </h1>

      <div
        ref={containerRef}
        className="flex w-full justify-center overflow-hidden"
      >
        <div className={`flex flex-row gap-10 py-4 animate-${scrollDir}`}>
          {Sponsor.concat(Sponsor).map((currElem, index) => {
            const { name, id, image, alt, link, discription } = currElem;
            return (
              <a
                key={`${id}-${index}`}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={discription}
                className="transition-transform hover:scale-105 duration-300"
              >
                <img
                  src={`${urlEndpoint}/StarFace/${name}`}
                  alt={`${alt}${name}`}
                  className="h-20 sm:h-24 md:h-28 lg:h-32 object-contain"
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurSponsors;
