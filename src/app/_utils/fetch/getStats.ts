import { FetchStats } from "@/app/_type/type";

export const getStats = async (ocid: string) => {
  const response = await fetch(
    `api/getCharacterStat?ocid=${encodeURIComponent(ocid)}`,
  );

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err);
  }

  const data: FetchStats = await response.json();

  return data;
};
