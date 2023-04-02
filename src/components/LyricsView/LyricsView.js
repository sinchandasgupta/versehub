import styles from "./LyricsView.module.css";
import { ChevronLeft } from "react-feather";
import { useRouter } from "next/router";

function LyricsView({ finalLyrics }) {
  const router = useRouter();
  return (
    <>
      <button onClick={() => router.back()} className={styles.backButton}>
        <ChevronLeft />
      </button>
      <section
        className={styles.viewer}
        dangerouslySetInnerHTML={{ __html: finalLyrics }}
      />
    </>
  );
}

export default LyricsView;
