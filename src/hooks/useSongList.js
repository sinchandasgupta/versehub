import useSWR from "swr";
import { options, BASE_URL } from "@/lib/options";

const fetcher = (url) => fetch(url, options).then((res) => res.json());

function useSongList(searchTerm) {
  const { data, error, isLoading } = useSWR(
    `${BASE_URL}/search/?q=${searchTerm}`,
    fetcher,
    {
      revalidateOnMount: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: 0,
    }
  );

  return {
    songList: data?.hits,
    error,
    isLoading,
  };
}

export default useSongList;
