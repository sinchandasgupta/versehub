import React from "react";

function ResultSection({ songList }) {
  return (
    <>
      <section>
        <h2>Search Results:</h2>
        {songList?.map(({ result }) => (
          <div>{result.full_title}</div>
        ))}
      </section>
    </>
  );
}

export default ResultSection;
