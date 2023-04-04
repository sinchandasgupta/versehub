import Head from "next/head";
import SearchSection from "@/components/SearchSection";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Verse-Hub</title>
        <meta name="description" content="Get lyrics in seconds..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchSection />
      <section className={styles.section}>
        <h2 className={styles.heading}>Get lyrics in seconds!..</h2>
      </section>
    </>
  );
}
