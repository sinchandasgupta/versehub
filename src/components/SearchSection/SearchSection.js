import SearchInput from "../SearchInput";
import styles from "./SearchSection.module.css";

function SearchSection() {
  return (
    <section className={styles.searchsection}>
      <h2 className={styles.heading}>Search</h2>
      <SearchInput />
    </section>
  );
}

export default SearchSection;
