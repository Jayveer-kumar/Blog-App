import "./LatestInsight.css";
import { React, useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";
import Card from "../../../Component/Card";
const toggleFilter = (event) => {
  event.preventDefault();
  // Remove active class from all buttons
  const allButtons = document.querySelectorAll('.latestInsight-filter-box button');
  allButtons.forEach((btn) => {
    btn.classList.remove('latestInsight-left-filter-active');
  });
  // Add active class to the clicked button
  event.currentTarget.classList.add('latestInsight-left-filter-active');
};


const tempBlogData = [
  {
    id: 1,
    image: "https://undiscoveredmountains.com/uploads/articles/wysiwyg/Mount%20Everest.png",
    category: "Travel",
    postDate: "24 Jan 2024",
    readTime: "5 min read",
    title: "Exploring the Hidden Gems of the Himalayas",
    description: "Unveil the untouched beauty of mountain trails, village life, and serenity in the Himalayan range.",
    authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
    authorName: "Ravi Sharma",
  },
  {
    id: 2,
    image: "https://assets.aboutamazon.com/dims4/default/6998dcd/2147483647/strip/false/crop/1600x900+0+0/resize/1486x836!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F87%2Ffb%2F7c6b10b84236a62e7f9e5dbd92ed%2Ftech-gadgets.jpg",
    category: "Tech",
    postDate: "2 Feb 2024",
    readTime: "4 min read",
    title: "Top 5 Gadgets You Need in 2024",
    description: "Here’s a list of must-have gadgets in 2024 that will boost your daily productivity and entertainment.",
    authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
    authorName: "Anita Desai",
  },
  {
    id: 3,
    image: "https://www.tastingtable.com/img/gallery/29-italian-dishes-you-need-to-try-at-least-once/l-intro-1745944560.jpg",
    category: "Food",
    postDate: "14 Feb 2024",
    readTime: "3 min read",
    title: "Taste the Authentic Flavors of Italy",
    description: "A delicious journey through the best Italian cuisines you must try when visiting Rome.",
    authorImage: "https://randomuser.me/api/portraits/men/22.jpg",
    authorName: "Giovanni Rossi",
  },
  {
    id: 4,
    image: "https://www.anytimefitness.co.in/wp-content/uploads/2022/09/Habits.png",
    category: "Health",
    postDate: "5 Mar 2024",
    readTime: "6 min read",
    title: "10 Morning Habits That Transform Your Day",
    description: "Improve your lifestyle with these simple yet powerful habits for a healthier and happier morning routine.",
    authorImage: "https://randomuser.me/api/portraits/women/18.jpg",
    authorName: "Sonal Mehta",
  },
  {
    id: 5,
    image: "https://m.media-amazon.com/images/I/41E+HQ5F-NL.jpg_BO30,255,255,255_UF900,850_SR1910,1000,0,C_PIRIOFOURANDHALF-medium,BottomLeft,30,-20_QL100_.jpg",
    category: "Programming",
    postDate: "20 Mar 2024",
    readTime: "7 min read",
    title: "Master JavaScript in 30 Days: A Practical Guide",
    description: "Whether you're a beginner or experienced, follow this roadmap to master JavaScript in a month.",
    authorImage: "https://randomuser.me/api/portraits/men/41.jpg",
    authorName: "Aditya Kumar",
  },
  {
    id: 6,
    image: "https://m.media-amazon.com/images/I/618PbS-vvsL._UF350,350_QL80_.jpg",
    category: "Lifestyle",
    postDate: "30 Mar 2024",
    readTime: "4 min read",
    title: "Books That Will Change the Way You Think",
    description: "Discover timeless reads that offer deep perspectives and new ways of thinking.",
    authorImage: "https://randomuser.me/api/portraits/women/52.jpg",
    authorName: "Neha Roy",
  },
  {
    id: 7,
    image: "https://www.clubmahindra.com/blog/media/section_images/naturephot-ec32e94608f809e.webp",
    category: "Photography",
    postDate: "10 Apr 2024",
    readTime: "5 min read",
    title: "Nature Photography Tips from the Pros",
    description: "Capture stunning natural beauty using these expert-level techniques and gear suggestions.",
    authorImage: "https://randomuser.me/api/portraits/men/25.jpg",
    authorName: "Harshit Patel",
  },
  {
    id: 8,
    image: "https://www.bankrate.com/2020/09/21103255/ways-to-save-on-tight-budget.jpg",
    category: "Finance",
    postDate: "18 Apr 2024",
    readTime: "3 min read",
    title: "How to Save Money on a Tight Budget",
    description: "Practical saving tips and hacks to help you stretch every rupee and plan smarter.",
    authorImage: "https://randomuser.me/api/portraits/women/30.jpg",
    authorName: "Kriti Nanda",
  },
  {
    id: 9,
    image: "https://feed.muzli.cloud/muzli_feed/wp-content/uploads/2025/01/29111657/cover3-min-825x510.png",
    category: "Design",
    postDate: "25 Apr 2024",
    readTime: "6 min read",
    title: "UI/UX Design Trends That Will Dominate 2024",
    description: "A quick look at the colors, layouts, and interactions that will shape modern apps and websites.",
    authorImage: "https://randomuser.me/api/portraits/men/48.jpg",
    authorName: "Mohit Saini",
  },
  {
    id: 10,
    image: "https://miro.medium.com/v2/resize:fit:1200/1*m_27nhSSKs4-ivS2mIg-7A.jpeg",
    category: "Business",
    postDate: "1 May 2024",
    readTime: "5 min read",
    title: "From Idea to Startup: How to Begin in 2024",
    description: "An easy-to-follow plan to turn your idea into a scalable startup this year.",
    authorImage: "https://randomuser.me/api/portraits/women/11.jpg",
    authorName: "Shreya Bhatt",
  },
];


export default function LatestInsight() {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New posted", code: "NY" },
    { name: "Viral Blogs", code: "RM" },
    { name: "Latest Trends", code: "LDN" },
    { name: "Grocery Shopping", code: "IST" },
    { name: "New Trends", code: "PRS" }
  ];

  return (
    <div className="LatestInsight">
      <div className="latestInsight-header-p">
        <h2>Blog</h2>
        <p>
          Here , we share travel tips , destination guides , and stories that
          inspire your next adventure{" "}
        </p>
      </div>

      {/* Here we add filter buttons */}
      <div className="latestInsight-filter-box">
        <div className="latestInsight-left-filter">
          <button onClick={toggleFilter} className="latestInsight-left-filter-active" >All</button>
          <button onClick={toggleFilter} >Destination</button>
          <button onClick={toggleFilter} >Culinary</button>
          <button onClick={toggleFilter} >Lifestyle</button>
          <button onClick={toggleFilter} >Tips & Hacks</button>
        </div>
        <div className="latestInsight-right-filter">
          <span className="latestInsight-sort-label">Sort by:</span>
          <div className="card flex justify-content-center">
            <Dropdown value={selectedCity}
              onChange={(e) => setSelectedCity(e.value)}
              options={cities}
              optionLabel="name"
              placeholder="Select a Filter"
              className="w-full md:w-14rem custom-dropdownLatestInsight"
            />
          </div>
        </div>
      </div>
      {/* Here we add actual blog data */}
      <div className="latestInsight-blog-data">
          {tempBlogData.map((blog) => (
             <Card key={blog.id} blogData={blog} />
           ))}
        </div>
    </div>
  );
}
