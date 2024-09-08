"use client";
import { useState } from "react";

import Button from "../../common/Button";
import { useRankStore } from "@/app/_store/useRankStore";

const StatDropDownMenu = () => {
  const [view, isView] = useState(false);
  const rankTitleList = useRankStore((state) => state.rankTitleList);
  const toggleView = useRankStore((state) => state.toggleView);

  return (
    <div className="inline-block h-full w-24">
      <Button
        onClick={() => isView((pre) => !pre)}
        className="flex h-full w-full items-center justify-center"
      >
        스텟 필터
        <svg
          className="-mr-1 h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
      <div
        className={`absolute mt-1 flex w-24 flex-col rounded-lg bg-black transition-all duration-300 ease-in-out ${view ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-[10px] opacity-0"} `}
      >
        {rankTitleList.map((t) => (
          <button
            key={t.stat_name}
            onClick={() => toggleView(t.stat_name)}
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
