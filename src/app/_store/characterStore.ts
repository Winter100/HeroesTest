import { create } from "zustand";
import { MergedCharacter } from "../_type/characterType";
import { c1 } from "../_constant/qwer";

type State = {
  characters: MergedCharacter[];
  selected: MergedCharacter | null;
};

type Action = {
  addCharacter: (character: MergedCharacter) => void;
  setDropCharacterist: (start: number, end: number) => void;
  reset: () => void;
};

export const useCharacterStore = create<State & Action>((set) => {
  return {
    characters: c1 as MergedCharacter[],
    selected: null,
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

    reset: () => {
      set({ characters: [] as MergedCharacter[] });
    },
  };
});
