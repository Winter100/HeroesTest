import { NextResponse } from "next/server";

import { getSearchParamsValue } from "@/app/_utils/getSearchParamsValue";
import { SEARCH_PARAMS_KEY } from "@/app/_constant/searchParamsKey";
import { nexonInstance } from "@/app/_services/nexonInstance";

export async function GET(request: Request) {
  const characterName = getSearchParamsValue(
    request,
    SEARCH_PARAMS_KEY.character_name,
  );

  if (!characterName) {
    return NextResponse.json(
      { error: "캐릭터 이름은 필수입니다." },
      { status: 400 },
    );
  }

  try {
    const response = await nexonInstance.get(
      `/id?character_name=${characterName}`,
    );

    const data: string = await response.data;

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "API 요청 중 오류 발생" },
      { status: 500 },
    );
  }
}
