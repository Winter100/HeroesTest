import { LOCALSTORAGE_KEY } from "../_constant/localstorage";
import { statsKeyWord } from "../_constant/stats";
import { CharacterStat, MergedCharacter } from "../_type/type";
import { getLocalStorageItems } from "./localStorage";

export const createInitialCharacterState = () => {
  const stat: CharacterStat[] = Object.entries(statsKeyWord).map(([key]) => {
    return { stat_id: key, stat_value: "" };
  });

  const temp = getLocalStorageItems(
    LOCALSTORAGE_KEY.characterInfoList,
  ) as MergedCharacter[];

  return {
    characters: temp.slice(0, 8) || ([] as MergedCharacter[]),
    selectedCharacter: {
      name: "",
      basic: {
        name: "",
        class: "",
        guild: "",
        level: "",
      },
      stat,
    },
    ascending: false,
    beforeSortValue: "",
  };
};
