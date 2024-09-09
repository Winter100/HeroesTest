import { create } from "zustand";
import { MergedCharacter } from "../_type/characterType";
// import { c1 } from "../_constant/qwer";

type State = {
  characters: MergedCharacter[];
};

type Action = {
  addCharacter: (character: MergedCharacter) => void;
  reset: () => void;
};

export const useCharacterStore = create<State & Action>((set) => {
  return {
    characters: [] as MergedCharacter[],
    addCharacter: (characterData: MergedCharacter) =>
      set((state) => ({
        characters: state.characters.some((c) => c.name === characterData.name)
          ? state.characters.map((c) =>
              c.name === characterData.name ? characterData : c,
            )
          : [...state.characters, characterData],
      })),
    reset: () => {
      set({ characters: [] as MergedCharacter[] });
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
