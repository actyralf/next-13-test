import Image from "next/image";
export default function ImagePage() {
  return (
    <main>
      <h1>Image Demo</h1>
      <Image
        src="https://source.unsplash.com/K4mSJ7kc0As"
        width={200}
        height={200}
        alt="Picture of the author"
      />
      <Image
        src="https://source.unsplash.com/K4mSJ7kc0As"
        width={500}
        height={500}
        alt="Picture of the author"
      />
      <img
        src="https://source.unsplash.com/K4mSJ7kc0As"
        width={200}
        height={200}
        alt="Picture of the author"
      />
      <img
        src="https://source.unsplash.com/K4mSJ7kc0As"
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </main>
  );
}
