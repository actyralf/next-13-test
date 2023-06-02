export function getHost() {
  console.log(process.env.VERCEL_ENV);
  console.log(process.env.VERCEL_URL);
  if (process.env.VERCEL_ENV === "development") {
    return "http://localhost:3000";
  } else {
    return `https://${process.env.VERCEL_URL}`;
  }
}
