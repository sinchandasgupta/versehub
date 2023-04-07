import useSongList from "@/hooks/useSongList";
import { useRouter } from "next/router";
import { MoonLoader } from "react-spinners";
import SearchSection from "@/components/SearchSection";
import Head from "next/head";
import ResultSection from "@/components/ResultSection";
import styles from "@/styles/Home.module.css";

function SearchResults() {
  const router = useRouter();
  const { songName } = router.query;
  const { songList, error, isLoading } = useSongList(songName);

  if (isLoading)
    return (
      <>
        <Head>
          <meta name="theme-color" content="#09342e" />
        </Head>
        <SearchSection />
        <section className={styles.section}>
          <MoonLoader color="#09342e" size={40} />
        </section>
      </>
    );

  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      <Head>
        <title>Results: {songName}</title>
        <meta name="theme-color" content="#09342e" />
      </Head>
      <SearchSection />
      <ResultSection songList={songList} />
    </>
  );
}

export default SearchResults;
