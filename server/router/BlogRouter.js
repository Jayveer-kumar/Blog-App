const express = require("express");
const router = express.Router();
const BlogSchema = require("../models/Blog");

const blogPosts = [
  {
    title: "Mastering Time Management in Your 20s",
    shortDescription: "Learn practical strategies to manage time effectively for students and young professionals.",
    mainImage: "https://example.com/image1.jpg",
    subSection: [
      {
        title: "Why Time Matters",
        shortDescription: "Understand the importance of time in shaping your career.",
        fullContent: "Time is a limited resource. In your 20s, time invested wisely compounds into future success...",
        imageUrl: "https://example.com/subimg1.jpg"
      },
      {
        title: "Tools You Can Use",
        shortDescription: "Top apps and planners to boost productivity.",
        fullContent: "Apps like Notion, Google Calendar, and Trello can help you organize your days efficiently...",
        imageUrl: "https://example.com/subimg2.jpg"
      }
    ],
    readTime: "6 min read",
    tags: ["time", "management", "productivity"],
    category: "management",
    slug: "time-management-20s"
  },
  {
    title: "10 Life Hacks That Actually Work",
    shortDescription: "Daily tips to save time, energy, and money.",
    mainImage: "https://example.com/image2.jpg",
    subSection: [
      {
        title: "Use Binder Clips for Cables",
        shortDescription: "Keep your workspace tidy with this simple trick.",
        fullContent: "Binder clips can organize charging cables on your desk and prevent tangling...",
        imageUrl: "https://example.com/subimg3.jpg"
      },
      {
        title: "Freeze Herbs in Olive Oil",
        shortDescription: "Preserve herbs for future cooking.",
        fullContent: "Chop herbs and freeze them in olive oil in an ice tray. Saves time and keeps flavor intact...",
        imageUrl: "https://example.com/subimg4.jpg"
      }
    ],
    readTime: "5 min read",
    tags: ["hacks", "life", "daily"],
    category: "daily life hacks",
    slug: "10-life-hacks"
  },
  {
    title: "Top 5 AI Trends in 2025",
    shortDescription: "What’s shaping the future of artificial intelligence?",
    mainImage: "https://example.com/image3.jpg",
    subSection: [
      {
        title: "Edge AI Revolution",
        shortDescription: "AI processing on devices instead of the cloud.",
        fullContent: "With devices like smartphones doing more on-device processing, Edge AI is becoming vital...",
        imageUrl: "https://example.com/subimg5.jpg"
      },
      {
        title: "AI in Healthcare",
        shortDescription: "Improving diagnosis and treatment.",
        fullContent: "AI is revolutionizing healthcare by enabling faster and more accurate diagnostics...",
        imageUrl: "https://example.com/subimg6.jpg"
      }
    ],
    readTime: "7 min read",
    tags: ["AI", "trends", "future"],
    category: "tech world",
    slug: "ai-trends-2025"
  },
  {
    title: "Exploring the Streets of Tokyo",
    shortDescription: "A deep dive into Japan’s capital city from a traveler’s lens.",
    mainImage: "https://example.com/image4.jpg",
    subSection: [
      {
        title: "The Food Culture",
        shortDescription: "Street food and traditional sushi bars.",
        fullContent: "Tokyo offers a delightful food experience, from ramen shops to luxury sushi counters...",
        imageUrl: "https://example.com/subimg7.jpg"
      },
      {
        title: "Nightlife in Shinjuku",
        shortDescription: "Where the city never sleeps.",
        fullContent: "Shinjuku is full of neon lights, karaoke bars, and izakayas for late-night snacks...",
        imageUrl: "https://example.com/subimg8.jpg"
      }
    ],
    readTime: "6 min read",
    tags: ["Tokyo", "Japan", "travel"],
    category: "tourist",
    slug: "exploring-tokyo"
  },
  {
    title: "Best Remote Work Tools for 2025",
    shortDescription: "Stay productive with the latest remote work tech.",
    mainImage: "https://example.com/image5.jpg",
    subSection: [
      {
        title: "Communication Tools",
        shortDescription: "Zoom, Slack, and beyond.",
        fullContent: "Beyond Slack and Zoom, apps like Gather and Microsoft Loop are emerging...",
        imageUrl: "https://example.com/subimg9.jpg"
      },
      {
        title: "Task Management",
        shortDescription: "Asana, ClickUp, and alternatives.",
        fullContent: "Efficient remote work depends on structured task planning, and these tools deliver that...",
        imageUrl: "https://example.com/subimg10.jpg"
      }
    ],
    readTime: "5 min read",
    tags: ["remote", "tools", "productivity"],
    category: "tech world",
    slug: "remote-work-tools"
  },
  {
    title: "The Hidden Beaches of Goa",
    shortDescription: "Explore lesser-known coastal gems in Goa.",
    mainImage: "https://example.com/image6.jpg",
    subSection: [
      {
        title: "Butterfly Beach",
        shortDescription: "Quiet, peaceful, and perfect for sunsets.",
        fullContent: "Tucked away from the crowd, Butterfly Beach is ideal for private beach days...",
        imageUrl: "https://example.com/subimg11.jpg"
      },
      {
        title: "Kakolem Beach",
        shortDescription: "A hidden treasure.",
        fullContent: "One of the least explored beaches of Goa, reachable by a tough trail but worth it...",
        imageUrl: "https://example.com/subimg12.jpg"
      }
    ],
    readTime: "4 min read",
    tags: ["Goa", "beach", "travel"],
    category: "popular destination",
    slug: "hidden-beaches-goa"
  },
  {
    title: "Delegation Tips for First-Time Managers",
    shortDescription: "Learn how to delegate tasks without losing control.",
    mainImage: "https://example.com/image7.jpg",
    subSection: [
      {
        title: "Why Delegation is Crucial",
        shortDescription: "Leads to growth and trust.",
        fullContent: "Effective managers empower others by sharing responsibilities smartly...",
        imageUrl: "https://example.com/subimg13.jpg"
      },
      {
        title: "How to Delegate Wisely",
        shortDescription: "Steps to assign tasks effectively.",
        fullContent: "Break down the work, match skills, and set clear expectations...",
        imageUrl: "https://example.com/subimg14.jpg"
      }
    ],
    readTime: "6 min read",
    tags: ["delegation", "leadership", "team"],
    category: "management",
    slug: "delegation-tips"
  },
  {
    title: "Kitchen Life Hacks You Wish You Knew Sooner",
    shortDescription: "Smart tricks to make cooking simpler.",
    mainImage: "https://example.com/image8.jpg",
    subSection: [
      {
        title: "Peeling Garlic Fast",
        shortDescription: "Use a jar and shake!",
        fullContent: "Put garlic cloves in a jar, shake hard, and they peel themselves in seconds...",
        imageUrl: "https://example.com/subimg15.jpg"
      },
      {
        title: "Cleaning a Blender",
        shortDescription: "Let it clean itself.",
        fullContent: "Fill it with warm water and dish soap, blend for 30 seconds, rinse, and done...",
        imageUrl: "https://example.com/subimg16.jpg"
      }
    ],
    readTime: "4 min read",
    tags: ["kitchen", "life hacks", "cooking"],
    category: "daily life hacks",
    slug: "kitchen-life-hacks"
  },
  {
    title: "Top 5 Digital Nomad Cities",
    shortDescription: "Places offering internet, lifestyle, and affordability.",
    mainImage: "https://example.com/image9.jpg",
    subSection: [
      {
        title: "Bali, Indonesia",
        shortDescription: "Affordable and beautiful.",
        fullContent: "Bali has great co-working spaces, vibrant culture, and scenic beaches...",
        imageUrl: "https://example.com/subimg17.jpg"
      },
      {
        title: "Lisbon, Portugal",
        shortDescription: "Europe’s best for remote workers.",
        fullContent: "Lisbon offers a perfect balance of work infrastructure and lifestyle...",
        imageUrl: "https://example.com/subimg18.jpg"
      }
    ],
    readTime: "7 min read",
    tags: ["remote", "digital nomad", "travel"],
    category: "popular destination",
    slug: "digital-nomad-cities"
  },
  {
    title: "Tech for Travelers: Must-Have Gadgets",
    shortDescription: "Devices to enhance your travel experience.",
    mainImage: "https://example.com/image10.jpg",
    subSection: [
      {
        title: "Power Banks with Solar",
        shortDescription: "Charge anytime, anywhere.",
        fullContent: "A solar-powered power bank is a lifesaver for long hikes and camping...",
        imageUrl: "https://example.com/subimg19.jpg"
      },
      {
        title: "Universal Travel Adapter",
        shortDescription: "One plug for all countries.",
        fullContent: "Don't worry about charging abroad. A universal adapter works everywhere...",
        imageUrl: "https://example.com/subimg20.jpg"
      }
    ],
    readTime: "5 min read",
    tags: ["gadgets", "travel", "tech"],
    category: "tech world",
    slug: "tech-for-travelers"
  }
];

 
router.get("/blog",(req,res)=>{
  console.log("Blog Router is working  : ");
  return res.status(200).json({message:"Blog Router is working : "});
})
router.get("/testBG",(req,res)=>{
  console.log("Blog Router is working  : ");
  return res.status(200).json({message:"testing is working"});
})

module.exports = router;