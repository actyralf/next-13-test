import { getHost } from "@/util/get-host";

const apiHost = getHost();

export default async function Buggy() {
  const response = await fetch(`${apiHost}/api/error`, {
    next: { revalidate: 0 },
  });
  if (!response.ok) throw new Error("Error!");
  const data = await response.json();

  return <h1>{JSON.stringify(data)}</h1>;
}
