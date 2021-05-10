import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeIn = ({ children, startPosition, endPosition, duration, delay }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration, delay, ease: "linear" }}
      variants={{
        visible: { y: endPosition, opacity: 1 },
        hidden: { y: startPosition, opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
