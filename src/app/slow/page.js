import styles from "../page.module.css";
import { getHost } from "@/util/get-host";

const apiHost = getHost();

export default async function Slow() {
  if (process.env.CI) {
    return <h1>CI</h1>;
  }
  const res = await fetch(`${apiHost}/api/slow`, {
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
