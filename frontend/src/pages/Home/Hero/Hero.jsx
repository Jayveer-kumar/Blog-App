import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideCard from "./HomeSlideData";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Hero.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Hero = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  const tempData = [
    {
      id:1,
      Title:"Exploring the wonderness of the Universe",
      Description:"The universe is a vast and mysterious place , filled with wonders that continue to captivate our imagination.",
      place:"Universe",
      postImage:"https://images.pexels.com/photos/1478685/pexels-photo-1478685.jpeg",
      authorImage:"https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg",
      authorName:"John Doe",
      postDate:"24 jan 2024",
      readTime:"5 min read"
    },
    {
      id:2,
      Title:"The beauty of nature and its impact on our lives",
      Description:"Nature's beauty is not just a visual delight; it has profound effects on our physical and mental well-being.",
      place:"Nature",
      postImage:"https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg",
      authorImage:"https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg",
      authorName:"Jane Smith",
      postDate:"25 jan 2024",
      readTime:"4 min read"
    },
    {
      id:3,
      Title:"The evolution of technology and its influence on society",
      Description:"Technology has transformed the way we live, work, and interact with one another, shaping modern society in profound ways.",
      place:"Technology",
      postImage:"https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg",
      authorImage:"https://images.pexels.com/photos/709188/pexels-photo-709188.jpeg",
      authorName:"Alice Johnson",
      postDate:"23 sep 2024",
      readTime:"6 min read",
    }
  ]
  return (
    <div className="testing-box">
      {/* Custom Buttons */}
      <div className="custom-navigation">
        <button ref={prevRef} className="custom-prev">
          <KeyboardArrowLeftIcon />
        </button>
        <button ref={nextRef} className="custom-next">
          <KeyboardArrowRightIcon />
        </button>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // Attach the custom button elements
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
       {tempData.map((item)=>{
        return (
          <SwiperSlide key={item.id}>
            <SlideCard data={item}></SlideCard>
          </SwiperSlide>
        )
       })}
        <div className="autoplay-progress">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20" />
          </svg>
          <span
            className="autoplay-progress-content"
            ref={progressContent}
          ></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Hero;
