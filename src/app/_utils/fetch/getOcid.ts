import { findOcidByName, setOcidListToLocalStorage } from "../localStorage";

export const getOcid = async (characterName: string) => {
  let ocid = findOcidByName(characterName);

  if (!ocid) {
    const response = await fetch(
      `api/getCharacterOcid?character_name=${encodeURIComponent(characterName)}`,
      {
        method: "GET",
        cache: "no-store",
      },
    );

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err);
    }

    const data: { ocid: string } = await response.json();
    ocid = setOcidListToLocalStorage(characterName, data);
  }

  return ocid;
};
