import React from "react";
import { useEffect, useState } from "react";
import { useLocation  } from 'react-router-dom';
import "./Navbar.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import LanguageIcon from '@mui/icons-material/Language';
import { Dropdown } from 'primereact/dropdown';
import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../context/Authcontext";


import UserProfileDropdown from "../userProfileDropdown";
import { FiPlus } from "react-icons/fi";

// Mobile Layout Component
import { Sidebar } from 'primereact/sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const changeBlogImageUrl = [
    "https://media.istockphoto.com/id/1028211810/photo/social-network-media-concept.jpg?s=612x612&w=0&k=20&c=vi-fTqKlGA1XN2qKshJQg-9ZOTCcmRrZwVdsMZUe5Gc=",
    "https://media.istockphoto.com/id/1210902040/photo/social-networking-service-concept-communication-network.jpg?s=612x612&w=0&k=20&c=VxhpkUoV4NDKZIZYhvd6M6Zy__y50z-aepqAh5Aual8=",
    "https://media.istockphoto.com/id/2163027477/photo/social-media-social-media-marketing-thailand-social-media-engagement-post-structure-social.jpg?s=612x612&w=0&k=20&c=S4akFeiKdq3z863Ml6phW3T0MC7ndZ00hgXRykmvLKM="
]

const exploreImageUrl = [
    "https://media.istockphoto.com/id/1390011228/photo/business-hand-touch-search-social-networks-smart-communication-technology-and-business.jpg?s=612x612&w=0&k=20&c=w4w2wQfBgmdm6JQJO6EfSfzLgwDVYz0UmtgzRzZeCKs=",
    "https://media.istockphoto.com/id/1269902904/photo/asian-woman-exploring-virtual-reality-reaching-for-scattered-particles.jpg?s=612x612&w=0&k=20&c=hA-VY_W8vgxkgoe5vAgtwKrf5IrLU-pgc5uTTx3dTMo=",
    "https://media.istockphoto.com/id/1477183258/photo/woman-holding-ai-icons-with-laptop.jpg?s=2048x2048&w=is&k=20&c=MA1k1nBkIMKaZpeFk0dA1c4CqUNuEM9HySINPgkC0TE="
]

const travelImageUrl = [
    "https://media.istockphoto.com/id/1416018492/photo/teenager-indian-girl-hiking-on-mountain-with-backpack-in-manali-himachal-pradesh-india-female.jpg?s=612x612&w=0&k=20&c=swephOf1AFzLbd6Ycn43KMicLCvjy-HysY7PQSMsU0Q=",
    "https://media.istockphoto.com/id/1483523217/photo/a-woman-in-white-dress-walks-down-a-pier-over-turquoise-ocean-in-the-maldives-during-sunset.jpg?s=612x612&w=0&k=20&c=cT95MZafAv2BPTsyztSreQjzbHjv2pBspxL6BMMogK8=",
    "https://media.istockphoto.com/id/2162672253/photo/woman-using-smartphone-boarding-the-train.jpg?s=612x612&w=0&k=20&c=G_9H5FjFDgKD2aSplJ7WgwYd6_otpR5farLQkSWZqNc=",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
]

