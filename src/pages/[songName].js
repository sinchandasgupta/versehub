import useSongList from "@/hooks/useSongList";
import { useRouter } from "next/router";
import { PuffLoader } from "react-spinners";
import SearchSection from "@/components/SearchSection";

function SearchResults() {
  const router = useRouter();
  const { songName } = router.query;
  const { songList, error, isLoading } = useSongList(songName);

  return (
    <>
      <SearchSection />
      <section>
        <h1>Search Results:</h1>
        {isLoading && <PuffLoader />}
        {songList?.map(({ result }) => (
          <h5>{result.full_title}</h5>
        ))}
      </section>
    </>
  );
}

export default SearchResults;
