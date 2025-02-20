import React, { useEffect } from 'react';
import Teamapi from "../assets/Api/Teamapi";
import { useNavigate } from 'react-router-dom';
import { IKImage } from 'imagekitio-react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import gsap from 'gsap';

const Team = () => {
  // const navigate = useNavigate();
  const urlEndpoint = "https://ik.imagekit.io/nx2mu5rdoc";
  const [isVisible, setIsVisible] = React.useState(true);

  useEffect(() => {
    // Infinite loop GSAP animation for the grid items
    const gridItems = gsap.utils.toArray('.grid-item');

    // Animate the grid items
    gsap.fromTo(
      gridItems,
      { opacity: 0, y: 50 }, // Initial state (invisible and from below)
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1, // Staggered start for each grid item
        ease: "power2.out",
        repeat: -1, // Infinite loop
        yoyo: true, // To animate back and forth
        repeatDelay: 1, // Delay before starting the next loop
      }
    );

    // Cleanup function to kill the animation on component unmount
    return () => {
      gsap.killTweensOf(gridItems);
    };
  }, []);

  useEffect(() => {
    // Intersection Observer to detect visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Update visibility state
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    const teamElement = document.querySelector('.team-container'); // Select the container
    if (teamElement) {
      observer.observe(teamElement); // Start observing
    }

    return () => {
      if (teamElement) {
        observer.unobserve(teamElement); // Cleanup observer
      }
    };
  }, []);

  return (
    <div className={`team-container transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h1 className="text-center text-lg lg:font-extrabold text-white py-4 my-4 sticky top-16  z-10 sm:sticky p-2 md:top-20 lg:top-26 md:text-2xl lg:text-3xl font-black bg-[#07020d]">
        Our Team
      </h1>

      <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
        {Teamapi.map((curElem) => {
          const { id, image, alt, insta, name, facebook, linkedin } = curElem;

          // Logic to determine dimensions
          const dimensions = { width: 300, height: 300 };

          return (
            <div
              key={id}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white relative  group-hover:scale-105"
              style={{
                width: `${dimensions.width}px`,
                height: `${dimensions.height}px`,
              }}
            >
              <IKImage
                urlEndpoint={urlEndpoint}
                path={`/StarFace/${image}`}
                transformation={[dimensions]}
                lqip={{ active: true, quality: 20 }}
                loading="lazy"
                className="w-full h-full object-cover"
                alt={alt}
              />
              <h1 className='absolute bottom-0 left-0 right-0 bg-opacity-50 bg-red-600 text-white text-center p-2'>
                {name}
              </h1>
              <div className="flex justify-center space-x-4 mt-2 p-2 absolute social_media opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link to={`/`} className="bg-pink-500 text-white py-1 px-2 rounded hover:bg-pink-600 transition duration-300 flex items-center">
                  <i className="fab fa-instagram mr-2"></i>
                  {insta}
                </Link>
                <Link to={`/`} className="bg-blue-600 text-white py-1 px-2 rounded hover:bg-blue-700 transition duration-300 flex items-center">
                  <i className="fab fa-facebook mr-2"></i>
                  {facebook}
                </Link>
                <Link to={`/`} className="bg-blue-700 text-white py-1 px-2 rounded hover:bg-blue-800 transition duration-300 flex items-center">
                  <i className="fab fa-linkedin mr-2"></i>
                  {linkedin}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;