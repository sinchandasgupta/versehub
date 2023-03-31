import Lyrics from "../Lyrics/Lyrics";
import styles from "./ResultSection.module.css";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.095,
    },
  },
};

const item = {
  hidden: { y: 15, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function ResultSection({ songList }) {
  return (
    <>
      <section className={styles.resultSection}>
        <h2 className={styles.heading}>Results:</h2>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className={styles.results}
        >
          {songList?.map(({ result }) => (
            <motion.div variants={item} key={result.id}>
              <Lyrics result={result} item={item} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}

export default ResultSection;
