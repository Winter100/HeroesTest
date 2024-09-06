import { statsKeyWord } from "../_constant/stats";
import { CharacterStat, MergedCharacter } from "../_type/type";
import {
  getWaitingRoomToLocalStorage,
  removeWatingRoomCharactersInfo,
} from "./localStorage";

export const createInitialCharacterState = (isReset?: boolean) => {
  const stat: CharacterStat[] = Object.entries(statsKeyWord).map(([key]) => {
    return { stat_id: key, stat_value: "" };
  });

  let characters = [];

  if (isReset) {
    characters = [] as MergedCharacter[];
    removeWatingRoomCharactersInfo();
  } else {
    characters = getWaitingRoomToLocalStorage();
  }
  return {
    characters,
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
