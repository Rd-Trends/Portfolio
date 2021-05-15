import style from "./About.module.css";
import FadeIn from "../Animation/FadeIn";
import Title from "../Title";

const About = () => {
  return (
    <FadeIn duration={0.5} startPosition={50} endPosition={0}>
      <div id="About" className={style.about}>
        <Title title={"About"} />
        <p>
          Heyo, my name is Daniel and I'm fascinated about all things tech. I
          love building apps that are scalable, SEO-friendly, cross browser
          responsive with top notch aesthetics. My interest in software
          development dates back to a very long time when I was still a little
          boy, watching tech related movies. As a result, I grew so much love
          for computer hacking (yes, I wanna be an ethical hacker). I started
          programming few years back. A conversation with my friend made me
          realized that I could be a programmer even without going to college.
          Consequently, I started out with learning HTML and CSS using
          Sololearn......and since then; it's been an awesome journey.
        </p>
        <p>
          I'm currently a 3rd year student studying mechanical engineering at
          Delta State University. I freelance, I code, and during my free hours
          I write (tech related and non-tech related stuffs), I read (tech
          related books, academic books, religious books, sci-fi and fictional
          novels) and I watch anime too.
        </p>
        <p>
          I believe websites that are cross browser responnsive, SEO-friendly,
          with great aesthetics are part of the few things that can give
          businesses their needed high end branding. Which often is a great push
          for their online businesses. and that's the future I am talking about!
          My mission is to help my clients build this future for their online businesses.
        </p>
     
      </div>
    </FadeIn>
  );
};

export default About;
