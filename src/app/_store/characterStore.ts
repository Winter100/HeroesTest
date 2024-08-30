import { create } from "zustand";

import { createInitialCharacterState } from "../_utils/createInitialState";
import { MergedCharacter } from "../_type/type";
import { sortCharacters } from "../_utils/sortCharacters";

interface CharacterStore {
  characters: MergedCharacter[];
  selectedCharacter: MergedCharacter;
  ascending: boolean;
  beforeSortValue: string;
  resetCharacters: () => void;
  addCharacter: (character: MergedCharacter) => void;
  addSelectedCharacter: (character: MergedCharacter) => void;
  setAscending: (asc: boolean) => void;
  sortCharacterList: (title: string) => void;
}

export const useCharacterStore = create<CharacterStore>((set) => {
  const initialState = createInitialCharacterState();
  return {
    ...initialState,

    resetCharacters: () => set(createInitialCharacterState),

    addCharacter: (character: MergedCharacter) =>
      set((state) => ({
        characters: state.characters.some((c) => c.name === character.name)
          ? state.characters.map((c) =>
              c.name === character.name ? character : c,
            )
          : [...state.characters, character],
      })),

    addSelectedCharacter: (character: MergedCharacter) =>
      set({ selectedCharacter: character }),

    setAscending: (asc: boolean) => set({ ascending: asc }),

    sortCharacterList: (sortValue: string = "") =>
      set((state) => {
        const ascending =
          state.beforeSortValue === sortValue ? !state.ascending : false;
        return {
          ascending,
          beforeSortValue: sortValue,
          characters: sortCharacters(sortValue, state.characters, ascending),
        };
      }),
  };
});
