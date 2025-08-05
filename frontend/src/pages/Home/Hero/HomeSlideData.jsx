import React from "react";

// window.addEventListener("resize",()=>{
//   // Print inner width and height of the window so we maintain the responsiveness 
//   console.log("Window resized to : width - height ",window.innerWidth ," ",window.innerHeight);
// });

const SlideCard = ({ data }) => {
  return (
    <div className="home-swiper-container">
      <img
        className="home-swiper-mainF-image"
        src={data.postImage}
        alt={data.title}
      />
      <div className="home-swiper-content">
        <div className="home-swiper-content-left">
          <p className="hm-sw-cl-place">
            <span>{data.place}</span>
          </p>
          <h3 className="hm-sw-cl-title">{data.Title}</h3>
          <p className="hm-sw-cl-description">{data.Description}</p>
        </div>
        <div className="home-swiper-content-right">
          <div className="home-swpr-cr-athr-main-box">
            <div className="home-swpr-cr-athr-profileImageBox">
              <img src={data.authorImage} alt={data.authorName} />
            </div>
            <p className="hm-sw-cr-author-name">
              <span>{data.authorName}</span>
            </p>
          </div>

          <div className="hm-sw-cr-content-details">
            <p className="hm-sw-cr-content-date">
              <span>{data.postDate}</span>
            </p>
            <p className="hm-sw-cr-content-read-time">
              <span>{data.readTime}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideCard;
