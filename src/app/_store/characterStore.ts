import { create } from "zustand";
import { MergedCharacter } from "../_type/type";
import { sortCharacters } from "../_utils/sortCharacters";

interface CharacterStore {
  characters: MergedCharacter[];
  selectedCharacter: MergedCharacter;
  addCharacter: (character: MergedCharacter) => void;
  addSelectedCharacter: (character: MergedCharacter) => void;
  ascending: boolean;
  beforeSortValue: string;
  setAscending: (asc: boolean) => void;
  sortCharacterList: (title: string) => void;
}

export const useCharacterStore = create<CharacterStore>((set) => ({
  characters: [],
  addCharacter: (character: MergedCharacter) =>
    set((state) => {
      const existingCharacterIndex = state.characters.findIndex(
        (c) => c.name === character.name,
      );

      if (existingCharacterIndex !== -1) {
        const updatedCharacters = [...state.characters];
        updatedCharacters[existingCharacterIndex] = character;
        return { characters: updatedCharacters };
      } else {
        return { characters: [...state.characters, character] };
      }
    }),
  selectedCharacter: {
    basic: {
      name: "",
      guild: "",
      level: "",
      class: "",
    },
  } as MergedCharacter,
  addSelectedCharacter: (character: MergedCharacter) =>
    set(() => {
      return { selectedCharacter: character };
    }),
  ascending: false,
  setAscending: (asc: boolean) =>
    set(() => {
      return { ascending: asc };
    }),
  beforeSortValue: "",
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
}));
