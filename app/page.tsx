import * as motion from "motion/react-client";

export default function Page() {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {" "}
        안녕! 나야
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        test중
      </motion.p>
    </div>
  );
}
