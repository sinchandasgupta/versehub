import React from "react";
import useSongList from "@/hooks/useSongList";
import { useRouter } from "next/router";
import { PuffLoader } from "react-spinners";
import { Inter } from "next/font/google";
import SearchInput from "@/components/SearchInput";

const inter = Inter({ subsets: ["latin"] });

function SearchResults() {
  const router = useRouter();
  const { songName } = router.query;
  const { songList, error, isLoading } = useSongList(songName);

  return (
    <>
      <h1 className={inter.className}>VerseHub</h1>
      <SearchInput />
      <h1>Search Results:</h1>
      {isLoading && <PuffLoader />}
      {songList?.map(({ result }) => (
        <h5>{result.full_title}</h5>
      ))}
    </>
  );
}

export default SearchResults;
