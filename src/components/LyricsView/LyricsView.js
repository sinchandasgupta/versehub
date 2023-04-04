import styles from "./LyricsView.module.css";
import { ChevronLeft } from "react-feather";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

function LyricsView({ styledLyrics }) {
  const router = useRouter();
  return (
    <>
      <button onClick={() => router.back()} className={styles.backButton}>
        <ChevronLeft />
      </button>
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className={styles.viewer}
        dangerouslySetInnerHTML={{ __html: styledLyrics }}
      />
    </>
  );
}

export default LyricsView;
