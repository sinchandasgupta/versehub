import LyricsView from "@/components/LyricsView/LyricsView";
import useLyrics from "@/hooks/useLyrics";
import { useRouter } from "next/router";
import { PuffLoader } from "react-spinners";
import styles from "@/components/LyricsView/LyricsView.module.css";

export default function LyricsPage() {
  const router = useRouter();
  const { id } = router.query;
  const { lyrics, error, isLoading } = useLyrics(id);
  const html = lyrics?.html;
  // Strip the already existing  <a></a>
  // in the html
  const strippedLyrics = html?.replace(/<a\s+href=[^>]*>|<\/a>/gi, "");
  // Add <span></span> tags to the lyrics
  const styledLyrics = strippedLyrics?.replace(
    /\[([^\]]+)\]/g,
    "<span>$&</span>"
  );

  if (isLoading)
    return (
      <>
        <section className={styles.spinner}>
          <PuffLoader />
        </section>
      </>
    );

  if (error) return <div>Something went wrong...</div>;

  return <LyricsView styledLyrics={styledLyrics} />;
}
