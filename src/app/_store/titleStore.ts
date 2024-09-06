import { create } from "zustand";

interface TitleStore {
  titleList: string[];
  setTitleList: (title: string[]) => void;
}

export const useTitleStore = create<TitleStore>((set) => ({
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
  setTitleList: (titleValue: string[]) =>
    set(() => {
      return { titleList: [...titleValue] };
    }),
}));
