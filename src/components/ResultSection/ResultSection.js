import Lyrics from "../Lyrics/Lyrics";
import styles from "./ResultSection.module.css";

function ResultSection({ songList }) {
  return (
    <>
      <section className={styles.resultSection}>
        <h2>Search Results:</h2>
        <div className={styles.results}>
          {songList?.map(({ result }) => (
            <Lyrics key={result.id} result={result} />
          ))}
        </div>
      </section>
    </>
  );
}

export default ResultSection;
