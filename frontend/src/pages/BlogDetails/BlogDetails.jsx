import "./BlogDetails.css";
import React from "react";
import { useState , useRef} from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import ShareIcon from '@mui/icons-material/Share';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'; // not like icon
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'; // after like icon
import ThumbDownIcon from '@mui/icons-material/ThumbDown'; // after dislike icon
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined'; // Before dislike icon
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

import { Editor } from "primereact/editor";

export default function BlogDetails({ blogData }) {
    const [text, setText] = useState('');
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const [likeCount, setLikeCount] = useState(100);
    const [dislikeCount, setDislikeCount] = useState(10);

    const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikeCount(likeCount - 1);
    } else {
      setLiked(true);
      setLikeCount(likeCount + 1);
      if (disliked) {
        setDisliked(false);
        setDislikeCount(dislikeCount - 1);
      }
    }
   };
   const handleDislike = () => {
    if (disliked) {
      setDisliked(false);
      setDislikeCount(dislikeCount - 1);
    } else {
      setDisliked(true);
      setDislikeCount(dislikeCount + 1);
      if (liked) {
        setLiked(false);
        setLikeCount(likeCount - 1);
      }
    }
  };
    return (
      <div className="blog-details-main-container">
        <div className="blog-details-container">
          <h1 className="blog-details-title">
            How to be happy: 27 habits Add to your Routine
          </h1>
          <hr />
          <div className="blog-details-user-share-container">
            <div className="blog-details-user-author">
              <div className="blog-details-user-image-box">
                <img
                  src="https://images.unsplash.com/photo-1749740577807-e20202e60da4?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="User"
                />
              </div>
              <div className="blog-details-user-details">
                <p className="blog-details-user-name">Vijay Pal</p>
                <p className="blog-details-user-date"> 20th Oct 2023</p>
              </div>
            </div>
            <div className="blog-details-user-share-box">
              <div className="blog-details-user-share-facebook-box">
                <FacebookIcon />
              </div>
              <div className="blog-details-user-share-twitter-box">
                <TwitterIcon />
              </div>
              <div className="blog-details-user-share-whatsapp-box">
                <ShareIcon />
              </div>
            </div>
          </div>
          <div className="blog-details-main-image-box">
            <img
              src="https://images.unsplash.com/photo-1749738505157-2d8142c1545f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Blog-image"
            />
          </div>
          <div className="blog-details-content-box">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              quam quibusdam perferendis reprehenderit sequi deleniti iusto,
              iste necessitatibus repellat, debitis quis nobis explicabo aliquid
              tempore distinctio culpa nulla nihil voluptatibus?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
              nostrum repudiandae deleniti quisquam consequuntur culpa tempora
              nihil magnam incidunt! Consequuntur et sunt enim placeat quam
              nihil, repellendus a totam? Accusamus!
            </p>
            <br />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Adipisci, amet. Atque laborum placeat culpa reprehenderit, unde
              esse perferendis voluptate quae hic dignissimos, maxime sed
              necessitatibus rem blanditiis at, voluptatem dolor?
            </p>
            <br />
            <h2 className="blog-details-content-heading">Daily Habits</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              facilis? Doloribus, doloremque. Voluptatibus, voluptates.
              Doloremque, cumque. Doloribus, asperiores. Doloremque, cumque.
              Doloribus, asperiores. Doloremque, cumque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              soluta voluptate! Error tempore harum dolores quas itaque odio
              doloremque nobis. Explicabo vitae ipsum vel maxime odit voluptas
              rem aliquam molestias.
            </p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odit,
            quibusdam exercitationem a error rerum earum quas autem animi, illo
            corporis aliquam saepe. Nesciunt accusamus esse voluptas mollitia
            recusandae impedit!
            <br />
            <h2 className="blog-details-content-heading">Sample</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              laboriosam eum dolorum fugit repellendus magni sequi doloremque
              perspiciatis beatae explicabo dolor vitae neque quod eveniet autem
              ratione tenetur, quos maxime? Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Aspernatur possimus rem incidunt quo
              cupiditate, animi minus quis est neque quisquam repellendus error
              dolorum esse veritatis, distinctio tempore dolore at natus!Lorem
            </p>
          </div>
          <div className="blog-details-blog-like-dislike-prev-next-box">
            <div className="blog-details-blog-like-dislike-box">
              <div className="blog-details-blog-like-box">
                <button className="blog-details-blog-like-button" onClick={handleLike}>
                  {/* <ThumbUpAltOutlinedIcon /> */}
                  {liked ? <ThumbUpAltIcon /> : <ThumbUpAltOutlinedIcon />}
                </button>
                <span className="blog-details-blog-like-count">{likeCount}</span>
              </div>
              <div className="blog-details-blog-dislike-box">
                <button className="blog-details-blog-dislike-button" onClick={handleDislike}>
                  {/* <ThumbDownOutlinedIcon /> */}
                  {disliked ? <ThumbDownIcon /> : <ThumbDownOutlinedIcon />}
                </button>
                <span className="blog-details-blog-dislike-count">{dislikeCount}</span>
              </div>
            </div>
            <div className="blog-details-prev-next-box">
              <div className="blog-details-prev-blog-box">
                <button className="blog-details-prev-blog-button">
                  <ArrowBackIosNewOutlinedIcon />
                  <span>Previous Blog</span>
                </button>
              </div>
              <div className="blog-details-next-blog-box">
                <button className="blog-details-next-blog-button">
                  <span>Next Blog</span>
                  <ArrowForwardIosOutlinedIcon />
                </button>
              </div>
            </div>
          </div>
          <div className="blog-details-leave-comment-main-box">
            <h2 className="blog-details-leave-comment-heading">
              Leave a Comment
            </h2>
            <div className="blog-details-leave-comment-box">
              <div className="card">
                <Editor
                  value={text}
                  onTextChange={(e) => setText(e.htmlValue)}
                  style={{ height: "320px" , width:"100%" }}
                  placeholder="Write your thoughts here..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
