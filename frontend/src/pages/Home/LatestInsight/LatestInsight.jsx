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

const tempData = [
  {
    id: 101,
    category: "Web Development",
    postDate: "28 Aug 2024",
    readTime:"5 min read",
    title: "The Future of Web Development in 2025",
    thumbnails:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrfGxHX9kXvq6miboVzwgFU0WVeo9KKjGL5A&s",
    content: {
      time: 1693324800000,
      blocks: [
        {
          id: "h1",
          type: "header",
          data: {
            text: "Introduction to Modern Web Development",
            level: 1
          }
        },
        {
          id: "p1",
          type: "paragraph",
          data: {
            text: "Web development has evolved rapidly over the past decade. From simple HTML pages to complex web applications, developers now have access to powerful frameworks and tools that make building interactive experiences easier than ever before."
          }
        },
        {
          id: "img1",
          type: "image",
          data: {
            caption: "Modern web development workflow",
            withBorder: false,
            withBackground: false,
            stretched: false,
            file: {
              url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
              name: "web-development.jpg",
              size: 245760
            }
          }
        },
        {
          id: "h2",
          type: "header",
          data: {
            text: "Key Technologies Shaping the Future",
            level: 2
          }
        },
        {
          id: "p2",
          type: "paragraph",
          data: {
            text: "React, Vue, and Angular continue to dominate the frontend landscape, while Next.js and Nuxt.js provide powerful full-stack solutions. Backend technologies like Node.js, Python FastAPI, and Go are becoming increasingly popular for their performance and developer experience."
          }
        },
        {
          id: "h3",
          type: "header",
          data: {
            text: "What's Next?",
            level: 3
          }
        },
        {
          id: "p3",
          type: "paragraph",
          data: {
            text: "The future looks bright with emerging technologies like WebAssembly, serverless computing, and edge computing reshaping how we think about web applications."
          }
        }
      ]
    },
    authorImage: "https://randomuser.me/api/portraits/women/11.jpg",
    authorName: "Shreya Bhatt",
  },
  {
    id: 102,
    category: "Programming",
    postDate: "1 Sep 2024",
    readTime: "6 min read",
    title: "Mastering React Hooks: A Complete Guide",
    thumbnails:"https://codingcops.com/wp-content/uploads/2024/06/Featured-Mastering-React-Hooks_-1575_700.png",
    content: {
      time: 1693411200000,
      blocks: [
        {
          id: "h1",
          type: "header",
          data: {
            text: "Understanding React Hooks",
            level: 1
          }
        },
        {
          id: "p1",
          type: "paragraph",
          data: {
            text: "React Hooks revolutionized how we write React components. Introduced in React 16.8, hooks allow you to use state and other React features in functional components, making your code more readable and reusable."
          }
        },
        {
          id: "h2",
          type: "header",
          data: {
            text: "useState Hook",
            level: 2
          }
        },
        {
          id: "p2",
          type: "paragraph",
          data: {
            text: "The useState hook is the most fundamental hook in React. It allows you to add state to functional components. Here's how it works and why it's so powerful for managing component state."
          }
        },
        {
          id: "img1",
          type: "image",
          data: {
            caption: "React Hooks in action",
            withBorder: true,
            withBackground: false,
            stretched: false,
            file: {
              url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
              name: "react-hooks.jpg",
              size: 189440
            }
          }
        },
        {
          id: "h3",
          type: "header",
          data: {
            text: "useEffect for Side Effects",
            level: 2
          }
        },
        {
          id: "p3",
          type: "paragraph",
          data: {
            text: "The useEffect hook handles side effects in your components. Whether you're fetching data, setting up subscriptions, or manually changing the DOM, useEffect is your go-to solution."
          }
        }
      ]
    },
    authorImage: "https://randomuser.me/api/portraits/men/48.jpg",
    authorName: "Mohit Saini",
  },
  {
    id: 103,
    category: "CSS",
    postDate: "5 Sep 2024",
    readTime: "7 min read",
    title: "Building Responsive Designs with CSS Grid",
    thumbnails:"https://blog.openreplay.com/images/building-responsive-pages-with-css-grid/images/image12.png",
    content: {
      time: 1693497600000,
      blocks: [
        {
          id: "h1",
          type: "header",
          data: {
            text: "CSS Grid: The Ultimate Layout Tool",
            level: 1
          }
        },
        {
          id: "p1",
          type: "paragraph",
          data: {
            text: "CSS Grid Layout is a two-dimensional layout system for the web. It lets you layout items in rows and columns, and has many features that make building complex layouts straightforward."
          }
        },
        {
          id: "img1",
          type: "image",
          data: {
            caption: "CSS Grid layout example",
            withBorder: false,
            withBackground: true,
            stretched: true,
            file: {
              url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
              name: "css-grid-layout.jpg",
              size: 312580
            }
          }
        },
        {
          id: "h2",
          type: "header",
          data: {
            text: "Grid vs Flexbox: When to Use What",
            level: 2
          }
        },
        {
          id: "p2",
          type: "paragraph",
          data: {
            text: "While Flexbox is great for one-dimensional layouts, CSS Grid excels at two-dimensional layouts. Use Grid when you need to control both rows and columns, and Flexbox when you're working with a single dimension."
          }
        },
        {
          id: "h3",
          type: "header",
          data: {
            text: "Responsive Grid Patterns",
            level: 3
          }
        },
        {
          id: "p3",
          type: "paragraph",
          data: {
            text: "Creating responsive layouts with CSS Grid is incredibly powerful. You can use features like auto-fit, minmax(), and fr units to create layouts that adapt beautifully to any screen size."
          }
        }
      ]
    },
    authorImage: "https://randomuser.me/api/portraits/women/30.jpg",
    authorName: "Kriti Nanda",
  },
  {
    id: 104,
    category: "JavaScript",
    postDate: "10 Sep 2024",
    readTime: "5 min read",
    title: "JavaScript ES2024: New Features You Should Know",
    thumbnails:"https://techytriq.com/wp-content/uploads/2024/12/Wordpress-Covers-52-1024x536.png",
    content: {
      time: 1693584000000,
      blocks: [
        {
          id: "h1",
          type: "header",
          data: {
            text: "What's New in ES2024",
            level: 1
          }
        },
        {
          id: "p1",
          type: "paragraph",
          data: {
            text: "JavaScript continues to evolve with each new ECMAScript release. ES2024 brings exciting new features that will improve developer productivity and code readability."
          }
        },
        {
          id: "h2",
          type: "header",
          data: {
            text: "New Array Methods",
            level: 2
          }
        },
        {
          id: "p2",
          type: "paragraph",
          data: {
            text: "ES2024 introduces several new array methods that make working with arrays even more intuitive. These methods follow functional programming principles and provide cleaner alternatives to common operations."
          }
        },
        {
          id: "img1",
          type: "image",
          data: {
            caption: "JavaScript ES2024 features overview",
            withBorder: true,
            withBackground: false,
            stretched: false,
            file: {
              url: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800",
              name: "javascript-es2024.jpg",
              size: 278920
            }
          }
        },
        {
          id: "h3",
          type: "header",
          data: {
            text: "Improved Error Handling",
            level: 2
          }
        },
        {
          id: "p3",
          type: "paragraph",
          data: {
            text: "Error handling gets better with new syntax for handling exceptions and improved stack traces. These features make debugging easier and error messages more informative."
          }
        }
      ]
    },
    authorImage: "https://randomuser.me/api/portraits/men/25.jpg",
    authorName: "Harshit Patel",
  },
  {
    id: 105,
    category: "Node.js",
    postDate: "15 Sep 2024",
    readTime: "8 min read",
    title: "Node.js Performance Optimization Tips",
    thumbnails:"https://syndelltech.com/wp-content/uploads/2023/06/8-Ways-to-Improve-Node.js-Performance.jpg",
    content: {
      time: 1693670400000,
      blocks: [
        {
          id: "h1",
          type: "header",
          data: {
            text: "Optimizing Node.js Applications",
            level: 1
          }
        },
        {
          id: "p1",
          type: "paragraph",
          data: {
            text: "Node.js applications can handle thousands of concurrent connections, but poor optimization can quickly turn your fast application into a bottleneck. Here are proven strategies to maximize your Node.js performance."
          }
        },
        {
          id: "h2",
          type: "header",
          data: {
            text: "Memory Management",
            level: 2
          }
        },
        {
          id: "p2",
          type: "paragraph",
          data: {
            text: "Effective memory management is crucial for Node.js performance. Understanding garbage collection, avoiding memory leaks, and properly managing large objects can dramatically improve your application's performance."
          }
        },
        {
          id: "img1",
          type: "image",
          data: {
            caption: "Node.js performance monitoring dashboard",
            withBorder: false,
            withBackground: false,
            stretched: true,
            file: {
              url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
              name: "nodejs-performance.jpg",
              size: 456780
            }
          }
        },
        {
          id: "h3",
          type: "header",
          data: {
            text: "Async/Await Best Practices",
            level: 3
          }
        },
        {
          id: "p3",
          type: "paragraph",
          data: {
            text: "Proper use of async/await can make your code more readable while maintaining excellent performance. However, common pitfalls like sequential awaiting can hurt performance significantly."
          }
        }
      ]
    },
    authorImage: "https://randomuser.me/api/portraits/women/52.jpg",
    authorName: "Neha Roy",
  },
  {
    id: 106,
    category: "Database",
    postDate: "20 Sep 2024",
    readTime: "6 min read",
    title: "Database Design Principles for Scalable Applications",
    thumbnails:"https://www.red-gate.com/simple-talk/wp-content/uploads/2019/04/load-balancer-read-write-application-auto-scali.png",
    content: {
      time: 1693756800000,
      blocks: [
        {
          id: "h1",
          type: "header",
          data: {
            text: "Designing Databases That Scale",
            level: 1
          }
        },
        {
          id: "p1",
          type: "paragraph",
          data: {
            text: "A well-designed database is the foundation of any successful application. Poor database design can lead to performance issues, data inconsistency, and maintenance nightmares as your application grows."
          }
        },
        {
          id: "img1",
          type: "image",
          data: {
            caption: "Database architecture diagram",
            withBorder: true,
            withBackground: true,
            stretched: false,
            file: {
              url: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800",
              name: "database-design.jpg",
              size: 367890
            }
          }
        },
        {
          id: "h2",
          type: "header",
          data: {
            text: "Normalization vs Denormalization",
            level: 2
          }
        },
        {
          id: "p2",
          type: "paragraph",
          data: {
            text: "Understanding when to normalize and when to denormalize your data is crucial for performance. While normalization reduces redundancy, strategic denormalization can significantly improve query performance."
          }
        },
        {
          id: "h3",
          type: "header",
          data: {
            text: "Indexing Strategies",
            level: 2
          }
        },
        {
          id: "p3",
          type: "paragraph",
          data: {
            text: "Proper indexing can make the difference between a query that takes milliseconds and one that takes minutes. Learn how to create effective indexes without over-indexing your tables."
          }
        }
      ]
    },
    authorImage: "https://randomuser.me/api/portraits/men/41.jpg",
    authorName: "Aditya Kumar",
  },
  {
    id: 107,
    category: "API",
    postDate: "25 Sep 2024",
    readTime: "7 min read",
    title: "API Security: Protecting Your Endpoints",
    thumbnails:"https://brightsec.com/wp-content/uploads/2025/03/API-Security-best-practices.png",
    content: {
      time: 1693843200000,
      blocks: [
        {
          id: "h1",
          type: "header",
          data: {
            text: "Securing Your API Endpoints",
            level: 1
          }
        },
        {
          id: "p1",
          type: "paragraph",
          data: {
            text: "API security is more critical than ever as APIs become the backbone of modern applications. A single vulnerability can expose sensitive data and compromise your entire system."
          }
        },
        {
          id: "h2",
          type: "header",
          data: {
            text: "Authentication vs Authorization",
            level: 2
          }
        },
        {
          id: "p2",
          type: "paragraph",
          data: {
            text: "Understanding the difference between authentication and authorization is fundamental to API security. Authentication verifies who you are, while authorization determines what you can do."
          }
        },
        {
          id: "img1",
          type: "image",
          data: {
            caption: "API security layers visualization",
            withBorder: false,
            withBackground: false,
            stretched: false,
            file: {
              url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800",
              name: "api-security.jpg",
              size: 298450
            }
          }
        },
        {
          id: "h3",
          type: "header",
          data: {
            text: "Rate Limiting and Throttling",
            level: 3
          }
        },
        {
          id: "p3",
          type: "paragraph",
          data: {
            text: "Implementing proper rate limiting protects your API from abuse and ensures fair usage among all clients. Learn different strategies for implementing effective rate limiting."
          }
        }
      ]
    },
    authorImage: "https://randomuser.me/api/portraits/women/18.jpg",
    authorName: "Sonal Mehta",
  },
  {
    id: 108,
    category: "CSS",
    postDate: "30 Sep 2024",
    readTime: "5 min read",
    title: "Mobile-First CSS: Design for the Future",
    thumbnails:"https://media.geeksforgeeks.org/wp-content/uploads/20231109115815/Mobile-First-Design-copy.webp",
    content: {
      time: 1693929600000,
      blocks: [
        {
          id: "h1",
          type: "header",
          data: {
            text: "Mobile-First Design Philosophy",
            level: 1
          }
        },
        {
          id: "p1",
          type: "paragraph",
          data: {
            text: "With mobile devices accounting for over 50% of web traffic, designing mobile-first is no longer optional—it's essential. This approach ensures your website works beautifully on all devices."
          }
        },
        {
          id: "img1",
          type: "image",
          data: {
            caption: "Mobile-first responsive design showcase",
            withBorder: true,
            withBackground: false,
            stretched: true,
            file: {
              url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
              name: "mobile-first-design.jpg",
              size: 423670
            }
          }
        },
        {
          id: "h2",
          type: "header",
          data: {
            text: "Progressive Enhancement",
            level: 2
          }
        },
        {
          id: "p2",
          type: "paragraph",
          data: {
            text: "Start with a solid mobile foundation and progressively enhance the experience for larger screens. This ensures your content is accessible and functional on any device."
          }
        },
        {
          id: "h3",
          type: "header",
          data: {
            text: "Touch-Friendly Interface Design",
            level: 3
          }
        },
        {
          id: "p3",
          type: "paragraph",
          data: {
            text: "Designing for touch interfaces requires different considerations than desktop designs. Button sizes, spacing, and interaction patterns all need to be optimized for finger navigation."
          }
        }
      ]
    },
    authorImage: "https://randomuser.me/api/portraits/men/22.jpg",
    authorName: "Giovanni Rossi",
  },
  {
    id: 109,
    category: "DevOps",
    postDate: "05 Oct 2024",
    readTime: "6 min read",
    title: "Docker containerization: From Development to Production",
    thumbnails:"https://media.geeksforgeeks.org/wp-content/uploads/20190915151739/docker_flowchart-1024x640.png",
    content: {
      time: 1694016000000,
      blocks: [
        {
          id: "h1",
          type: "header",
          data: {
            text: "Containerizing Your Applications",
            level: 1
          }
        },
        {
          id: "p1",
          type: "paragraph",
          data: {
            text: "Docker has revolutionized how we develop, ship, and run applications. By containerizing your applications, you ensure consistency across development, testing, and production environments."
          }
        },
        {
          id: "h2",
          type: "header",
          data: {
            text: "Writing Efficient Dockerfiles",
            level: 2
          }
        },
        {
          id: "p2",
          type: "paragraph",
          data: {
            text: "A well-written Dockerfile can significantly reduce build times and image sizes. Understanding layer caching, multi-stage builds, and best practices is crucial for efficient containerization."
          }
        },
        {
          id: "img1",
          type: "image",
          data: {
            caption: "Docker container architecture diagram",
            withBorder: false,
            withBackground: true,
            stretched: false,
            file: {
              url: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800",
              name: "docker-containers.jpg",
              size: 387920
            }
          }
        },
        {
          id: "h3",
          type: "header",
          data: {
            text: "Container Orchestration",
            level: 2
          }
        },
        {
          id: "p3",
          type: "paragraph",
          data: {
            text: "Managing multiple containers in production requires orchestration tools like Kubernetes or Docker Swarm. Learn how to scale, monitor, and maintain containerized applications effectively."
          }
        }
      ]
    },
    authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
    authorName: "Anita Desai",
  },
  {
    id: 110,
    category: "API",
    postDate: "25 Sep 2024",
    readTime: "7 min read",
    title: "GraphQL vs REST: Choosing the Right API Architecture",
    thumbnails:"https://cdn.mycplus.com/mycplus/wp-content/uploads/2023/11/REST-vs.-GraphQL-APIs.png",
    content: {
      time: 1694102400000,
      blocks: [
        {
          id: "h1",
          type: "header",
          data: {
            text: "API Architecture Decision: GraphQL or REST?",
            level: 1
          }
        },
        {
          id: "p1",
          type: "paragraph",
          data: {
            text: "Choosing between GraphQL and REST is one of the most important architectural decisions you'll make for your API. Both have their strengths and are suited for different use cases."
          }
        },
        {
          id: "img1",
          type: "image",
          data: {
            caption: "GraphQL vs REST API comparison",
            withBorder: true,
            withBackground: false,
            stretched: false,
            file: {
              url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
              name: "graphql-vs-rest.jpg",
              size: 342180
            }
          }
        },
        {
          id: "h2",
          type: "header",
          data: {
            text: "When to Choose GraphQL",
            level: 2
          }
        },
        {
          id: "p2",
          type: "paragraph",
          data: {
            text: "GraphQL excels when you need flexible data fetching, have complex relationship requirements, or want to minimize over-fetching and under-fetching of data. It's perfect for client-driven applications."
          }
        },
        {
          id: "h3",
          type: "header",
          data: {
            text: "REST's Continued Relevance",
            level: 2
          }
        },
        {
          id: "p3",
          type: "paragraph",
          data: {
            text: "REST remains the go-to choice for many applications due to its simplicity, caching capabilities, and widespread understanding. It's ideal for CRUD operations and stateless interactions."
          }
        },
        {
          id: "h4",
          type: "header",
          data: {
            text: "Making the Right Choice",
            level: 3
          }
        },
        {
          id: "p4",
          type: "paragraph",
          data: {
            text: "Consider your team's expertise, application requirements, caching needs, and long-term maintenance when making this decision. Sometimes, a hybrid approach using both GraphQL and REST is the optimal solution."
          }
        }
      ]
    },
    authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
    authorName: "Ravi Sharma",
  }
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
        <p className="latestInsight-header-description">
          Here , we share travel tips , destination guides , and stories that
          inspire your next adventure{" "}
        </p>
      </div>

      {/* Here we add filter buttons */}
      <div className="latestInsight-filter-box">
        <div className="latestInsight-left-filter">
          <button onClick={toggleFilter} className="latestInsight-left-filter-active" ><span>All</span></button>
          <button onClick={toggleFilter} ><span>Destination</span></button>
          <button onClick={toggleFilter} ><span>Culinary</span></button>
          <button onClick={toggleFilter} ><span>Lifestyle</span></button>
          <button onClick={toggleFilter} ><span>Tips & Hacks</span></button>
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
          {tempData.map((blog) => (
             <Card key={blog.id} blogData={blog} />
           ))}
        </div>
    </div>
  );
}
