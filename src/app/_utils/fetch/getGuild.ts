import { Guild } from "@/app/_type/type";

export const getGuild = async (ocid: string) => {
  const response = await fetch(
    `api/getCharacterGuild?ocid=${encodeURIComponent(ocid)}`,
  );

  const data: Guild = await response.json();

  return data;
};
