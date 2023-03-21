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
        <h2>Search Results:</h2>
        {isLoading && <PuffLoader />}
        {songList?.map(({ result }) => (
          <div>{result.full_title}</div>
        ))}
      </section>
    </>
  );
}

export default SearchResults;
