"use client";

import { useDrag } from "@/app/_hooks/useDrag/useDrag";
import { useRankStore } from "@/app/_store/useRankStore";
import { TitleType } from "@/app/_type/RankTitleListType";
import { getLocalStorageRankTitle } from "@/app/_utils/localStorage";
import { useEffect } from "react";

const AbilityRankThead = () => {
  const rankTitleList = useRankStore((state) => state.rankTitleList);
  const setInitialTitleList = useRankStore(
    (state) => state.setInitialTitleList,
  );
  const setDropTitleList = useRankStore((state) => state.setDropTitleList);
  const toggleView = useRankStore((state) => state.toggleView);
  const { dragEnd, dragEnter, dragOver, dragStart } = useDrag(setDropTitleList);

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
                draggable
                onDragOver={dragOver}
                onDragStart={(e) => dragStart(e, i)}
                onDragEnter={() => dragEnter(i)}
                onDragEnd={dragEnd}
              >
                <div className="relative h-full w-full">
                  <span className="flex h-full w-full items-center justify-center rounded-lg hover:bg-zinc-600">
                    {t?.stat_name}
                  </span>
                  {t.stat_name !== "이름" && (
                    <button
                      onClick={() => toggleView(t?.stat_name)}
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
