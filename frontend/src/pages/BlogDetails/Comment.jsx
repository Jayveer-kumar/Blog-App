import "./Comment.css";
import React , { useState } from "react";
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { Dropdown } from "primereact/dropdown";
import UserComment from "./UserComment";
export default function Comment({comments}) {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: "Most Recent", code: "mst-rcnt" },
        {name:"Popular",code:"hit"},
        { name: "Oldest", code: "old" }
    ];
    return (
        <div className="Comment">
            <div className="comment-header flex justify-between items-center">
                <div className="comment-left">
                    <h2 className="text-xl font-bold">All Comments <span className="bg-orange-500 text-white px-2 py-1 rounded">50</span> </h2>
                </div>
                <div className="comment-right-filter-box">
                    {/* Here we add filter button like most recent , oldest , popular comment */}
                    <div className="comment-filter-box flex items-center gap-2">
                    <SwapVertIcon className="comment-swap-icon" />
                     <Dropdown value={selectedCity} 
                       onChange={(e) => setSelectedCity(e.value)}
                       options={cities}
                       optionLabel="name"
                       placeholder="Sort by filter"
                       className="comment-filter-dropdown"
                     />
                    </div>
                </div>
            </div>            
            <div className="all-comments">
                {/* If comments are greator then 0 then create Comment Other Wise Display No yet */}
                <UserComment />
                <UserComment />
                <UserComment />
            </div>
        </div>
    )
}