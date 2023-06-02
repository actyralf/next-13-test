import styles from "../page.module.css";
import Link from "next/link";

export default async function RickandmortyList() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();
  const characters = data.results;
  console.log(data);
  return (
    <main className={styles.main}>
      <h1>Fetch Demo</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <Link href={`/rickandmorty/${character.id}`}>{character.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
