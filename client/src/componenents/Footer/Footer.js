import {
  AiOutlineWhatsApp,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { RiGithubFill } from "react-icons/ri";
import FadeIn from "../Animation/FadeIn";
import style from "./Footer.module.css";

const Footer = () => {
  const date = new Date().getUTCFullYear();
  return (
    <div className={style.footer}>
      <div className={style.social_links}>
        <FadeIn duration={0.3} startPosition={50} endPosition={0} delay={0.9}>
          <a
            className={style.linkstyle}
            href="https://github.com/Rd-Trends"
            aria-label="github link"
          >
            <RiGithubFill />
          </a>
        </FadeIn>
        <FadeIn duration={0.3} startPosition={50} endPosition={0} delay={1.2}>
          <a
            className={style.linkstyle}
            href="https://www.linkedin.com/in/ikoyo-daniel-0334981a6"
            aria-label="linkedin link"
          >
            <AiOutlineLinkedin />
          </a>
        </FadeIn>
        <FadeIn duration={0.3} startPosition={50} endPosition={0} delay={1.5}>
          <a
            className={style.linkstyle}
            href="https://twitter.com/Rd_Trendz"
            aria-label="twitter link"
          >
            <AiOutlineTwitter />
          </a>
        </FadeIn>
        <FadeIn duration={0.3} startPosition={50} endPosition={0} delay={1.8}>
          <a
            className={style.linkstyle}
            href="https://www.facebook.com/danni.rowland.0419"
            aria-label="facebook link"
          >
            <AiOutlineFacebook />
          </a>
        </FadeIn>
        <FadeIn duration={0.3} startPosition={50} endPosition={0} delay={2.1}>
          <a
            className={style.linkstyle}
            href="https://instagram.com/ikoyo_daniel_omovigho"
            aria-label="instagram link"
          >
            <AiOutlineInstagram />
          </a>
        </FadeIn>
        <FadeIn duration={0.3} startPosition={50} endPosition={0} delay={2.4}>
          <a
            className={style.linkstyle}
            href="https://wa.me/2348161827754"
            aria-label="whatsapp link"
          >
            <AiOutlineWhatsApp />
          </a>
        </FadeIn>
      </div>
      <FadeIn duration={0.3} startPosition={50} endPosition={0}>
        <div className={style.copyright}>
          <p>&copy; {date} Ikoyo Daniel Omovigho</p>
        </div>
      </FadeIn>
    </div>
  );
};

export default Footer;
