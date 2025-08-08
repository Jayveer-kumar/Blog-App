import React, { useState } from "react";

import ProfilePosts from "./ProfilePosts";
import AboutDialog from "./AboutDialog";
import TaggedTab from "./TaggedTab";

export default function ProfileTabs() {
  const tabs = ["Posts", "Tagged", "About"];
  const [active, setActive] = useState("Posts");
  const [aboutOpen, setAboutOpen] = useState(false);

  const handleTabClick = (tab) => {
    if (tab === "About") {
      setAboutOpen(true);
    } else {
      setActive(tab);
    }
  };

  return (
    <>
      <div className="border-b mt-2 px-10">
        <ul className="flex gap-6">
          {tabs.map((tab) => (
            <li
              key={tab}
              className={`cursor-pointer pb-2 ${
                active === tab ? "border-b-2 border-black font-semibold" : "text-gray-500"
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>

      {/* Tab Contents */}
      <div className="px-10 mt-4">
        {active === "Posts" && <ProfilePosts />}
        {active === "Tagged" && <TaggedTab />}
      </div>

      {/* About Dialog — render it outside always */}
     <AboutDialog open={aboutOpen} onClose={() => setAboutOpen(false)} />

    </>
  );
}
