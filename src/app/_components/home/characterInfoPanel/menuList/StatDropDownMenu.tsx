"use client";
import { useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";

import { useRankStore } from "@/app/_store/rankStore";
import { useDrag } from "@/app/_hooks/useDrag/useDrag";
import Button from "@/app/_components/common/Button";
import BottomArrow from "@/app/_components/common/BottomArrow";
import { useOutsideClick } from "@/app/_hooks/useOutsideClick/useOutsideClick";
import { getLocalStorageRankTitle } from "@/app/_utils/localStorage";
import { TitleType } from "@/app/_type/RankTitleListType";

const StatDropDownMenu = () => {
  const [view, setView] = useState(false);
  const rankTitleList = useRankStore((state) => state.rankTitleList);
  const toggleView = useRankStore((state) => state.toggleView);
  const setDropTitleList = useRankStore((state) => state.setDropTitleList);
  const { dragEnd, dragEnter, dragOver, dragStart } = useDrag(setDropTitleList);

  const setInitialTitleList = useRankStore(
    (state) => state.setInitialTitleList,
  );

  const outSideRef = useOutsideClick(() => {
    setView(false);
  });

  useEffect(() => {
    const titleList = getLocalStorageRankTitle() ?? ([] as TitleType[]);
    setInitialTitleList(titleList);
  }, [setInitialTitleList]);

  return (
    <div className="inline-block h-full w-20" ref={outSideRef}>
      <Button
        onClick={() => setView((pre) => !pre)}
        className="flex h-full w-full items-center justify-center gap-1"
      >
        <CiFilter className="text-lg" />
        <span>필터</span>
        <BottomArrow />
      </Button>
      <div
        className={`absolute z-10 mt-1 flex w-20 flex-col rounded-lg bg-black transition-all duration-300 ease-in-out ${view ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-[10px] opacity-0"} `}
      >
        {rankTitleList?.map((t, i) => (
          <button
            draggable={t.isView}
            key={t.stat_name}
            onClick={() => toggleView(t.stat_name)}
            onDragStart={(e) => dragStart(e, i)}
            onDragOver={dragOver}
            onDragEnter={() => dragEnter(i)}
            onDragEnd={() => dragEnd()}
            className={`h-8 rounded-lg hover:bg-zinc-700 ${t.isView === true ? "text-blue-300" : "text-red-300"}`}
          >
            {t.stat_name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StatDropDownMenu;
