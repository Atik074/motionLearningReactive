import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const Count = () => {
  const count = useMotionValue(0);
  const roundedValue = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 235, { duration: 1 });
    return animation.stop;
  }, []);

  return (
    <span>
      <motion.div className="mt-4 bg-red-700 text-white font-semibold  text-3xl px-4 py-6">
       {roundedValue}
      </motion.div>
       
    </span>
  );
};

export default Count;
