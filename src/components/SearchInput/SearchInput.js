import { useRouter } from "next/router";
import { useState } from "react";

function SearchInput() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="searchinput-wrapper">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            router.push(`${searchTerm}`);
            setSearchTerm("");
          }}
        >
          <div className="search">
            <input
              required
              type="text"
              placeholder="Search your song"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button>Search</button>
        </form>
      </div>
    </>
  );
}

export default SearchInput;
