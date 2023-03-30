import Image from "next/image";
import Link from "next/link";

function Lyrics({ result }) {
  return (
    <Link href={`/lyrics/${result.id}`}>
      <Image width={20} height={20} src={result.header_image_thumbnail_url} />
      <div>
        <h2>{result.title}</h2>
        <p>{result.primary_artist.name}</p>
      </div>
    </Link>
  );
}

export default Lyrics;
