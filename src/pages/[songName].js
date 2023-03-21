import useSongList from "@/hooks/useSongList";
import { useRouter } from "next/router";
import { PuffLoader } from "react-spinners";
import SearchSection from "@/components/SearchSection";
import Head from "next/head";

function SearchResults() {
  const router = useRouter();
  const { songName } = router.query;
  const { songList, error, isLoading } = useSongList(songName);

  if (isLoading)
    return (
      <>
        <SearchSection />
        <section>
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
      <section>
        <h2>Search Results:</h2>
        {songList?.map(({ result }) => (
          <div>{result.full_title}</div>
        ))}
      </section>
    </>
  );
}

export default SearchResults;
