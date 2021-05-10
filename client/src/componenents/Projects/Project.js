import { useState, useEffect } from "react";
import Data from "./Data";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { BsCaretRight } from "react-icons/bs";
import Title from "../Title";
import ImageWithOverlay from "../ImageWithOverlay/ImageWithOverlay";
import FadeIn from "../Animation/FadeIn";
import style from "./Project.module.css";

const Project = () => {
  const [data, setData] = useState([]);
  const [showMore, setShowMore] = useState(true);
  let [limit, setLimit] = useState(6);

  const showMoreProjects = () => {
    setLimit(() => (limit += 3));
  };

  useEffect(() => {
    const slicedData = Data.slice(0, limit);
    setData(slicedData);
  }, [limit]);

  useEffect(() => {
    if (data.length === Data.length) setShowMore(false);
  }, [data.length]);

  return (
    <FadeIn duration={0.5} startPosition={50} endPosition={0}>
      <div id="Projects" className={style.container}>
        <Title title="Projects" />
        <div className={style.projects}>
          {data.map((project, index) => {
            const {
              name,
              description,
              image,
              githubLink,
              liveURL,
              builtWith,
            } = project;

            return (
              <FadeIn
                duration={0.5}
                startPosition={50}
                endPosition={0}
                key={index}
              >
                <div className={style.project}>
                  <a href={liveURL}>
                    <ImageWithOverlay image={image} />
                  </a>
                  <div className={style.projectinfo}>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <p className={style.builtwith}>
                      {builtWith.map((tool, index) => {
                        return (
                          <span>
                            <BsCaretRight />
                            {tool}
                          </span>
                        );
                      })}
                    </p>
                    <div className={style.links}>
                      <a href={githubLink}>{<FaGithub />}</a>
                      <a href={liveURL}>{<FaExternalLinkAlt />}</a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
        {showMore && (
          <FadeIn duration={0.5} startPosition={50} endPosition={0}>
            <button onClick={showMoreProjects} className={style.showmorebtn}>
              Show More
            </button>
          </FadeIn>
        )}
      </div>
    </FadeIn>
  );
};

export default Project;
