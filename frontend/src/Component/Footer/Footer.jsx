import "./Footer.css"
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
function Footer(){
    return (
      <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Writora</h2>
          <div className="social-icons">
            <span><XIcon /></span>
            <span>🖇️</span>
            <span><LinkedInIcon /></span>
          </div>
        </div>

        <div className="footer-columns">
          <div className="footer-col">
            <h4>FOR PROTOCOLS</h4>
            <ul>
              <li><a href="#">Platform <ArrowForwardIcon className="footer-link-arrow-icon" />  </a></li>
              <li><a href="#">IDG Playbook <ArrowForwardIcon className="footer-link-arrow-icon" /> </a></li>
              <li><a href="#">Case Studies <ArrowForwardIcon className="footer-link-arrow-icon" /> </a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>FOR ANALYSTS</h4>
            <ul>
              <li><a href="#">Get Started <ArrowForwardIcon className="footer-link-arrow-icon" /> </a></li>
              <li><a href="#">Insights <ArrowForwardIcon className="footer-link-arrow-icon" /> </a></li>
              <li><a href="#">Studio <ArrowForwardIcon className="footer-link-arrow-icon" /> </a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>FOR EXPLORERS</h4>
            <ul>
              <li><a href="#">Earn rewards <ArrowForwardIcon className="footer-link-arrow-icon" /> </a></li>
              <li><a href="#">Journeys <ArrowForwardIcon className="footer-link-arrow-icon" /> </a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>ABOUT</h4>
            <ul>
              <li><a href="#">Company <ArrowForwardIcon className="footer-link-arrow-icon" /> </a></li>
              <li><a href="#">Resources <ArrowForwardIcon className="footer-link-arrow-icon" /> </a></li>
              <li><a href="#">Documentation <ArrowForwardIcon className="footer-link-arrow-icon" /> </a></li>
              <li><a href="#">Careers <ArrowForwardIcon className="footer-link-arrow-icon" /> </a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Writora Crypto</p>
        <div className="footer-links">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
    )
}

export default Footer

window.addEventListener("resize",()=>{
  console.log(window.innerWidth);
})