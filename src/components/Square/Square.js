import { motion } from "framer-motion";
import { useEffect } from "react";

const Square = ({
  coords: [x, y],
  settings: { backgroundColors, duration, size },
}) => {
  return (
    <motion.div
      initial={false}
      animate={{
        background: backgroundColors,
        x: x,
        y: y,
        borderRadius: ["0%", "40%", "50%", "40%", "0%"],
      }}
      transition={{
        duration: duration,
        loop: Infinity,
        repeatType: "mirror",
        ease: "linear",
        type: "spring",
      }}
      center
      radius={"50%"}
      style={{
        width: size,
        height: size,
        left: "50%",
        top: "50%",
        position: "absolute",
      }}
    />
  );
};

export default Square;
