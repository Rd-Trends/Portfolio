import { BsCaretRight } from "react-icons/bs";
import Title from "../Title";
import FadeIn from "../Animation/FadeIn";
import style from "./Skill.module.css";

const Skills = () => {
  return (
    <div id="Skills" className={style.container}>
      <FadeIn duration={0.5} startPosition={50} endPosition={0}>
        <Title title="Tools" />
      </FadeIn>
      <div className={style.skills}>
        <FadeIn duration={0.5} startPosition={50} endPosition={0} delay={0.5}>
          <div className={style.skill}>
            <span>{<BsCaretRight />}</span>
            <p>HTML5</p>
          </div>
        </FadeIn>
        <FadeIn duration={0.5} startPosition={50} endPosition={0} delay={0.5}>
          <div className={style.skill}>
            <span>{<BsCaretRight />}</span>
            <p>CSS3</p>
          </div>
        </FadeIn>
        <FadeIn duration={0.5} startPosition={50} endPosition={0} delay={0.5}>
          <div className={style.skill}>
            <span>{<BsCaretRight />}</span>
            <p>JavaScript (ES6+)</p>
          </div>
        </FadeIn>
        <FadeIn duration={0.5} startPosition={50} endPosition={0} delay={0.5}>
          <div className={style.skill}>
            <span>{<BsCaretRight />}</span>
            <p>React.js</p>
          </div>
        </FadeIn>
        <FadeIn duration={0.5} startPosition={50} endPosition={0} delay={0.5}>
          <div className={style.skill}>
            <span>{<BsCaretRight />}</span>
            <p>Next.js</p>
          </div>
        </FadeIn>
        <FadeIn duration={0.5} startPosition={50} endPosition={0} delay={0.5}>
          <div className={style.skill}>
            <span>{<BsCaretRight />}</span>
            <p>Node.js</p>
          </div>
        </FadeIn>
        <FadeIn duration={0.5} startPosition={50} endPosition={0} delay={0.5}>
          <div className={style.skill}>
            <span>{<BsCaretRight />}</span>
            <p>Express.js</p>
          </div>
        </FadeIn>
        <FadeIn duration={0.5} startPosition={50} endPosition={0} delay={0.5}>
          <div className={style.skill}>
            <span>{<BsCaretRight />}</span>
            <p>GraphQL</p>
          </div>
        </FadeIn>
        <FadeIn duration={0.5} startPosition={50} endPosition={0} delay={0.5}>
          <div className={style.skill}>
            <span>{<BsCaretRight />}</span>
            <p>MongoDb</p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Skills;
