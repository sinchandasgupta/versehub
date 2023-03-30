import React from "react";
import Lyrics from "../Lyrics/Lyrics";

function ResultSection({ songList }) {
  return (
    <>
      <section>
        <h2>Search Results:</h2>
        {songList?.map(({ result }) => (
          <Lyrics key={result.id} result={result} />
        ))}
      </section>
    </>
  );
}

export default ResultSection;