function Navbar() {
    const location= useLocation();
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1100);
    const [visible, setVisible] = useState(false);
    const [selectedCity, setSelectedCity] = useState(null);

    const [isCreateBlogRoute , setisCreateBlogRoute] = useState(false);

    useEffect(()=>{
        // Check if the current route is '/create-blog' || blog-details
        if (location.pathname === '/create-blog') {
            setisCreateBlogRoute(true);
        } else if(location.pathname.startsWith('/blog-details')){
          setisCreateBlogRoute(true);  
        }
        else {
            setisCreateBlogRoute(false);
        }
    }, [location.pathname]);


    const {user , logout} = useContext(AuthContext);


    const cities = [
        { name: 'English', code: 'En' },
        { name: 'Hindi', code: 'Hi' },
        { name: 'Spanish', code: 'Es' },
        { name: 'French', code: 'Fr' }
    ];

    // to manage desktop and mobile view
    const updateMedia = () => {
      setIsDesktop(window.innerWidth > 1100);
    }

    // to manage resize window
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    }, []);


   //  to manage navbar colors 
    useEffect(() => {
        const navbar = document.querySelector('.Navbar');
        let links = document.querySelectorAll(".nav-links-sl");
        let logo = document.querySelector(".logo");
        if (!navbar || links.length === 0 || !logo) return; // Ensure the element exists

        if(isCreateBlogRoute){
          if(window.pageYOffset <= 40){
            // On create-blog route with scroll < 40: black text
            links.forEach(link => {
                link.classList.add('nav-createBlogRoute-black');
                link.classList.remove('nav-createBlogRoute-white');
            });
            logo.classList.add('nav-createBlogRoute-black');
            logo.classList.remove('nav-createBlogRoute-white');
          }else{
            // On create-blog route with scroll > 40: white text + dark bg
            navbar.classList.add('nav-scroll');
            links.forEach(link => {
                link.classList.remove('nav-createBlogRoute-black');
                link.classList.add('nav-createBlogRoute-white');
            });
            logo.classList.remove('nav-createBlogRoute-black');
            logo.classList.add('nav-createBlogRoute-white');
          }
          navbar.classList.remove("nav-scroll");
        }else{
            // Not on create blog route: default white state
            navbar.classList.remove('nav-scroll');
           links.forEach(link => {
              link.classList.remove('nav-createBlogRoute-black');
              link.classList.add('nav-createBlogRoute-white');
           });
           logo.classList.remove('nav-createBlogRoute-black');
           logo.classList.add('nav-createBlogRoute-white');
        }


        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);

            if (position > 40) {
                navbar.classList.add('nav-scroll'); 

                links.forEach(link => {
                  link.classList.remove('nav-createBlogRoute-black');
                  link.classList.add('nav-createBlogRoute-white');
                });
                // also change logo color to white when scroll position is greater then 40
               logo.classList.remove('nav-createBlogRoute-black');
               logo.classList.add('nav-createBlogRoute-white');
            } else {
                navbar.classList.remove('nav-scroll');
                if(isCreateBlogRoute){
                  // means here links are not visiable to user se we changes the navbar links color                
                  links.forEach(link => {
                      link.classList.add('nav-createBlogRoute-black');
                      link.classList.remove('nav-createBlogRoute-white');
                  });
                  // also change logo color to black when scroll position is less then 40
                  logo.classList.add('nav-createBlogRoute-black');
                  logo.classList.remove('nav-createBlogRoute-white');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if(navbar){
              navbar.classList.remove('nav-scroll','nav-createBlogRoute-black','nav-createBlogRoute-white')
            }
        };
    }, [isCreateBlogRoute])


  // to manage blog image carousel
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            const blogImage = document.querySelector(".nav-blog-image");
            if (!blogImage) return; // Ensure the element exists
            blogImage.src = changeBlogImageUrl[index];
            index = (index + 1) % changeBlogImageUrl.length;
        }, 2000)
        return () => clearInterval(interval)
    }, []);
   // to manage blog image carousel 
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            const topicImage = document.querySelector(".nav-topic-image");
            if (!topicImage) return; // Ensure the element exists
            topicImage.src = travelImageUrl[index];
            index = (index + 1) % travelImageUrl.length;
        }, 2000);
        return () => clearInterval(interval);
    }, []);
   // to manage blog image carousel
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            const exploreImage = document.querySelector(".nav-explore-image");
            if (!exploreImage) return; 
            exploreImage.src = exploreImageUrl[index];
            index = (index + 1) % exploreImageUrl.length;
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    let dropdownTimeout;
  

  // to manage dropdowns
    const closeAllDropdowns = () => {
        document.querySelectorAll(".dropdown-h-box").forEach(box => {
            box.classList.remove("nav-dropdown-active");
        });
        document.querySelectorAll(".nav-dropdown-icon").forEach(icon => {
            icon.classList.remove("nav-dropdown-icon-active");
        });
    };
  // to manage dropdowns
    const handleOpenDropdown = (event) => {
        clearTimeout(dropdownTimeout);
        closeAllDropdowns(); //  this will close other open dropdowns

        const dropdownBox = event.currentTarget.querySelector(".dropdown-h-box");
        const dropdownIcon = event.currentTarget.querySelector(".nav-dropdown-icon");
        if (dropdownBox) {
            dropdownBox.classList.add("nav-dropdown-active");
            dropdownIcon.classList.add("nav-dropdown-icon-active");
        }
    };


    // to manage dropdowns
    const handleLeaveMouse = (event) => {
        const dropdownBox = event.currentTarget.querySelector(".dropdown-h-box");
        const dropdownIcon = event.currentTarget.querySelector(".nav-dropdown-icon");
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        dropdownTimeout = setTimeout(() => {
            const rect = dropdownBox.getBoundingClientRect();
            // If mouse is outside the dropdown box area, close it
            const buffer = 50;
            if (
                mouseX < rect.left - buffer ||
                mouseX > rect.right + buffer ||
                mouseY < rect.top - buffer ||
                mouseY > rect.bottom + buffer
            ) {
                dropdownBox.classList.remove("nav-dropdown-active");
                dropdownIcon.classList.remove("nav-dropdown-icon-active");
            }
        }, 100);
    };


    // to manage dropdowns
    const handleDropdownMouseEnter = () => {
        clearTimeout(dropdownTimeout);
    };

    // to manage dropdowns
    const handleDropdownMouseLeave = (event) => {
        const dropdownBox = event.currentTarget;
        const parentLi = dropdownBox.closest("li");
        const dropdownIcon = parentLi.querySelector(".nav-dropdown-icon");

        dropdownTimeout = setTimeout(() => {
            dropdownBox.classList.remove("nav-dropdown-active");
            dropdownIcon.classList.remove("nav-dropdown-icon-active");
        }, 100);
    };
   
    return (
      <div className="Navbar">
        <div className="logo">
          {/* Here we adding a link to home page */}
          <Link to="/">
            <h3>Writora</h3>
          </Link>
        </div>
        {isDesktop ? (
          <div className="nav-desktop">
            <div className="nav-mid-item">
              <ul>

                <li
                  onMouseEnter={handleOpenDropdown}
                  onMouseLeave={handleLeaveMouse}
                  className="topic nav-links-sl"
                >
                  Topics <KeyboardArrowDownIcon className="nav-dropdown-icon" />
                  <div
                    className="dropdown-h-box"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <div className="nav-tech-box nav-dropdown-content">
                      <p>Technology</p>
                      <ul>
                        {/* here we only include tech related links */}
                        <li>
                          Artificial Inteligence{" "}
                          <i>
                            <ArrowForwardIcon  />
                          </i>{" "}
                        </li>
                        <li>
                          Cloud Computing{" "}
                          <i>
                            <ArrowForwardIcon />
                          </i>{" "}
                        </li>
                        <li>
                          Tech in Daily Life{" "}
                          <i>
                            <ArrowForwardIcon />
                          </i>
                        </li>
                        <li>
                          Internet of Things{" "}
                          <i>
                            <ArrowForwardIcon />
                          </i>
                        </li>
                        <li>
                          Digital Safety{" "}
                          <i>
                            <ArrowForwardIcon />
                          </i>
                        </li>
                      </ul>
                    </div>
                    <div className="nav-health nav-dropdown-content">
                      <p>Health</p>
                      {/* here we only include tech related links */}
                      <ul>
                        <li>
                          Health & Fitness Tips{" "}
                          <i>
                            <ArrowForwardIcon />
                          </i>
                        </li>
                        <li>
                          Nutrition & Diet Plans{" "}
                          <i>
                            <ArrowForwardIcon />
                          </i>
                        </li>
                        <li>
                          Fitness Gadgets{" "}
                          <i>
                            <ArrowForwardIcon />
                          </i>
                        </li>
                        <li>
                          Wellness{" "}
                          <i>
                            <ArrowForwardIcon />
                          </i>
                        </li>
                        <li>
                          Medical Research{" "}
                          <i>
                            <ArrowForwardIcon />
                          </i>
                        </li>
                        <li>
                          Healthcare Technology{" "}
                          <i>
                            <ArrowForwardIcon />
                          </i>
                        </li>
                        <li>
                          Public Health{" "}
                          <i>
                            <ArrowForwardIcon />
                          </i>
                        </li>
                        <li>
                          Healthy Tech Habits{" "}
                          <i>
                            <ArrowForwardIcon />
                          </i>
                        </li>
                      </ul>
                    </div>
                    <div className="nav-travel nav-dropdown-content">
                      <p>Travel</p>
                      {/* here we only include Travel related links */}
                      <ul>
                        <li>
                          Travel Destinations{" "}
                          <i>
                            <ArrowForwardIcon />
                          </i>
                        </li>
                        <li>
                          Travel Tips{" "}
                          <i>
                            <ArrowForwardIcon />
                          </i>
                        </li>
                        <li>
                          Adventure Travel{" "}
                          <i>
                            <ArrowForwardIcon />
                          </i>
                        </li>
                        <li>
                          Cultural Experiences{" "}
                          <i>
                            <ArrowForwardIcon />
                          </i>
                        </li>
                        <li>
                          Travel Photography{" "}
                          <i>
                            <ArrowForwardIcon />
                          </i>
                        </li>
                        <li>
                          Travel Guides{" "}
                          <i>
                            <ArrowForwardIcon />
                          </i>
                        </li>
                        <li>
                          Travel Stories{" "}
                          <i>
                            <ArrowForwardIcon />
                          </i>
                        </li>
                        <li>
                          Travel Gear Reviews{" "}
                          <i>
                            <ArrowForwardIcon />
                          </i>
                        </li>
                      </ul>
                    </div>
                    <div className="nav-topic-drop-image nav-dropdown-content">
                      <p>Explore hidden gems across the globe</p>
                      <div className="temp-nav-testing">
                        <Card sx={{ maxWidth: 345 }}>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              image="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
                              alt="Travel Image"
                              className="nav-topic-image maintain-H-common-cls-For-Ncard"
                            />
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                              >
                                Travel
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                Explore the world with our travel guides and
                                tips.
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </div>
                    </div>
                  </div>
                </li>

                <li
                  onMouseEnter={handleOpenDropdown}
                  onMouseLeave={handleLeaveMouse}
                  className="Explore nav-links-sl"
                >
                  Explore{" "}
                  <KeyboardArrowDownIcon className="nav-dropdown-icon" />
                  <div
                    className="dropdown-h-box"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <div className="nav-tech-box nav-dropdown-content">
                      <p>Trending Topics & Ideas</p>
                      <ul>
                        {/* here we only include tech related links */}
                        <li>
                          Trending Now{" "}
                          <i>
                            <ArrowForwardIcon />
                          </i>{" "}
                        </li>
                        <li>
                          {" "}
                          Editor’s Pick{" "}
                          <i>
                            <ArrowForwardIcon />
                          </i>
                        </li>
                        <li>
                          Travel in Budget{" "}
                          <i>
                            <ArrowForwardIcon />
                          </i>
                        </li>
                        <li>
                          Health Challenge{" "}
                          <i>
                            <ArrowForwardIcon />
                          </i>
                        </li>
                        <li>
                          Tech Simplified{" "}
                          <i>
                            <ArrowForwardIcon />
                          </i>
                        </li>
                        <li>
                          Lifestyle Goals{" "}
                          <i>
                            <ArrowForwardIcon />
                          </i>
                        </li>
                      </ul>
                    </div>
                    <div className="nav-topic-drop-image nav-dropdown-content">
                      <p>Discover trends.</p>
                      <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="140"
                            image="https://media.istockphoto.com/id/1477183258/photo/woman-holding-ai-icons-with-laptop.jpg?s=2048x2048&w=is&k=20&c=MA1k1nBkIMKaZpeFk0dA1c4CqUNuEM9HySINPgkC0TE="
                            alt="Travel Image"
                            className="nav-explore-image maintain-H-common-cls-For-Ncard"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              Pick your vibe
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Start exploring — life’s more fun off-script.
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </div>
                  </div>
                </li>

                <li
                  onMouseEnter={handleOpenDropdown}
                  onMouseLeave={handleLeaveMouse}
                  className="Blog nav-links-sl"
                >
                  Blogs <KeyboardArrowDownIcon className="nav-dropdown-icon" />
                  <div
                    className="dropdown-h-box"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <div className="nav-tech-box nav-dropdown-content">
                      <p>Read From the Blog</p>
                      <ul>
                        {/* here we only include tech related links */}
                        <li>
                          {" "}
                          Most Viewed Articles{" "}
                          <i>
                            <ArrowForwardIcon />
                          </i>{" "}
                        </li>
                        <li>
                          Trending This Week{" "}
                          <i>
                            <ArrowForwardIcon />
                          </i>{" "}
                        </li>
                        <li>
                          Latest in Travel{" "}
                          <i>
                            <ArrowForwardIcon />
                          </i>{" "}
                        </li>
                        <li>
                          Wellness Reads{" "}
                          <i>
                            <ArrowForwardIcon />
                          </i>{" "}
                        </li>
                        <li>
                          Visual Stories{" "}
                          <i>
                            <ArrowForwardIcon />
                          </i>{" "}
                        </li>
                        <li>
                          Motherhood & Life{" "}
                          <i>
                            <ArrowForwardIcon />
                          </i>{" "}
                        </li>
                      </ul>
                    </div>
                    <div className="nav-topic-drop-image nav-dropdown-content">
                      <p>Most loved.</p>
                      <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="140"
                            image="https://media.istockphoto.com/id/1402137439/photo/the-concept-of-social-networks-of-likes-and-subscriptions-over-a-smartphone-in-the-hands-of-a.jpg?s=612x612&w=0&k=20&c=o63M9XGDrSUAtrgd73_R5W69G50U9UAm_w2B410JWYw="
                            alt="Travel Image"
                            className="nav-blog-image maintain-H-common-cls-For-Ncard"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              Real stories
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Moments, musings, and everything in between.
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </div>
                  </div>
                </li>

              </ul>
            </div>
            <div className="nav-right-item">
              <div className="nav-lngSelector">
                <LanguageIcon className="nav-lngSelector-icon" />
                <Dropdown
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.value)}
                  options={cities}
                  optionLabel="name"
                  placeholder="En"
                  className="w-full md:w-14rem navCustomDropdownLanguageSelector"
                />
              </div>
              <div className="nav-login-logout-manage-box">
                {user ? (
                  <>
                  <div className="nav-user-profile-or-post-box">
                    <div className="nav-create-post-box">
                      <Link to="/create-blog">
                      <button className="nav-create-post-btn">
                        <FiPlus className="nav-create-post-icon" />
                        <span>Create</span>
                      </button>
                      </Link>
                    </div>
                  
                    <div className="nav-user-profile-box">
                      <UserProfileDropdown user ={user} onLogout = {logout} /> 
                    </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="nav-login-signup-box">
                      <div className="nav-login">
                        <Link to="/login">
                          <span className="nav-login-text">Log in</span>
                        </Link>
                      </div>
                      <div className="nav-getStarted">
                        <Link to="/signin">
                          <span className="nav-signin-text">Sign in</span>
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="nav-mobile ">
            <Sidebar
              showCloseIcon={false}
              visible={visible}
              onHide={() => setVisible(false)}
              icons={() => (
                <Button
                  className="nav-menu-sidebar-close"
                  onClick={() => setVisible(false)}
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    position: "absolute",
                    top: "0.6rem",
                    right: "1rem",
                  }}
                >
                  {" "}
                  <CloseIcon
                    style={{ fontSize: "1.5rem", color: "white" }}
                  />{" "}
                </Button>
              )}
              position="right"
              className="w-full md:w-20rem lg:w-30rem nav-sidebar-mobile"
            >
              <div className="nav-mobile-content-box">
                <div className="nav-mobile-content-main-spc">
                  <Accordion className="nav-mobile-accordion">
                    <AccordionSummary
                      expandIcon={
                        <ExpandMoreIcon className="nav-mobile-accordion-icon" />
                      }
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography
                        className="nav-mobile-accordion-title"
                        component="span"
                      >
                        Topic
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        component="div"
                        className="nav-mobile-accordion-content"
                      >
                        <p>Technology</p>
                        <ul className="nav-mobile-accordian-list">
                          <li className="nav-mobile-accordian-link">
                            Artificial Inteligence{" "}
                            <i>
                              <ArrowForwardIcon className="link-arrow-icon" />
                            </i>{" "}
                          </li>
                          <li className="nav-mobile-accordian-link">
                            Cloud Computing{" "}
                            <i>
                              <ArrowForwardIcon className="link-arrow-icon" />
                            </i>{" "}
                          </li>
                          <li className="nav-mobile-accordian-link">
                            Tech in Daily Life{" "}
                            <i>
                              <ArrowForwardIcon className="link-arrow-icon" />
                            </i>
                          </li>
                          <li className="nav-mobile-accordian-link">
                            Internet of Things{" "}
                            <i>
                              <ArrowForwardIcon className="link-arrow-icon" />
                            </i>
                          </li>
                          <li className="nav-mobile-accordian-link">
                            Digital Safety{" "}
                            <i>
                              <ArrowForwardIcon className="link-arrow-icon" />
                            </i>
                          </li>
                        </ul>
                      </Typography>

                      <Typography
                        component="div"
                        className="nav-mobile-accordion-content"
                      >
                        <p>Health</p>
                        <ul className="nav-mobile-accordian-list">
                          <li className="nav-mobile-accordian-link">
                            Health & Fitness Tips{" "}
                            <i>
                              <ArrowForwardIcon className="link-arrow-icon" />
                            </i>{" "}
                          </li>
                          <li className="nav-mobile-accordian-link">
                            Nutrition & Diet Plans{" "}
                            <i>
                              <ArrowForwardIcon className="link-arrow-icon" />
                            </i>{" "}
                          </li>
                          <li className="nav-mobile-accordian-link">
                            Fitness Gadgets
                            <i>
                              <ArrowForwardIcon className="link-arrow-icon" />
                            </i>
                          </li>
                          <li className="nav-mobile-accordian-link">
                            Wellness{" "}
                            <i>
                              <ArrowForwardIcon className="link-arrow-icon" />
                            </i>
                          </li>
                          <li className="nav-mobile-accordian-link">
                            Medical Research{" "}
                            <i>
                              <ArrowForwardIcon className="link-arrow-icon" />
                            </i>
                          </li>
                          <li className="nav-mobile-accordian-link">
                            Healthcare Technology{" "}
                            <i>
                              <ArrowForwardIcon className="link-arrow-icon" />
                            </i>
                          </li>
                          <li className="nav-mobile-accordian-link">
                            Public Health{" "}
                            <i>
                              <ArrowForwardIcon className="link-arrow-icon" />
                            </i>
                          </li>
                          <li className="nav-mobile-accordian-link">
                            Healthy Tech Habits{" "}
                            <i>
                              <ArrowForwardIcon className="link-arrow-icon" />
                            </i>
                          </li>
                        </ul>
                      </Typography>

                      <Typography
                        component="div"
                        className="nav-mobile-accordion-content"
                      >
                        <p>Travel</p>
                        <ul className="nav-mobile-accordian-list">
                          <li className="nav-mobile-accordian-link">
                            Travel Destinations{" "}
                            <i>
                              <ArrowForwardIcon className="link-arrow-icon" />
                            </i>{" "}
                          </li>
                          <li className="nav-mobile-accordian-link">
                            Travel Tips{" "}
                            <i>
                              <ArrowForwardIcon className="link-arrow-icon" />
                            </i>{" "}
                          </li>
                          <li className="nav-mobile-accordian-link">
                            Adventure Travel
                            <i>
                              <ArrowForwardIcon className="link-arrow-icon" />
                            </i>
                          </li>
                          <li className="nav-mobile-accordian-link">
                            Cultural Experiences{" "}
                            <i>
                              <ArrowForwardIcon className="link-arrow-icon" />
                            </i>
                          </li>
                          <li className="nav-mobile-accordian-link">
                            Travel Photography{" "}
                            <i>
                              <ArrowForwardIcon className="link-arrow-icon" />
                            </i>
                          </li>
                          <li className="nav-mobile-accordian-link">
                            Travel Guides{" "}
                            <i>
                              <ArrowForwardIcon className="link-arrow-icon" />
                            </i>
                          </li>
                          <li className="nav-mobile-accordian-link">
                            Travel Stories{" "}
                            <i>
                              <ArrowForwardIcon className="link-arrow-icon" />
                            </i>
                          </li>
                          <li className="nav-mobile-accordian-link">
                            Travel Gear Reviews{" "}
                            <i>
                              <ArrowForwardIcon className="link-arrow-icon" />
                            </i>
                          </li>
                        </ul>
                      </Typography>

                      <Typography
                        component="div"
                        className="nav-mobile-accordion-imagebox"
                      >
                        <p>Explore hidden gems across the globe</p>
                        <Card sx={{ maxWidth: 345 }}>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="140"
                              image="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
                              alt="Travel Image"
                              className="nav-topic-image maintain-H-common-cls-For-Ncard"
                            />
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                              >
                                Travel
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                Explore the world with our travel guides and
                                tips.
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion className="nav-mobile-accordion">
                    <AccordionSummary
                      expandIcon={
                        <ExpandMoreIcon className="nav-mobile-accordion-icon" />
                      }
                      aria-controls="panel2-content"
                      id="panel2-header"
                    >
                      <Typography
                        className="nav-mobile-accordion-title"
                        component="span"
                      >
                        Explore
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        component="div"
                        className="nav-mobile-accordion-content"
                      >
                        <p>Trending Topics & Ideas</p>
                        <ul className="nav-mobile-accordian-list">
                          <li className="nav-mobile-accordian-link">
                            Trending Now{" "}
                            <i>
                              <ArrowForwardIcon className="link-arrow-icon" />
                            </i>{" "}
                          </li>
                          <li className="nav-mobile-accordian-link">
                            Editor’s Pick{" "}
                            <i>
                              <ArrowForwardIcon className="link-arrow-icon" />
                            </i>{" "}
                          </li>
                          <li className="nav-mobile-accordian-link">
                            Travel in Budget
                            <i>
                              <ArrowForwardIcon className="link-arrow-icon" />
                            </i>
                          </li>
                          <li className="nav-mobile-accordian-link">
                            Health Challenge{" "}
                            <i>
                              <ArrowForwardIcon className="link-arrow-icon" />
                            </i>
                          </li>
                          <li className="nav-mobile-accordian-link">
                            Tech Simplified{" "}
                            <i>
                              <ArrowForwardIcon className="link-arrow-icon" />
                            </i>
                          </li>
                          <li className="nav-mobile-accordian-link">
                            Lifestyle Goals{" "}
                            <i>
                              <ArrowForwardIcon className="link-arrow-icon" />
                            </i>
                          </li>
                        </ul>
                      </Typography>
                      <Typography
                        component="div"
                        className="nav-mobile-accordion-imagebox"
                      >
                        <p>Discover trends.</p>
                        <Card sx={{ maxWidth: 345 }}>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="140"
                              image="https://media.istockphoto.com/id/1477183258/photo/woman-holding-ai-icons-with-laptop.jpg?s=2048x2048&w=is&k=20&c=MA1k1nBkIMKaZpeFk0dA1c4CqUNuEM9HySINPgkC0TE="
                              alt="Travel Image"
                              className="nav-explore-image maintain-H-common-cls-For-Ncard"
                            />
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                              >
                                Pick your vibe
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                Start exploring — life’s more fun off-script.
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion className="nav-mobile-accordion">
                    <AccordionSummary
                      expandIcon={
                        <ExpandMoreIcon className="nav-mobile-accordion-icon" />
                      }
                      aria-controls="panel2-content"
                      id="panel2-header"
                    >
                      <Typography
                        className="nav-mobile-accordion-title"
                        component="span"
                      >
                        Blog
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        component="div"
                        className="nav-mobile-accordion-content"
                      >
                        <p>Read From the Blog</p>
                        <ul className="nav-mobile-accordian-list">
                          <li className="nav-mobile-accordian-link">
                            {" "}
                            Most Viewed Articles{" "}
                            <i>
                              <ArrowForwardIcon className="link-arrow-icon" />
                            </i>{" "}
                          </li>
                          <li className="nav-mobile-accordian-link">
                            Trending This Week{" "}
                            <i>
                              <ArrowForwardIcon className="link-arrow-icon" />
                            </i>{" "}
                          </li>
                          <li className="nav-mobile-accordian-link">
                            Latest in Travel
                            <i>
                              <ArrowForwardIcon className="link-arrow-icon" />
                            </i>
                          </li>
                          <li className="nav-mobile-accordian-link">
                            Wellness Reads{" "}
                            <i>
                              <ArrowForwardIcon className="link-arrow-icon" />
                            </i>
                          </li>
                          <li className="nav-mobile-accordian-link">
                            Visual Stories{" "}
                            <i>
                              <ArrowForwardIcon className="link-arrow-icon" />
                            </i>
                          </li>
                          <li className="nav-mobile-accordian-link">
                            Motherhood & Life{" "}
                            <i>
                              <ArrowForwardIcon className="link-arrow-icon" />
                            </i>
                          </li>
                        </ul>
                      </Typography>

                      <Typography
                        component="div"
                        className="nav-mobile-accordion-imagebox"
                      >
                        <p>Most loved.</p>
                        <Card sx={{ maxWidth: 345 }}>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="140"
                              image="https://media.istockphoto.com/id/1402137439/photo/the-concept-of-social-networks-of-likes-and-subscriptions-over-a-smartphone-in-the-hands-of-a.jpg?s=612x612&w=0&k=20&c=o63M9XGDrSUAtrgd73_R5W69G50U9UAm_w2B410JWYw="
                              alt="Travel Image"
                              className="nav-blog-image maintain-H-common-cls-For-Ncard"
                            />
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                              >
                                Real stories
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                Moments, musings, and everything in between.
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div className="nav-mobile-getStarted">
                  <span>Sign in</span>
                </div>
              </div>
            </Sidebar>
            <MenuIcon
              className="nav-menu-icon"
              icon="pi pi-arrow-right"
              onClick={() => setVisible(true)}
            />
          </div>
        )}
      </div>
    );
}

export default Navbar