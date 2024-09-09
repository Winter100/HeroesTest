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
export const useCharacterStore = create<State & Action>((set) => {
  return {
    characters: [],
    selectedCharacter: null,
    addCharacter: (characterData: MergedCharacter) =>
      set((state) => ({
        characters: state.characters.some((c) => c.name === characterData.name)
        characters: state.characters.some((c) => c.name === characterData.name)
          ? state.characters.map((c) =>
              c.name === characterData.name ? characterData : c,
              c.name === characterData.name ? characterData : c,
            )
          : [...state.characters, characterData],
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
// export const useCharacterStore = create<State & Action>((set) => {
//   const initialState = createInitialCharacterState();
//   return {
//     ...initialState,

//     resetCharacters: () => set(() => createInitialCharacterState(true)),

//     addCharacter: (character: MergedCharacter) =>
//       set((state) => ({
//         characters: state.characters.some((c) => c.name === character.name)
//           ? state.characters.map((c) =>
//               c.name === character.name ? character : c,
//             )
//           : [...state.characters, character],
//       })),

//     addSelectedCharacter: (character: MergedCharacter) =>
//       set({ selectedCharacter: character }),

//     setAscending: (asc: boolean) => set({ ascending: asc }),

//     sortCharacterList: (sortValue: string = "") =>
//       set((state) => {
//         const ascending =
//           state.beforeSortValue === sortValue ? !state.ascending : false;
//         return {
//           ascending,
//           beforeSortValue: sortValue,
//           characters: sortCharacters(sortValue, state.characters, ascending),
//         };
//       }),
//   };
// });
