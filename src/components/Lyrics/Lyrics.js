import Link from "next/link";
import styles from "./Lyrics.module.css";

function Lyrics({ result }) {
  return (
    <Link href={`/lyrics/${result.id}`} className={styles.result}>
      <img
        width={40}
        height={40}
        src={result.header_image_thumbnail_url}
        className={styles.thumbnail}
        alt={`${result.title} Album art`}
        loading="lazy"
      />
      <div className={styles.stats}>
        <p className={styles.songName}>{result.title}</p>
        <p className={styles.artistName}>{result.primary_artist.name}</p>
      </div>
    </Link>
  );
}

export default Lyrics;
