import { NextResponse } from "next/server";

import { getSearchParamsValue } from "@/app/_utils/getSearchParamsValue";
import { SEARCH_PARAMS_KEY } from "@/app/_constant/searchParamsKey";
import { CharacterBasic } from "@/app/_type/type";

export async function GET(request: Request) {
  const ocid = getSearchParamsValue(request, SEARCH_PARAMS_KEY.ocid);

  if (!ocid) {
    return NextResponse.json({ error: "ocid가 없습니다." }, { status: 400 });
  }

  try {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY as string;
    const response = await fetch(
      `https://open.api.nexon.com/heroes/v1/character/basic?ocid=${ocid}`,
      {
        method: "GET",
        headers: {
          "x-nxopen-api-key": apiKey,
        },
      },
    );

    const data: CharacterBasic = await response.json();

    return NextResponse.json(data);
  } catch (e) {}
}
