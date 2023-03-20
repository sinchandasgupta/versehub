import SearchInput from "../SearchInput";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function SearchSection() {
  return (
    <section>
      <h1>Search:</h1>
      <SearchInput />
    </section>
  );
}

export default SearchSection;
