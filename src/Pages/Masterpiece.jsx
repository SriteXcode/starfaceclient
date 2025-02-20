import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Previous from "../assets/Api/Previous";
import "./Styles/swiper.css";

import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import { IKImage } from "imagekitio-react";
gsap.registerPlugin(ScrollTrigger);

const Masterpiece = () => {
  const urlEndpoint = "https://ik.imagekit.io/nx2mu5rdoc";
  const swiperSlide = useSwiperSlide();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    gsap.fromTo(
      ".contain",
      {
        y: 0,
      },
      {
        y: -60,
        scrollTrigger: {
          trigger: ".contain",
          start: "990% 28%", // Start when the image is 60% from the top of the viewport
          end: "1020% 16%", // End when the top of the image reaches 20% from the top
          scrub: true,
          // pin :true,
          markers: false,
        },
      }
    );
  });

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.realIndex);
  };

  return (
    <>
      <h1 className="contain text-center text-sm font-extrabold py-2 my-4 bg-[#07020d] p-2 sticky top-16 z-10 md:top-20 lg:top-26 md:text-2xl lg:text-3xl text-white ">
        STARFACE INDIA TALENT PREVIOUS ACHIEVEMENT
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        onSlideChange={(swiper) => handleSlideChange(swiper)}
      >
        {Previous.map((currElem, index) => {
          const { name, image } = currElem;
          return (
            <SwiperSlide
              key={index}
              className="swiper_slide"
              style={{
                opacity:
                  activeSlide === index
                    ? 1
                    : activeSlide - 1 === index || activeSlide === index + 1
                    ? 0.5
                    : 0.2,
              }}
            >
              <img
                src={`${urlEndpoint}/StarFace/${image}`}
                alt="slide_image"
                className="h-full swiper_img"
              />
            </SwiperSlide>
          );
        })}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow"></div>
          <div className="swiper-button-next slider-arrow"></div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </>
  );
};

export default Masterpiece;
