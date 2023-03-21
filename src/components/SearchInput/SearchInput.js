import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./SearchInput.module.css";
import { Search } from "react-feather";

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
          <div className={styles.inputWrapper}>
            <input
              required
              className={styles.textInput}
              type="text"
              placeholder="Search your song"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className={styles.searchButton}>
              <Search color="white" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SearchInput;
