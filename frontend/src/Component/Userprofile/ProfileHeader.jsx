import "./ProfileHeader.css"; 
import { useState } from "react";
import CheckIcon from '@mui/icons-material/Check';
export default function ProfileHeader() {
  const [showFullBio, setShowFullBio] = useState(false);
  const [isFollowing , setisFollowing] = useState(false);
  const bioText = "Interface and Brand Designer based in San Antonio. I love minimal design, color theory, and making brands stand out. Let's work together! I specialize in UX/UI design and brand identity with 5+ years of experience.";

  const handleFollow = () =>{
    setisFollowing(!isFollowing);
    if(!isFollowing){
      console.log("You are now following the user.");
    } else {
      console.log("You have unfollowed the user.");
    }
  }

  return (
    <div className="user-profile-main-container">
      <div className="user-profile-loader-head"></div>
      <div className="user-profile-main-content">
        <div className="user-profile-image-bio-box">
          <div className="user-profile-image-box">
            <img
              id="user-profile-image"
              src="https://images.pexels.com/photos/371160/pexels-photo-371160.jpeg"
              alt="user-profile-image"
            />
          </div>
          <div className="user-profile-bio-box">
            <h2 className="user-profile-username">Irene Brooks</h2>
            <div className="user-profile-main-bio">
              <p
                className={`user-profile-bio ${showFullBio ? "expanded" : ""}`}
              >
                {bioText}
              </p>
              {bioText.length > 100 && (
                <button
                  className="show-more-btn"
                  onClick={() => setShowFullBio(!showFullBio)}
                >
                  {showFullBio ? "Show Less" : "Show More"}
                </button>
              )}
            </div>
            <div className="user-profile-follow-touch-btn-box">
              <button onClick={handleFollow} className={`user-profile-follow-btn ${isFollowing ? "following" : ""}`}>
                {/* {isFollowing ? "Following" : "Follow"} <CheckIcon /> */}
                {isFollowing ? (
                  <>
                    Following <CheckIcon style={{ marginLeft: "5px", font:"icon" }} />
                  </>
                ) : (
                  "Follow"
                )}
              </button>
              <button className="user-profile-touch-btn">Message</button>
            </div>
          </div>
        </div>
        <div className="user-profile-followers-following-box">
          <div className="user-profile-followers-box">
            <p>Followers</p>
            <h1 className="user-profile-followers">1178</h1>
          </div>
          <div className="user-profile-following-box">
            <p>Following</p>
            <h1 className="user-profile-following">256</h1>
          </div>
          <div className="user-profile-likes-box">
            <p>Likes</p>
            <h1 className="user-profile-likes">256</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
