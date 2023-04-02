import useLyrics from "@/hooks/useLyrics";
import { useRouter } from "next/router";
import { PuffLoader } from "react-spinners";

export default function LyricsPage() {
  const router = useRouter();
  const { id } = router.query;
  const { lyrics, error, isLoading } = useLyrics(id);
  const html = lyrics?.html;
  // Strip the already existing  <a></a>
  // in the html
  const strippedLyrics = html?.replace(/<a\s+href=[^>]*>|<\/a>/gi, "");

  if (isLoading)
    return (
      <>
        <section className="">
          <PuffLoader />
        </section>
      </>
    );

  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      <section dangerouslySetInnerHTML={{ __html: strippedLyrics }} />
    </>
  );
}
