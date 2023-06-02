import Image from "next/image";
export default async function RickandmortyDetail({ params }) {
  const { id } = params;
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`,
    {
      next: { revalidate: 0 },
    }
  );
  if (!response.ok) throw new Error("Error!");
  const data = await response.json();

  return (
    <>
      <h1>{data.name}</h1>
      <Image src={data.image} alt={data.name} width={500} height={500} />
    </>
  );
}
