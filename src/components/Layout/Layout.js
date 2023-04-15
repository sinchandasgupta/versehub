import styles from "./Layout.module.css";
import { Poppins } from "next/font/google";

const font = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });

function Layout({ children }) {
  return (
    <div className={font.className}>
      <h1 className={styles.heading}>
        Verse<span className={styles.hub}>HUB</span>
      </h1>
      <main className={styles.main}>
        <div className={styles.frame}>{children}</div>
      </main>
    </div>
  );
}

export default Layout;
