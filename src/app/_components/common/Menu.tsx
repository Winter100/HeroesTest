"use client";
import { useCharacterStore } from "@/app/_store/characterStore";
import { useState } from "react";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { resetCharacters } = useCharacterStore();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const deleteAll = () => {
    resetCharacters();
    setIsOpen(false);
  };

  return (
    <div className="relative h-full items-center justify-center text-left hover:text-blue-300">
      <button
        onClick={toggleDropdown}
        className="flex h-full w-full items-center justify-center"
      >
        메뉴
      </button>

      {isOpen && (
        <div className="absolute mt-1 w-full rounded-md bg-white shadow-lg">
          <div
            className="w-full py-1 text-xs"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              className="block w-full p-2 text-center text-gray-700 hover:bg-gray-100"
              onClick={deleteAll}
            >
              모두 비우기
            </button>
            <button className="block w-full p-2 text-center text-gray-700 hover:bg-gray-100">
              Support
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
