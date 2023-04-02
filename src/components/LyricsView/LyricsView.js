import styles from "./LyricsView.module.css";

function LyricsView({ strippedLyrics }) {
  return (
    <section
      className={styles.viewer}
      dangerouslySetInnerHTML={{ __html: strippedLyrics }}
    />
  );
}

export default LyricsView;
