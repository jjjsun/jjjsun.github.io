import * as motion from "motion/react-client";

import * as styles from "./page.css";

export default function Page() {
  return (
    <>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {" "}
        안녕! 나야
      </motion.h1>

      <motion.p
        className={styles.discription}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        test중
      </motion.p>
    </>
  );
}
