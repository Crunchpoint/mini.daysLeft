import styles from "./page.module.scss";
import Visual from "@/components/index/Visual";

export default function Home() {
  return (
    <main className={styles.main}>
      <Visual />
    </main>
  );
}
