"use client";

import { useDrag } from "@/app/_hooks/useDrag/useDrag";
import { useRankStore } from "@/app/_store/useRankStore";

const AbilityRankThead = () => {
  const rankTitleList = useRankStore((state) => state.rankTitleList);
  const setDropTitleList = useRankStore((state) => state.setDropTitleList);
  const toggleView = useRankStore((state) => state.toggleView);
  const { dragEnd, dragEnter, dragOver, dragStart } = useDrag(setDropTitleList);

  return (
    <thead className="h-9 w-full items-center justify-center rounded-lg bg-zinc-800">
      <tr className="relative flex h-full w-full grid-cols-9 lg:grid">
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
                  <span className="flex h-full w-full items-center justify-center hover:text-blue-300">
                    {t?.stat_name}
                  </span>
                  <button
                    onClick={() => toggleView(t.stat_name)}
                    className="absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-lg border-none text-[10px] text-red-200 hover:text-red-400"
                  >
                    X
                  </button>
                </div>
              </th>
            ),
        )}
      </tr>
    </thead>
  );
};

export default AbilityRankThead;
