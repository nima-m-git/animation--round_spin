import { Frame } from "framer";

const Square = ({
  coords: [x, y],
  settings: { backgroundColors, degs, duration, size },
}) => {
  return (
    <Frame
      animate={{
        background: backgroundColors,
        rotate: degs,
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
      size={size}
      center
      radius={"50%"}
    />
  );
};

export default Square;
