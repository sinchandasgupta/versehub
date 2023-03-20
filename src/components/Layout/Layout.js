import styles from "./Layout.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function Layout({ children }) {
  return (
    <div className={inter.className}>
      <h1 className={styles.heading}>VerseHub</h1>
      <main className={styles.main}>
        <div className={styles.frame}>{children}</div>
      </main>
    </div>
  );
}

export default Layout;
