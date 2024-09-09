import { create } from "zustand";
import { MergedCharacter } from "../_type/characterType";
import { c1 } from "../_constant/qwer";
import {
  getLocalStorageItems,
  removeWatingRoomCharactersInfo,
} from "../_utils/localStorage";
import { LOCALSTORAGE_KEY } from "../_constant/localstorage";

type State = {
  characters: MergedCharacter[];
  selectedCharacter: MergedCharacter | null;
};

type Action = {
  addCharacter: (character: MergedCharacter) => void;
  setDropCharacterist: (start: number, end: number) => void;
  selectedHandler: (name: string) => void;
  reset: () => void;
};

export const useCharacterStore = create<State & Action>((set) => {
  return {
    characters: [],
    selectedCharacter: null,
    addCharacter: (characterData: MergedCharacter) =>
      set((state) => ({
        characters: state.characters.some((c) => c.name === characterData.name)
          ? state.characters.map((c) =>
              c.name === characterData.name ? characterData : c,
            )
          : [...state.characters, characterData],
      })),
    setDropCharacterist: (start: number, end: number) =>
      set((state) => {
        const updatedCharacterList = [...state.characters];
        const [movedItem] = updatedCharacterList.splice(start, 1);
        updatedCharacterList.splice(end, 0, movedItem);

        return { characters: updatedCharacterList };
      }),
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

    reset: () => {
      set(() => {
        removeWatingRoomCharactersInfo();
        return { characters: [] as MergedCharacter[] };
      });
    },
  };
});
