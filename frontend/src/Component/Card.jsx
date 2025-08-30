import React from "react"

// import useNavigate
import {  Link } from "react-router-dom";

import "./Card.css"

export default function Card({blogData}){

    // const handleCardClick = () => {
    //     <Link to={`/blog-details/${blogData.id}`} />
    // };

    return (
        <div key={blogData.id} className="dataCard">
            <Link to={`/blog-details/${blogData.id}`} >
            <div className="datacard-img">
                <img src={blogData.thumbnails} alt={blogData.category} />
            </div>
            <div className="datacard-read-post-details">
                <span className="datacard-posting-date" >{blogData.postDate}</span>
                <span className="datacard-readtime">{blogData.readTime}</span>
            </div>
            <p className="datacard-title" > {blogData.title} </p>
            <p className="datacard-description">{blogData.content.blocks.map(block=> block.id==="p1" ? block.data.text : null)}</p>
            <div className="data-card-author-details">
                <div className="datacard-authorimg">
                    <img src={blogData.authorImage} alt={blogData.authorName} />
                </div>
                <p className="datacard-authorname">{blogData.authorName}</p>
            </div>
            </Link>
        </div>
    )
}