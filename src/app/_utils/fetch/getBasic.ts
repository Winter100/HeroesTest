import { CharacterBasic } from "@/app/_type/type";

export const getBasic = async (ocid: string) => {
  const response = await fetch(
    `api/getCharacterBasic?ocid=${encodeURIComponent(ocid)}`,
  );

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err);
  }

  const data: CharacterBasic = await response.json();

  return data;
};
