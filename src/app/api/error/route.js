import { NextResponse } from "next/server";

export async function GET(req) {
  console.log("--------------------");
  console.log("error route");
  console.log("--------------------");
  const coin = Math.round(Math.random());
  //   if (coin) {
  //     return NextResponse.json({ message: "error" }, { status: 500 });
  //   }
  return NextResponse.json({ message: "it worked!" });
}
