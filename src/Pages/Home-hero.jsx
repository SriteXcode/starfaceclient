import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "./Styles/styles.css";

const Apps = () => {
  const images = {
    large: [
      "https://swiperjs.com/demos/images/nature-1.jpg",
      "https://swiperjs.com/demos/images/nature-2.jpg",
      "https://swiperjs.com/demos/images/nature-3.jpg",
      "https://swiperjs.com/demos/images/nature-4.jpg",
    ],
    medium: [
      "https://swiperjs.com/demos/images/nature-1.jpg",
      "https://th.bing.com/th?id=OIP.Pqp-L2hXuZU5axLp1G1ZPAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    ],
    small: [
      "https://th.bing.com/th?id=OIP.Pqp-L2hXuZU5axLp1G1ZPAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
      "https://th.bing.com/th?id=OIP.Pqp-L2hXuZU5axLp1G1ZPAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    ],
  };

  const [currentImages, setCurrentImages] = useState(images.large);

  const updateImages = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setCurrentImages(images.small);
    } else if (width < 768) {
      setCurrentImages(images.medium);
    } else {
      setCurrentImages(images.large);
    }
  };

  useEffect(() => {
    updateImages();
    window.addEventListener("resize", updateImages);
    return () => {
      window.removeEventListener("resize", updateImages);
    };
  }, []);

  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, EffectFade, Navigation, Pagination]}
      className="mySwiper"
    >
      {currentImages.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-screen object-cover hero-img"
            />
            {/* Centered Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-red-600 text-[100px] font-bold">{index}</h1>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Apps;
