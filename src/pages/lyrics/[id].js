import LyricsView from "@/components/LyricsView/LyricsView";
import useLyrics from "@/hooks/useLyrics";
import { useRouter } from "next/router";
import { PuffLoader } from "react-spinners";
import styles from "@/components/LyricsView/LyricsView.module.css";
import Head from "next/head";

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
        <Head>
          <title>Loading...</title>
          <meta name="theme-color" content="#09342e" />
        </Head>
        <section className={styles.spinner}>
          <PuffLoader color="#09342e" />
        </section>
      </>
    );

  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      <Head>
        <meta name="theme-color" content="#09342e" />
        <title>Verse-Hub</title>
      </Head>
      <LyricsView styledLyrics={styledLyrics} />
    </>
  );
}
