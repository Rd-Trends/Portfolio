import style from "./About.module.css";
import FadeIn from "../Animation/FadeIn"
import Title from "../Title";

const About = () => {
  return (
    <FadeIn duration={0.5} startPosition={50} endPosition={0}>
      <div id="About" className={style.about}>
        <Title title={"About"} />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse commodi
          at delectus modi sint. Nihil labore ullam corporis, magni deleniti
          officiis dolore vero tenetur quis minima et reiciendis quam? Vitae
          molestiae, cum eaque nam ducimus reiciendis nostrum magni doloribus
          sapiente!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          doloribus consequatur maiores beatae, ex reiciendis dignissimos
          laboriosam consectetur facilis natus alias a expedita blanditiis
          doloremque ipsum inventore accusantium. Reiciendis soluta aperiam
          consectetur cumque? Cupiditate est porro pariatur neque labore
          dignissimos minima iure, quas, repudiandae possimus fuga asperiores
          laborum, nesciunt perspiciatis.
        </p>
      </div>
    </FadeIn>
  );
};

export default About;
