import ProfileHeader from "./ProfileHeader";
import ProfileTabs from "./ProfileTabs";
import { useState } from "react";
import ProfilePosts from "./ProfilePosts";


export default function UserProfile(){
    return (
        <>
            <div className="user-profile-page">
                <ProfileHeader />
                <ProfileTabs />
            </div>
        </>
    )
}