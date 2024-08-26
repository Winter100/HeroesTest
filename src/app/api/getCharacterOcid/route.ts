import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const characterName = searchParams.get("character_name");

  try {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY as string;
    const response = await fetch(
      `https://open.api.nexon.com/heroes/v1/id?character_name=${characterName}`,
      {
        method: "GET",
        headers: {
          "x-nxopen-api-key": apiKey,
        },
      },
    );

    const data = await response.json();

    if (!data.error) {
      return NextResponse.json(data);
    } else {
      return NextResponse.json({ error: data.error }, { status: 400 });
    }
  } catch (e) {
    console.error(e);
  }
}
