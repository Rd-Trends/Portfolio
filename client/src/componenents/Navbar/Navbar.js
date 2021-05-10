import { RiBarChartHorizontalLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../Logo";
import style from "./Navbar.module.css";

const Navbar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div className={style.navbar}>
      <nav>
        <Logo />
        <div className="main-nav">
          <ul>
            <li>
              <a href="#About" aria-label="about">
                About
              </a>
            </li>
            <li>
              <a href="#Skills" aria-label="skills">
                Skills
              </a>
            </li>
            <li>
              <a href="#Projects" aria-label="projects">
                Projects
              </a>
            </li>
            <li>
              <a href="#Contact" aria-label="contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <button
          aria-label={"Navigation button"}
          onClick={toggleSidebar}
          style={
            isSidebarOpen
              ? { color: "var(--primary-text-color)" }
              : { color: "var(--blue)" }
          }
        >
          {isSidebarOpen ? <AiOutlineClose /> : <RiBarChartHorizontalLine />}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
