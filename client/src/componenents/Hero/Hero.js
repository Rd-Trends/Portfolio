import style from "./Hero.module.css";
import FadeIn from "../Animation/FadeIn";
import SplitText from "./SplitText";

const Hero = () => {
  return (
    <div className={style.hero}>
      <FadeIn duration={0.3} startPosition={50} endPosition={0}>
        <h1 className={style.name}>
          <span> Heyo👋,</span> <br /> <SplitText>I'm Ikoyo Daniel.</SplitText>
        </h1>
      </FadeIn>
      <FadeIn duration={0.3} startPosition={50} endPosition={0} delay={0.3}>
        <h1 className={style.caption}>I build for the future!</h1>
      </FadeIn>
      <FadeIn duration={0.3} startPosition={50} endPosition={0} delay={0.6}>
        <p>
          I am a fullstack developer, I build responsive, SEO-friendly and scalable web apps with
          great user experience.
        </p>
      </FadeIn>
      <FadeIn duration={0.3} startPosition={50} endPosition={0} delay={0.9}>
        <a href="mailto:dannirolands@gmail.com">Get In Touch</a>
      </FadeIn>
    </div>
  );
};

export default Hero;
