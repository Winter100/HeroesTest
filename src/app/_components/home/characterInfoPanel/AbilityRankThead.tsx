"use client";

import { useEffect } from "react";
import { useDrag } from "@/app/_hooks/useDrag/useDrag";
import { useRankStore } from "@/app/_store/rankStore";
import { TitleType } from "@/app/_type/RankTitleListType";
import { getLocalStorageRankTitle } from "@/app/_utils/localStorage";
import { useCharacterStore } from "@/app/_store/characterStore";

const AbilityRankThead = () => {
  const rankTitleList = useRankStore((state) => state.rankTitleList);
  const setSortCharacterList = useCharacterStore(
    (state) => state.setSortCharacterList,
  );
  const selectedRankTitle = useRankStore((state) => state.selectedRankTitle);
  const setInitialTitleList = useRankStore(
    (state) => state.setInitialTitleList,
  );
  const setDropTitleList = useRankStore((state) => state.setDropTitleList);
  const toggleView = useRankStore((state) => state.toggleView);

  const setSeletRankTitle = useRankStore((state) => state.setSeletRankTitle);
  const { dragEnd, dragEnter, dragOver, dragStart } = useDrag(setDropTitleList);

  const onRemove = (
    e: React.MouseEvent<HTMLButtonElement>,
    statName: string,
  ) => {
    e.stopPropagation();
    toggleView(statName);
  };

  const sort = (title: string) => {
    setSeletRankTitle(title);
  };

  useEffect(() => {
    if (selectedRankTitle) {
      setSortCharacterList(
        selectedRankTitle?.titleName,
        selectedRankTitle?.ascending,
      );
    }
  }, [setSortCharacterList, selectedRankTitle]);

  useEffect(() => {
    const titleList = getLocalStorageRankTitle() as TitleType[];
    setInitialTitleList(titleList);
  }, [setInitialTitleList]);

  return (
    <thead className="min-h-8 w-full items-center justify-center rounded-lg bg-zinc-800">
      <tr className="relative flex h-full w-full items-center justify-center">
        {rankTitleList?.map(
          (t, i) =>
            t?.isView && (
              <th
                className={`flex h-full w-full items-center justify-center rounded-lg hover:cursor-pointer`}
                key={t?.stat_name}
                onClick={() => sort(t.stat_name)}
                draggable
                onDragOver={dragOver}
                onDragStart={(e) => dragStart(e, i)}
                onDragEnter={() => dragEnter(i)}
                onDragEnd={dragEnd}
              >
                <div className="relative h-full w-full">
                  <span
                    className={`${selectedRankTitle?.titleName === t.stat_name ? (selectedRankTitle.ascending === false ? "text-green-300" : "text-red-300") : "text-white"} flex h-full w-full items-center justify-center rounded-lg hover:bg-zinc-600`}
                  >
                    {t?.stat_name}
                  </span>
                  {t.stat_name !== "이름" && (
                    <button
                      onClick={(e) => onRemove(e, t?.stat_name)}
                      className="absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-lg border-none text-[10px] text-red-200 hover:text-red-400"
                    >
                      X
                    </button>
                  )}
                </div>
              </th>
            ),
        )}
      </tr>
    </thead>
  );
};

export default AbilityRankThead;
