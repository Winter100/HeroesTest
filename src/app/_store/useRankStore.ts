import { create } from "zustand";
import { MergedCharacter } from "../_type/type";

type State = {
  titleList: string[];
  characters: MergedCharacter[];
};

type Action = {
  setTitleList: (title: string[]) => void;
};

export const useRankStore = create<State & Action>((set) => {
  return {
    titleList: [
      "이름",
      "직업",
      "길드",
      "레벨",
      "공격력",
      "방어력",
      "크리티컬",
      "밸런스",
      "공격속도",
      "추가피해",
      "해제",
    ],
    characters: [],
    setTitleList: (titleValue: string[]) =>
      set(() => {
        return { titleList: [...titleValue] };
      }),
  };
});
