import useSWR from "swr";

import { options, BASE_URL } from "@/lib/options";

const fetcher = (url) => fetch(url, options).then((res) => res.json());

function useLyrics(id) {
  const { data, error, isLoading } = useSWR(
    `${BASE_URL}/song/lyrics/?id=${id}`,
    fetcher
  );
  console.log(data?.lyrics.lyrics.body);
  return {
    lyrics: data?.lyrics.lyrics.body,
    error,
    isLoading,
  };
}

export default useLyrics;
