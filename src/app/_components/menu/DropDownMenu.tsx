"use client";
import { useState } from "react";
import Button from "../common/Button";
import { useCharacterStore } from "@/app/_store/characterStore";

const DropDownMenu = () => {
  const [view, isView] = useState(false);

  const resetCharacters = useCharacterStore((state) => state.resetCharacters);

  const reset = () => {
    resetCharacters();
    isView(false);
  };
  return (
    <div className="inline-block h-full w-20">
      <Button
        onClick={() => isView((pre) => !pre)}
        className="flex h-full w-full items-center justify-center"
      >
        메뉴
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
        className={`absolute flex w-20 flex-col gap-1 bg-black transition-all duration-300 ease-in-out ${view ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-[10px] opacity-0"} `}
      >
        {/* <button className="h-8 border-b border-gray-50 hover:bg-zinc-800">
          새로고침
        </button> */}
        <button
          onClick={reset}
          className="h-8 border-b border-gray-50 hover:bg-zinc-800"
        >
          모두 비우기
        </button>
        {/* <button className="h-8 border-b border-gray-50 hover:bg-zinc-800">
          3
        </button> */}
      </div>
    </div>
  );
};

export default DropDownMenu;
