import SearchInput from "../SearchInput";
import styles from "./SearchSection.module.css";
import { motion } from "framer-motion";

function SearchSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -15, rotate: -20 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.25,
      }}
      className={styles.searchsection}
    >
      <h2 className={styles.heading}>Search</h2>
      <SearchInput />
    </motion.section>
  );
}

export default SearchSection;
