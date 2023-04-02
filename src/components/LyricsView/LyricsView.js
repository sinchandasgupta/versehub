import styles from "./LyricsView.module.css";
import { ChevronLeft } from "react-feather";
import { useRouter } from "next/router";

function LyricsView({ styledLyrics }) {
  const router = useRouter();
  return (
    <>
      <button onClick={() => router.back()} className={styles.backButton}>
        <ChevronLeft />
      </button>
      <section
        className={styles.viewer}
        dangerouslySetInnerHTML={{ __html: styledLyrics }}
      />
    </>
  );
}

export default LyricsView;
