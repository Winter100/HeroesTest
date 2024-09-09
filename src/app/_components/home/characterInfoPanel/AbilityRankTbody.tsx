"use client";

import { v4 as uuidv4 } from "uuid";
import { useCharacterStore } from "@/app/_store/characterStore";
import { useRankStore } from "@/app/_store/useRankStore";
import { filterCharacters } from "./utils/filterCharacters";
import { useDrag } from "@/app/_hooks/useDrag/useDrag";
import { useEffect } from "react";
import { getLocalStorageItems } from "@/app/_utils/localStorage";
import { LOCALSTORAGE_KEY } from "@/app/_constant/localstorage";
import { MergedCharacter } from "@/app/_type/characterType";

const AbilityRankTbody = () => {
  const characters = useCharacterStore((state) => state.characters);
  const addCharacter = useCharacterStore((state) => state.addCharacter);
  const selectedCharacter = useCharacterStore(
    (state) => state.selectedCharacter,
  );
  const selectedHandler = useCharacterStore((state) => state.selectedHandler);
  const setDropCharacterist = useCharacterStore(
    (state) => state.setDropCharacterist,
  );
  const selectedTitleList = useRankStore((state) => state.rankTitleList);
  const filteredCharacters = filterCharacters(characters, selectedTitleList);

  const { dragEnd, dragEnter, dragOver, dragStart } =
    useDrag(setDropCharacterist);

  useEffect(() => {
    const waitinList =
      getLocalStorageItems<MergedCharacter[]>(LOCALSTORAGE_KEY.waiting) ?? [];
    waitinList.slice(0, 8).map((c) => addCharacter(c));
  }, [addCharacter]);

  return (
    <tbody className="grid h-full w-full grid-rows-8 rounded-lg bg-zinc-800">
      {filteredCharacters.map((c, i) => (
        <tr
          key={uuidv4()}
          onClick={() => selectedHandler(c.name)}
          draggable
          onDragStart={(e) => dragStart(e, i)}
          onDragEnd={dragEnd}
          onDragOver={dragOver}
          onDragEnter={() => dragEnter(i)}
          className={`flex w-full grid-cols-9 items-center justify-center rounded-lg lg:grid ${c?.name?.length > 1 ? "border-b border-gray-400 hover:cursor-pointer hover:bg-zinc-600" : ""} ${selectedCharacter?.name === c.name && selectedCharacter?.name !== null ? "text-blue-300" : ""}`}
        >
          {c?.info.map((i) => (
            <td
              className="flex h-full flex-1 items-center justify-center"
              key={i?.stat_name + i?.stat_value}
            >
              {i?.stat_value}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default AbilityRankTbody;
