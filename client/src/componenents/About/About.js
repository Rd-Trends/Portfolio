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
          love building apps that are scalable, cross browser responsive and
          aesthetic. My interest in software development dates back to a very
          long time when I was still a little boy, watching tech related movies
          made me love hacking (yes, I wanna be an ethical hacker). I started
          programming few years back, a conversation with my friend's made me
          realize that I could be a programmer even without going to college. So
          I started out with learning HTML and CSS using Sololearn......and
          since then; it's been an awesome journey.
        </p>
        <p>
          I'm currently a 3rd year student studying mechanical engineering at
          Delta State University. I freelance, I code, and during my free hours
          I write (tech related and non-tech related stuffs), I read (tech
          related books, academic books, religious books, sci-fi and fictional
          novels) and I watch anime too.
        </p>
      </div>
    </FadeIn>
  );
};

export default About;
