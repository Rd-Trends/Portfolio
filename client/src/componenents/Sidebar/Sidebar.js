import React from "react";
import { RiGithubFill } from "react-icons/ri";
import {
  AiOutlineWhatsApp,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import style from "./Sidebar.module.css";

const Sidebar = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <div className={style.sidebar} id={isSidebarOpen ? "" : style.hidesidebar}>
      <nav>
        <div>
          <ul>
            <li>
              <a href="#About" aria-label="about" onClick={toggleSidebar}>
                About
              </a>
            </li>
            <li>
              <a href="#Skills" aria-label="skills" onClick={toggleSidebar}>
                Skills
              </a>
            </li>
            <li>
              <a href="#Projects" aria-label="projects" onClick={toggleSidebar}>
                Projects
              </a>
            </li>
            <li>
              <a href="#Contact" aria-label="contact" onClick={toggleSidebar}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className={style.social_links}>
          <a href="https://github.com/Rd-Trends" aria-label="github link">
            <RiGithubFill />
          </a>
          <a
            href="https://www.linkedin.com/in/ikoyo-daniel-0334981a6"
            aria-label="linkedin link"
          >
            <AiOutlineLinkedin />
          </a>
          <a href="https://twitter.com/Rd_Trendz" aria-label="twitter link">
            <AiOutlineTwitter />
          </a>
          <a
            href="https://www.facebook.com/danni.rowland.0419"
            aria-label="facebook link"
          >
            <AiOutlineFacebook />
          </a>
          <a
            href="https://instagram.com/ikoyo_daniel_omovigho"
            aria-label="instagram link"
          >
            <AiOutlineInstagram />
          </a>
          <a href="https://wa.me/2348161827754" aria-label="whatsapp link">
            <AiOutlineWhatsApp />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
