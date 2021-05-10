import { motion } from "framer-motion";

const SplitText = ({ children }) => {
  return (
    <div>
      {children.split("").map((text, index) => {
        return (
          <motion.h1 whileHover={{ color: "var(--blue)"}} key={index}>
            {text}
          </motion.h1>
        );
      })}
    </div>
  );
};

export default SplitText;
