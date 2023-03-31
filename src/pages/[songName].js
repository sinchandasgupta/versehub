import useSongList from "@/hooks/useSongList";
import { useRouter } from "next/router";
import { PuffLoader } from "react-spinners";
import SearchSection from "@/components/SearchSection";
import Head from "next/head";
import ResultSection from "@/components/ResultSection";
import styles from "@/components/ResultSection/ResultSection.module.css";

function SearchResults() {
  const router = useRouter();
  const { songName } = router.query;
  const { songList, error, isLoading } = useSongList(songName);

  if (isLoading)
    return (
      <>
        <SearchSection />
        <section className={styles.spinner}>
          <PuffLoader />
        </section>
      </>
    );

  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      <Head>
        <title>Results: {songName}</title>
      </Head>
      <SearchSection />
      <ResultSection songList={songList} />
    </>
  );
}

export default SearchResults;
