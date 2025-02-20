import React, { useState, useEffect } from "react";
import { useAuth } from "../Store/auth";
import servicess from "../assets/Api/Services";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const { services } = useAuth();
  const [imgCount, setImgCount] = useState(0);
  const dimensions = { width: 200, height: 200 };

  useEffect(() => {
    const sections = document.querySelectorAll(".category-section");

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
            toggleActions: "play none none none",
          },
        }
      );
    });
    gsap.fromTo(
      ".contain2",
      {
        y: 0,
      },
      {
        y: -60,
        scrollTrigger: {
          trigger: ".contain2",
          start: "3000% 28%", // Start when the image is 60% from the top of the viewport
          end: "3010% 28%", // End when the top of the image reaches 20% from the top
          scrub: true,
          // pin :true,
          markers: false,
        },
      }
    );
  }, []);

  // Group services by category
  const groupedServices = servicess.reduce((acc, cur) => {
    const { category } = cur;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(cur);
    return acc;
  }, {});

  return (
    <>
      <h1 className="mt-4 p-2 text-lg flex justify-center lg:font-extraboldd text-white sticky top-16 bg-[#07020d] z-10 sm:top-16 md:top-20 lg:top-26  md:text-2xl lg:text-3xl font-black contain2">
        Services We Offer
      </h1>

      <section className="section-services">
        <div className="container">
          {/* <h1 className="main-heading">Services</h1> */}
        </div>

        {Object.keys(groupedServices).map((category, index) => (
<<<<<<< HEAD
          <div key={index} className="category-section my-6 ">
            {/* <h2 className="text-2xl font-semibold mb-4 capitalize text-center lg:text-left ">{category}</h2> */}
            <h2 className="text-lg text-center md:text-xl lg:px-4 text-2xl font-semibold mb-4 capitalize mx-auto p-4 w-max">
  {category}
</h2>

            <div className="grid flex sm:grid-cols-6 grid-flow-col overflow-auto lg:grid-cols-6 gap-6">
=======
          <div key={index} className="category-section my-6">
            <h2 className="text-lg md:text-xl lg:px-4 text-white lg:text-2xl font-semibold mb-4 capitalize text-center lg:text-left ">
              {category}
            </h2>
            <div className="services-card grid py-6 px-4 flex-wrap w-full grid-rows-1 grid-flow-col overflow-auto lg:grid-cols-6 gap-4 lg:gap-14">
>>>>>>> de7ad0ce485fb94261fb3223c9c620f49d1158b5
              {groupedServices[category].map((curElem, idx) => {
                const { name, description } = curElem;                
                return (
                  <div
                    className={`p-4 rounded-md shadow-md hover:scale-110 hover:shadow-lg duration-500 transition-all ease-in-out mb-4 ${
                      category === "STARFACE EDUCATIONAL TALENT"
                        ? "bg-[#5db7de]"
                        : category === "STARFACE INDIA TALENT"
                        ? "bg-[#f1e9db]"
                        : "bg-green-100"
                    }`}
                    key={idx}
                    style={{
                      width: `${dimensions.width}px`,
                      height: `${dimensions.height}px`,
                    }}
                  >
                    <div className="card-details">
                      <h3 className="text-base md:text-xl font-bold mb-2 text-center md:text-left lg:text-left sm:text-left">
                        {name}
                      </h3>
                      <p className="text-gray-700 text-center md:text-left lg:text-left">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Learn More Button */}
            <div className="relative">
              {" "}
              {/* Make this div relative to position the absolute child */}
              <div
                className="border-[1.5px] absolute border-black top-[-22vh] lg:top-[-22vh] md:top-[-14vh]  right-[0vw] md:h-[5vw] md:w-[5vw] lg:h-[5vw] lg:w-[5vw] h-[10vw] w-[10vw] rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 md:border-white lg:border-white" // Centering using transform
              >
                <Link
                  to={`/services/${category}`}
                  className="text-white flex items-center justify-center h-full w-full rounded-full hover:bg-gray-600 transition duration-300"
                >
                  <FaArrowRightLong size={20} className="lg:text-white md:text-white text-black"/>
                </Link>
                <span className="z-50 absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View More
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Services;
