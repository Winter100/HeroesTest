import { create } from "zustand";
import { MergedCharacter } from "../_type/characterType";

type State = {
  rankTitleList: { stat_name: string; isView: boolean }[];
};

type Action = {
  toggleView: (title: string) => void;
  setDropTitleList: (start: number, end: number) => void;
};

// 로컬스토리지로 아래 내역 저장하기
export const useRankStore = create<State & Action>((set) => {
  return {
    rankTitleList: [
      { stat_name: "이름", isView: true },
      { stat_name: "직업", isView: true },
      { stat_name: "공격력", isView: true },
      { stat_name: "해제", isView: true },
      { stat_name: "추가피해", isView: true },
      { stat_name: "대항력", isView: true },
      { stat_name: "크리티컬", isView: true },
      { stat_name: "밸런스", isView: true },
      // { stat_name: "길드", isView: false },
      // { stat_name: "레벨", isView: false },
      // { stat_name: "방어력", isView: false },
      { stat_name: "공격속도", isView: false },
    ],
    toggleView: (title: string) =>
      set((state) => {
        const updatedRankTitleList = state.rankTitleList
          .map(
            (item) =>
              item.stat_name === title
                ? { ...item, isView: !item.isView }
                : item,
            // item.stat_name === title ? { ...item, isView: !item.isView } : item,
          )
          .sort((a, b) => (a.isView === b.isView ? 0 : a.isView ? -1 : 1));
        return { rankTitleList: updatedRankTitleList };
      }),
    setDropTitleList: (start: number, end: number) =>
      set((state) => {
        const updatedRankTitleList = [...state.rankTitleList];
        const [movedItem] = updatedRankTitleList.splice(start, 1);
        updatedRankTitleList.splice(end, 0, movedItem);

        return { rankTitleList: updatedRankTitleList };
      }),
  };
});
