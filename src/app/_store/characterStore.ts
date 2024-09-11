import { create } from "zustand";
import { MergedCharacter } from "../_type/characterType";
import {
  removeWatingRoomCharactersInfo,
  setWaitingRoomCharactersInfo,
} from "../_utils/localStorage";
import { sortCharacters } from "../_utils/sortCharacters";

type State = {
  characters: MergedCharacter[];
  selectedCharacter: MergedCharacter | null;
};

type Action = {
  addCharacter: (
    character: MergedCharacter,
    selectedRankTitle?: {
      titleName: string;
      ascending: boolean;
    } | null,
  ) => void;
  setDropCharacterList: (start: number, end: number) => void;
  setSortCharacterList: (title: string, ascending: boolean) => void;
  selectedHandler: (name: string) => void;
  reset: () => void;
};

export const useCharacterStore = create<State & Action>((set) => {
  return {
    characters: [],
    selectedCharacter: null,
    addCharacter: (characterData, selectedRankTitle) =>
      set((state) => {
        if (selectedRankTitle !== null && selectedRankTitle?.titleName) {
          const newCharacters = [...state.characters];

          const existingCharacterIndex = newCharacters.findIndex(
            (character) => character.name === characterData.name,
          );

          if (existingCharacterIndex > -1) {
            newCharacters[existingCharacterIndex] = { ...characterData };
          } else {
            newCharacters.push({ ...characterData });
          }

          const updatedCharacterList = sortCharacters(
            selectedRankTitle?.titleName,
            selectedRankTitle?.ascending,
            newCharacters,
          );

          return { characters: updatedCharacterList };
        } else {
          const updatedCharacterList = state?.characters?.some(
            (c) => c.name === characterData.name,
          )
            ? state.characters.map((c) =>
                c.name === characterData.name ? characterData : c,
              )
            : [...state.characters, characterData];
          return { characters: updatedCharacterList };
        }
      }),

    // 선택한 캐릭터의 정보만 넣음
    selectedHandler: (name: string) => {
      set((state) => {
        if (state.selectedCharacter?.name === name) {
          return { selectedCharacter: null };
        }
        return {
          selectedCharacter: state.characters.find((c) => c.name === name),
        };
      });
    },

    // 드롭 다운에 따른 캐릭터 정렬
    setDropCharacterList: (start: number, end: number) =>
      set((state) => {
        const updatedCharacterList = [...state.characters];
        const [movedItem] = updatedCharacterList.splice(start, 1);
        updatedCharacterList.splice(end, 0, movedItem);

        setWaitingRoomCharactersInfo(updatedCharacterList);
        return { characters: updatedCharacterList };
      }),

    // 스텟 필터에 따른 캐릭터 정렬
    setSortCharacterList: (title: string, ascending: boolean) => {
      set((state) => {
        const characterList = [...state.characters];
        const updatedCharacterList = sortCharacters(
          title,
          ascending,
          characterList,
        );
        setWaitingRoomCharactersInfo(updatedCharacterList);
        return { characters: updatedCharacterList };
      });
    },

    reset: () => {
      set(() => {
        removeWatingRoomCharactersInfo();
        return { characters: [] as MergedCharacter[] };
      });
    },
  };
});
