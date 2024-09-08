"use client";

import { useDrag } from "@/app/_hooks/useDrag/useDrag";
import { useRankStore } from "@/app/_store/useRankStore";

const AbilityRankThead = () => {
  const rankTitleList = useRankStore((state) => state.rankTitleList);
  const setDropTitleList = useRankStore((state) => state.setDropTitleList);

  const { dragEnd, dragEnter, dragOver, dragStart } = useDrag(setDropTitleList);

  return (
    <thead className="flex h-9 w-full items-center justify-center rounded-lg bg-zinc-800">
      <tr className="flex h-full w-full">
        {rankTitleList?.map(
          (t, i) =>
            t?.isView && (
              <th
                className={`flex h-full w-full items-center justify-center hover:cursor-pointer hover:text-blue-300`}
                key={t?.stat_name}
                draggable
                onDragOver={dragOver}
                onDragStart={(e) => dragStart(e, i)}
                onDragEnter={(e) => dragEnter(e, i)}
                onDragEnd={dragEnd}
              >
                {t?.stat_name}
              </th>
            ),
        )}
      </tr>
    </thead>
  );
};

export default AbilityRankThead;
