import React from "react"
import "./Card.css"

export default function Card({blogData}){
    return (
        <div key={blogData.id} className="dataCard">
            <div className="datacard-img">
                <img src={blogData.image} alt={blogData.category} />
            </div>
            <div className="datacard-read-post-details">
                <span className="datacard-posting-date" >{blogData.postDate}</span>
                <span className="datacard-readtime">{blogData.readTime}</span>
            </div>
            <p className="datacard-title" > {blogData.title} </p>
            <p className="datacard-description">{blogData.description}</p>
            <div className="data-card-author-details">
                <div className="datacard-authorimg">
                    <img src={blogData.authorImage} alt={blogData.authorName} />
                </div>
                <p className="datacard-authorname">{blogData.authorName}</p>
            </div>
        </div>
    )
}