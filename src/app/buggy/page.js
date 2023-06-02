export default async function Buggy() {
  const response = await fetch("http://localhost:3000/api/error", {
    next: { revalidate: 0 },
  });
  if (!response.ok) throw new Error("Error!");
  const data = await response.json();

  return <h1>{JSON.stringify(data)}</h1>;
}
