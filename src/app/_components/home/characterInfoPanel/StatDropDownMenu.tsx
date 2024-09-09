"use client";
import { useState } from "react";

import Button from "../../common/Button";
import { useRankStore } from "@/app/_store/useRankStore";
import { useDrag } from "@/app/_hooks/useDrag/useDrag";
import BottomArrow from "../../common/BottomArrow";

const StatDropDownMenu = () => {
  const [view, isView] = useState(false);
  const rankTitleList = useRankStore((state) => state.rankTitleList);
  const toggleView = useRankStore((state) => state.toggleView);
  const setDropTitleList = useRankStore((state) => state.setDropTitleList);
  const { dragEnd, dragEnter, dragOver, dragStart } = useDrag(setDropTitleList);

  return (
    <div className="inline-block h-full w-28">
      <Button
        onClick={() => isView((pre) => !pre)}
        className="flex h-full w-full items-center justify-center"
      >
        <span>스텟 필터 추가</span>
        <BottomArrow />
      </Button>
      <div
        className={`absolute z-10 mt-1 flex w-28 flex-col rounded-lg bg-black transition-all duration-300 ease-in-out ${view ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-[10px] opacity-0"} `}
      >
        {rankTitleList.map((t, i) => (
          <button
            draggable={t.isView}
            key={t.stat_name}
            onClick={() => toggleView(t.stat_name)}
            onDragStart={(e) => dragStart(e, i)}
            onDragOver={dragOver}
            onDragEnter={(e) => dragEnter(e, i)}
            onDragEnd={(e) => dragEnd(e)}
            className={`h-8 hover:bg-zinc-700 ${t.isView === true ? "text-blue-300" : "text-red-300"}`}
          >
            {t.stat_name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StatDropDownMenu;
