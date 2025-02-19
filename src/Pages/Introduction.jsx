import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IKImage } from 'imagekitio-react';

gsap.registerPlugin(ScrollTrigger);

const Introduction = () => {
  const urlEndpoint = "https://ik.imagekit.io/nx2mu5rdoc";

  useEffect(() => {
    // Animate text elements
    gsap.utils.toArray('.circle-item').forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, x:20, y: 50 }, // Text animates from left and below
        {
          opacity: 1,
          x: 0,
          y: 0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 100%',
            end: 'bottom 90%',
            scrub: true,
            toggleActions: 'play none none reverse',
            markers: false, // Debugging; enable if needed
          },
        }
      );
    });

    // Animate image elements
    gsap.utils.toArray('.circle-image').forEach((image) => {
      gsap.fromTo(
        image,
        { opacity: 0, x: -100, scale: 0.8 }, // Images animate from right
        {
          opacity: 1,
          x: 0,
          scale: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: image,
            start: 'top 100%',
            end: 'bottom 90%',
            scrub: true,
            toggleActions: 'play none none reverse',
            markers: false, // Debugging; enable if needed
          },
        }
      );
    });
  }, []);

  return (
    <div className="circle-container px-4 sm:px-6 lg:px-8">
      {/* Introduction Section */}
      <div className="grid grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="circle-image z-10 col-span-1 sticky top-24 h-[300px] md:h-[400px] lg:h-[500px]">
          <IKImage
            urlEndpoint={urlEndpoint}
            path={`/StarFace/Saurabh.jpg`}
            transformation={[{
              height: 450,  
              width: 400,
            }]}
            lqip={{ active: true, quality: 20 }}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 radius-16 group-hover:scale-105"
          />
        </div>
        <div className="circle-item col-span-1 md:col-span-2 text-center md:text-left">
          <h1 className="text-xl mb-4 sm:text-2xl sticky top-16 p-2 bg-[#EEEEEE] sm:top-16 md:top-20 pt-4 lg:top-26 text-sm md:text-2xl lg:text-3xl font-black bg-[#EEEEEE]">
            Welcome to Starface India Talent
          </h1>
          <hr className="w-16 sm:w-24 mx-auto md:mx-0 mb-6" />
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            "Starface India Talent, the pinnacle of creative expression and artistic innovation. As a premier modelling and entertainment agency, we pride ourselves on fostering a nurturing environment where exceptional talent is cultivated, refined, and propelled to stardom.
            Our mission is to bridge the gap between emerging artists and leading industry players, delivering personalized support, expert guidance, and unparalleled opportunities. We strive to empower our talent with the skills, confidence, and networks necessary to succeed in the dynamic world of entertainment.
            At Starface India Talent, we celebrate artistic excellence, diversity, and individuality. Our holistic platform encompasses modelling, acting, and all facets of the entertainment industry, providing a launchpad for aspiring models, actors, and industry professionals to realize their dreams.
            Join us as we redefine success, push creative boundaries, and shape the future of entertainment. Whether you're seeking representation, guidance, or a platform to showcase your talent, Starface India Talent is your gateway to unlocking your full potential.
            Explore our services, submit your portfolio, or schedule a consultation today and discover how Starface India Talent can help you shine."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
