import styles from "../page.module.css";

export default async function Slow() {
  const res = await fetch("http://localhost:3000/api/slow", {
    next: { revalidate: 0 },
  });
  const data = await res.json();
  return (
    <main className={styles.main}>
      <h1>Slow Demo</h1>
      <p>{data.message}</p>
    </main>
  );
}
