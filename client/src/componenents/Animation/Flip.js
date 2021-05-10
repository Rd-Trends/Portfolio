import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeIn = ({ children, duration }) => {
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
      transition={{ duration, ease: "linear" }}
      variants={{
        visible: { rotateZ: "0deg" },
        hidden: { rotateZ: "20deg" },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
