import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Next Demo</h1>
      <Link href="/rickandmorty">Routing Demo</Link>
      <Link href="/slow">Slow demo</Link>
      <Link href="/buggy">Buggy demo</Link>
      <Link href="/image">Image demo</Link>
    </main>
  );
}
