import { getHost } from "@/util/get-host";

const apiHost = getHost();

export default async function Buggy() {
  if (process.env.CI) {
    return <h1>CI</h1>;
  }
  const response = await fetch(`${apiHost}/api/error`, {
    next: { revalidate: 0 },
  });
  if (!response.ok) throw new Error("Error!");
  const data = await response.json();

  return <h1>{JSON.stringify(data)}</h1>;
}
