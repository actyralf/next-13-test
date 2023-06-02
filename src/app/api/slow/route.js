import { NextResponse } from "next/server";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function GET(req) {
  console.log("slow route");
  await wait(3000);

  return NextResponse.json({ message: "this is a slow response" });
}
