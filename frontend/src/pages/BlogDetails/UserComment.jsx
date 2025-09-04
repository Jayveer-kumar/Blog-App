import React , {useState} from 'react';

import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'; // not like icon
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'; // after like icon
import ThumbDownIcon from '@mui/icons-material/ThumbDown'; // after dislike icon
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined'; // Before dislike icon
import ReplyIcon from '@mui/icons-material/Reply';


export default function UserComment({comments}) {
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const [likeCount, setLikeCount] = useState(100);
    const [dislikeCount, setDislikeCount] = useState(10);

    const [showReplyBox, setShowReplyBox] = useState(false);
    const [replyText, setReplyText] = useState("");

    const handleReplyClick = () =>{
        setShowReplyBox(!showReplyBox);
    }

    const handleReplySubmit = () =>{
        // Here we will handle reply submit logic
        if(replyText.trim() === "") return;
        console.log("Reply Submitted: ", replyText);
        setReplyText("");
        setShowReplyBox(false);
    }

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
        <div className="userComment w-full border border-gray-300 rounded-lg p-4 my-2">
            <div className="user-comment-head flex items-center gap-2 mb-1">
                {/* First user Image  */}
                <img  src="data:image/jpeg;base64,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" alt="user image" className="w-10 h-10 rounded-full" />
                {/* Second user Name  */}
                <span className="font-bold comment-user-username">Ahan Pandey</span>
                {/* Third comment Date  */}
                <span className="text-gray-500 text-sm comment-date">5 days ago</span>
            </div>
            <div className="user-comment-mdl mx-12 mb-2 user-comment-content">
                {/* Comment content */}
                <p>This is a user comment.</p>
            </div>
            <div className="user-comment-bottom mx-12 flex items-center space-x-4">
                {/* Here like , dislike and reply button */}

                <div className="user-comment-like flex items-center">
                    <button onClick={handleLike}>
                        {liked ? <ThumbUpAltIcon className='comment-like-icon comment-common-icon' /> : <ThumbUpAltOutlinedIcon className='comment-liked-icon comment-common-icon' />}
                    </button>
                    <span className='comment-like-count'>{likeCount}</span>
                </div>
                <div className="user-comment-dislike flex items-center">
                    <button onClick={handleDislike}>
                        {disliked ? <ThumbDownIcon className='comment-dislike-icon comment-common-icon' /> : <ThumbDownOutlinedIcon className='comment-disliked-icon comment-common-icon' />}
                    </button>
                    <span className='comment-dislike-count'>{dislikeCount}</span>
                </div>
                {/* Reply Button */}
                <div className="user-comment-reply flex items-center cursor-pointer" onClick={handleReplyClick}>
                    <ReplyIcon className='comment-reply-icon comment-common-icon' />
                    <span className="text-gray-500 text-sm cursor-pointer hover:underline">Reply</span>
                </div>
            </div>
            {/* Reply Section */}
            {showReplyBox && (
                <div className="comment-reply-box flex items-start gap-2 mt-3 mx-12">
                     {/* Replier Image */} 
                     <img src="https://img-cdn.publive.online/fit-in/1200x675/bollyy/media/media_files/2025/06/17/m0IokPBFgE9jHFlivkxV.jpg" alt="your image" className="w-8 h-8 rounded-full" />
                     <div className="flex-1">
                        <p className="text-sm  mb-1 comment-replying-to">
                            Replying to <span className="font-bold">Ahan Pandey</span>
                        </p>
                        <textarea
                          value={replyText}
                          onChange={(e) => setReplyText(e.target.value)}
                          placeholder="Write your reply..."
                          className=" reply-textarea  w-full  rounded-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-100"
                        />
                        <div className="flex justify-end mt-2 gap-2">
                            <button className="px-3 py-1 text-sm text-white rounded bg-red-500 hover:bg-red-600" onClick={() => setShowReplyBox(false)} >
                                cancel
                            </button>
                            <button className="px-3 py-1 text-sm rounded bg-blue-500 text-white hover:bg-blue-600" onClick={handleReplySubmit}>
                                submit
                            </button>
                         </div>
                     </div>
                </div>
            )}
        </div>
    )
}